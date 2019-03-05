import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import {
  Button,
  Icon,
  List,
  ListItem,
  Body,
  Right,
  Text,
  Left,
  Container,
  Header,
  Content,
  Title
} from "native-base";
import Realm from "realm";
import Dialog, { DialogTitle, SlideAnimation } from "react-native-popup-dialog";
import Swipeout from "react-native-swipeout";

class AddDelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: null,
      myList: [],
      inputText: "",
      editInputText: "",
      editItem: 0,
      scaleAnimationDialog: false,
      editAnimationDialog: false
    };
  }

  NAMES_SCHEMA = "Names";

  nameSchema = {
    name: this.NAMES_SCHEMA,
    primaryKey: "id",
    properties: {
      id: "int",
      name: "string",
      creationDate: "date"
    }
  };

  databaseOptions = {
    schema: [this.nameSchema],
    schemaVersion: 0
  };

  componentWillMount() {
    Realm.open(this.databaseOptions).then(realm => {
      this.setState({ myList: Object.values(realm.objects("Names")) });
    });
  }

  addItem = () => {
    if (this.state.inputText.trim() === "") {
      alert("Please enter an item");
      return;
    }
    const newName = {
      id: Math.floor(Date.now() / 1000),
      name: this.state.inputText,
      creationDate: new Date()
    };

    Realm.open(this.databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(this.NAMES_SCHEMA, newName);
        });
        this.setState({
          myList: Object.values(realm.objects("Names")),
          scaleAnimationDialog: false,
          inputText: ""
        });
      })
      .catch(error => alert(error));
  };

  editItem = () => {
    if (this.state.editInputText.trim() === "") {
      alert("Please don't leave field empty");
      return;
    }
    Realm.open(this.databaseOptions).then(realm => {
      realm.write(() => {
        let selectedItem = realm.objectForPrimaryKey(
          this.NAMES_SCHEMA,
          this.state.editItem
        );
        selectedItem.name = this.state.editInputText
      });
      this.setState({
        myList: Object.values(realm.objects("Names")),
        editAnimationDialog: false,
      });
    });
  };

  deleteItem = item => {
    Realm.open(this.databaseOptions)
      .then(realm => {
        realm.write(() => {
          let selectedItem = realm.objectForPrimaryKey(
            this.NAMES_SCHEMA,
            item.id
          );
          realm.delete(selectedItem);
        });
        this.setState({
          myList: Object.values(realm.objects("Names"))
        });
      })
      .catch(error => alert(error));
  };

  showDeleteConfirmation = item => {
    Alert.alert(
      "Confirm Delete",
      `Do you want to delete ${item.name}?`,
      [
        {
          text: "No",
          onPress: () => {}, //Do nothing
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => this.deleteItem(item)
        }
      ],
      { cancelable: true }
    );
  };

  deleteAllAssured = () => {
    Realm.open(this.databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allTodoItemms = realm.objects(this.NAMES_SCHEMA);
          realm.delete(allTodoItemms);
        });
        this.setState({
          myList: Object.values(realm.objects("Names"))
        });
      })
      .catch(error => alert(error));
  };

  deleteAll = () => {
    Alert.alert("Confirm Delete", "Do you want to delete all items?", [
      {
        text: "No",
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => this.deleteAllAssured()
      }
    ]);
  };

  showEditModal = item => {
    this.setState({
      editAnimationDialog: true,
      editInputText: item.name,
      editItem: item.id
    });
  };

  swipeoutBtns = item => [
    {
      text: "Edit",
      backgroundColor: "rgb(81,134,237)",
      onPress: () => this.showEditModal(item)
    },
    {
      text: "Delete",
      // backgroundColor: "rgb(217, 80, 64)",
      type: "delete",
      onPress: () => this.showDeleteConfirmation(item)
    }
  ];

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>TodoList</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.deleteAll()}>
              <Icon name="md-trash" />
            </Button>
            <Button
              transparent
              onPress={() => {
                this.setState({
                  scaleAnimationDialog: true
                });
              }}
            >
              <Icon name="ios-add-circle-outline" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {this.state.myList.length === 0 ? (
              <View
                style={{
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <Text style={{ fontSize: 20, color: "#777" }}>
                  Tap on{" "}
                  <Icon
                    name="ios-add-circle-outline"
                    style={{ fontSize: 17 }}
                  />{" "}
                  to add new item
                </Text>
              </View>
            ) : (
              <FlatList
                data={this.state.myList}
                renderItem={({ item, index }) => {
                  const date = item.creationDate.getDate();
                  const month = item.creationDate.getMonth() + 1;
                  const year = String(item.creationDate.getFullYear()).slice(2);
                  const hours = item.creationDate.getHours();
                  const minutes = item.creationDate.getMinutes();
                  const isToday =
                    item.creationDate.toDateString() ===
                    new Date().toDateString()
                      ? true
                      : false;
                  return (
                    <Swipeout
                      right={this.swipeoutBtns(item)}
                      backgroundColor="#f8f8f8"
                    >
                      <ListItem key={index}>
                        <Body>
                          <Text>{item.name}</Text>
                          <Text note>More about the todo</Text>
                        </Body>
                        <Right>
                          {isToday ? (
                            <Text note>{`${hours}:${minutes}`}</Text>
                          ) : (
                            <Text note>{`${date}/${month}/${year}`}</Text>
                          )}
                        </Right>
                      </ListItem>
                    </Swipeout>
                  );
                }}
              />
            )}
          </List>
          <Dialog
            onTouchOutside={() => {
              this.setState({ scaleAnimationDialog: false });
            }}
            width={0.8}
            rounded={false}
            height={180}
            visible={this.state.scaleAnimationDialog}
            // dialogAnimation={new SlideAnimation()}
            dialogTitle={<DialogTitle title="Add a new todo" />}
          >
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter TodoList name"
                autoCorrect={false}
                onChangeText={text => this.setState({ inputText: text })}
                value={this.state.inputText}
              />
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.addItem();
                  }}
                >
                  <Text style={styles.textLabel}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.setState({ scaleAnimationDialog: false })}
                >
                  <Text style={styles.textLabel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Dialog>
          <Dialog
            onTouchOutside={() => {
              this.setState({ scaleAnimationDialog: false });
            }}
            width={0.8}
            rounded={false}
            height={180}
            visible={this.state.editAnimationDialog}
            // dialogAnimation={new SlideAnimation()}
            dialogTitle={<DialogTitle title="Edit todo Item" />}
          >
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder="Edit TodoList name"
                autoCorrect={false}
                onChangeText={text => this.setState({ editInputText: text })}
                value={this.state.editInputText}
              />
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.editItem();
                  }}
                >
                  <Text style={styles.textLabel}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.setState({ editAnimationDialog: false })}
                >
                  <Text style={styles.textLabel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Dialog>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center"
  },
  textInput: {
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 1,
    marginLeft: 1,
    borderColor: "gray",
    borderWidth: 1
  },
  button: {
    backgroundColor: "steelblue",
    padding: 10,
    marginRight: 10
  },
  textLabel: {
    color: "white",
    fontSize: 16
  }
});

export default AddDelList;
