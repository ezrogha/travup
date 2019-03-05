import _ from "lodash";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Form,
  Input,
  Textarea,
  Icon,
  Item,
  Text,
  Picker,
  Label,
  Left,
  Right,
  Title,
  Header,
  Button,
  Body
} from "native-base";
import ImagePicker from "react-native-image-picker";

import { Buttonx } from "./common";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contact: "",
      email: "",
      city: "",
      type: "",
      gear: "",
      wheel_drive: "",
      fuel: "",
      seaters: "",
      vehicle_registration: "",
      vehicle_model: "",
      comment: "",
      itemId: "",
      available: "Yes",
      pictureSrc: {
        pictureSrc1: {},
        pictureSrc2: {},
        pictureSrc3: {},
        pictureSrc4: {},
        pictureSrc5: {}
      }
    };
  }

  componentWillMount() {
    const itemId =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 16) +
      Math.random()
        .toString(36)
        .substr(2, 16);
    this.setState({ itemId });
  }

  onRegisterUser() {
    // const pictureSrc = this.state.pictureSrc;
    // src1 = pictureSrc.pictureSrc1;
    // src2 = pictureSrc.pictureSrc2;
    // src3 = pictureSrc.pictureSrc3;
    // src4 = pictureSrc.pictureSrc4;
    // src5 = pictureSrc.pictureSrc5;
    // firebase.database().ref('Users/Owners/')
    //   .push(this.state)
    //   .then(() => {
    //     const pictureSrc = this.state.pictureSrc;
    //     const container = 'container';
    //     const mime = 'image/jpg';
    //     const imageRef = firebase.storage().ref(container).child(this.state.itemId);
    //     for (let i = 1; i <= 5; i++) {
    //       const imagePath = pictureSrc[`pictureSrc${i}`].uri;
    //       imageRef
    //         .child(`image_${i}`)
    //         .put(imagePath, { contentType: mime })
    //         .then(() => {
    //           alert('Upload Successful');
    //           console.log('Upload Successful');
    //         }).catch((error) => {
    //           alert('Upload Failed');
    //           alert(error);
    //           console.log(`Image Upload Failed: ${error}`);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     alert('Error');
    //     alert(error);
    //     console.log(`Error: ${error}`);
    //   });
  }

  onValueChange(stateVal, value) {
    this.setState({
      [stateVal]: value
    });
  }

  selectPhotoTapped(num) {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      // console.log("Response = ", response);

      if (response.didCancel) {
        // console.log("User cancelled photo picker");
      } else if (response.error) {
        // console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        // console.log("User tapped custom button: ", response.customButton);
      } else {
        // const User = firebase.auth().currentUser;
        const source = { uri: response.uri };
        const container = "container";
        // const email = User._user.email;
        const mime = "image/jpg";
        const ImagePath = response.uri;
        // const imageRef = firebase
        // .storage()
        // .ref(container)
        // .child(email)
        // .child(`image_${num}`);
        // imageRef
        // .put(ImagePath, { contentType: mime })
        // .then(() => {
        //   console.log('Upload Success');
        // })
        // .catch(() => {
        //   console.log('Upload Failed');
        // });
        const currentSrc = this.state.pictureSrc;
        const myKey = `pictureSrc${num}`;

        this.setState({
          pictureSrc: {
            ...currentSrc,
            [myKey]: source
          }
        });
      }
    });
  }

  render() {
    const pictureSrc = this.state.pictureSrc;
    const picData = Object.keys(pictureSrc).map(k => {
      return { [k]: pictureSrc[k] };
    });

    const picSrcOrder = [
      "pictureSrc1",
      "pictureSrc2",
      "pictureSrc3",
      "pictureSrc4",
      "pictureSrc5"
    ];

    const newPicData = [];

    picSrcOrder.map(element => {
      newPicData.push({ [element]: this.state.pictureSrc[element] });
    });

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Register Vehicle</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Icon name="user" type="FontAwesome" />
              <Input
                label="Fullname"
                value={this.state.name}
                autoCorrect={false}
                placeholder="Full Name"
                placeholderTextColor="#aaaaaa"
                onChangeText={name => {
                  this.setState({ name });
                }}
              />
            </Item>
            <Item>
              <Icon name="phone" type="FontAwesome" />
              <Input
                label="Contact"
                value={this.state.contact}
                autoCorrect={false}
                keyboardType="numeric"
                placeholder="0777 777777"
                placeholderTextColor="#aaaaaa"
                onChangeText={contact => {
                  this.setState({ contact });
                }}
              />
            </Item>
            <Item>
              <Icon name="envelope" type="FontAwesome" />
              <Input
                label="Email"
                value={this.state.email}
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="email@gmail.com*"
                placeholderTextColor="#aaaaaa"
                onChangeText={email => {
                  this.setState({ email });
                }}
              />
            </Item>
            <Item>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  width={{ width: 200 }}
                  note
                  selectedValue={this.state.city}
                  onValueChange={city => this.onValueChange("city", city)}
                >
                  <Picker.Item label="Your City" value="" />
                  <Picker.Item label="Kampala" value="Kampala" />
                  <Picker.Item label="Wakiso" value="Wakiso" />
                  <Picker.Item label="Jinja" value="Jinja" />
                  <Picker.Item label="Ntungamo" value="Ntungamo" />
                  <Picker.Item label="Mbale" value="Mbale" />
                  <Picker.Item label="Bushenyi" value="Bushenyi" />
                  <Picker.Item label="Mbarara" value="Mbarara" />
                  <Picker.Item label="Budaka" value="Budaka" />
                  <Picker.Item label="Manafwa" value="Manafwa" />
                </Picker>
                <Picker
                  mode="dropdown"
                  width={{ width: 120 }}
                  note
                  selectedValue={this.state.type}
                  onValueChange={type => this.onValueChange("type", type)}
                >
                  <Picker.Item label="Car Type" value="" />
                  <Picker.Item label="Motorcyle" value="Motorcyle" />
                  <Picker.Item label="Sedan" value="Sedan" />
                  <Picker.Item label="Wagon" value="Wagon" />
                  <Picker.Item label="SUV" value="SUV" />
                  <Picker.Item label="Pickup" value="Pickup" />
                  <Picker.Item label="Van" value="Van" />
                  <Picker.Item label="Truck" value="Truck" />
                  <Picker.Item label="Lorry" value="Lorry" />
                  <Picker.Item label="Bus" value="Bus" />
                </Picker>
              </View>
            </Item>
            <Item>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  width={{ width: 200 }}
                  note
                  selectedValue={this.state.gear}
                  onValueChange={gear => this.onValueChange("gear", gear)}
                >
                  <Picker.Item label="Gear Type" value="" />
                  <Picker.Item label="Automatic" value="Automatic" />
                  <Picker.Item label="Manual" value="Manual" />
                </Picker>
                <Picker
                  mode="dropdown"
                  width={{ width: 120 }}
                  note
                  selectedValue={this.state.wd}
                  onValueChange={wd => this.onValueChange("wheel_drive", wd)}
                >
                  <Picker.Item label="WD" value="" />
                  <Picker.Item label="2WD" value="2WD" />
                  <Picker.Item label="4WD" value="4WD" />
                </Picker>
              </View>
            </Item>
            <Item>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  width={{ width: 200 }}
                  note
                  selectedValue={this.state.fuel}
                  onValueChange={fuel => this.onValueChange("fuel", fuel)}
                >
                  <Picker.Item label="Fuel Type" value="" />
                  <Picker.Item label="Petrol" value="Petrol" />
                  <Picker.Item label="Diesel" value="Diesel" />
                </Picker>
                <Input
                  placeholder="Seaters"
                  placeholderTextColor="#aaaaaa"
                  value={this.state.seaters}
                  onChangeText={seaters => this.setState({ seaters })}
                />
              </View>
            </Item>

            <Item>
              <Icon name="hashtag" type="FontAwesome" />
              <Input
                autoCorrect={false}
                value={this.state.vehicle_registration}
                placeholder="Vehicle Registration Number"
                placeholderTextColor="#aaaaaa"
                onChangeText={vehicle_registration => {
                  this.setState({ vehicle_registration });
                }}
              />
            </Item>

            <Item>
              <Icon name="ios-car" type="Ionicons" />
              <Input
                label="Vehicle"
                autoCorrect={false}
                value={this.state.vehicle_model}
                placeholder="Vehicle Model"
                placeholderTextColor="#aaaaaa"
                onChangeText={vehicle_model => {
                  this.setState({ vehicle_model });
                }}
              />
            </Item>
            <Text />
            <Item>
              <Textarea
                value={this.state.comment}
                style={styles.inputStyles}
                rowSpan={5}
                bordered
                placeholder="Comment About Your Car"
                placeholderTextColor="#aaaaaa"
                onChangeText={comment => {
                  this.setState({ comment });
                }}
              />
            </Item>
            <Text />
            <Item>
              {/* Pictures Start Here */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "column"
                }}
              >
                <View style={{ height: 150 }}>
                  <FlatList
                    horizontal
                    data={newPicData}
                    renderItem={({ item, index }) => {
                      const keys = Object.keys(item);
                      const myPictureSrc = keys[0];
                      return (
                        <TouchableOpacity
                          onPress={() => this.selectPhotoTapped(index + 1)}
                          index={index}
                          keyExtractor={index}
                        >
                          <View style={styles.pictureContainer}>
                            {_.isEmpty(item[myPictureSrc]) ? (
                              <View
                                style={{ flex: 1, justifyContent: "center" }}
                              >
                                <Icon
                                  type="FontAwesome"
                                  name="camera"
                                  style={{
                                    color: "grey",
                                    alignSelf: "center",
                                    fontSize: 24
                                  }}
                                />
                                <Text
                                  style={{
                                    color: "grey",
                                    alignSelf: "center",
                                    fontSize: 13
                                  }}
                                >
                                  {index + 1}
                                </Text>
                              </View>
                            ) : (
                              <Image
                                style={{ height: 150, width: 150 }}
                                source={item[myPictureSrc]}
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
              {/* Pictures Stop Here */}
            </Item>

            <Text />
            <Item>
              <Buttonx
                onPress={() => {
                  // this.onRegisterUser();
                  this.props.navigation.navigate("list");
                }}
              >
                <Text>Submit</Text>
              </Buttonx>
            </Item>
            <Text />
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputStyles: {
    fontSize: 18,
    paddingRight: 15,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 2,
    backgroundColor: "#ffffff"
  },
  pictureContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: 110,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: "transparent",
    margin: 4,
    overflow: "hidden"
  }
});

export default Register;
