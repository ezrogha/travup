import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Dialog, {
  DialogTitle,
  DialogButton,
  DialogContent,
  SlideAnimation
} from "react-native-popup-dialog";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleAnimationDialog: false,
      name: ""
    };
  }

  render() {
    return (
      <View>
        <Button
          title="Show Dialog - Scale Animation"
          onPress={() => {
            this.setState({
              scaleAnimationDialog: true
            });
          }}
        />
        <Dialog
          onTouchOutside={() => {
            this.setState({ scaleAnimationDialog: false });
          }}
          width={0.7}
          rounded={false}
          height={180}
          visible={this.state.scaleAnimationDialog}
          dialogAnimation={new SlideAnimation()}
          dialogTitle={<DialogTitle title="Add a new todo" />}
        >
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter TodoList name"
              autoCorrect={false}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
              >
                <Text style={styles.textLabel}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
              >
                <Text style={styles.textLabel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  button: {
    backgroundColor: "steelblue",
    padding: 10,
    margin: 10
  },
  textLabel: {
    color: "white",
    fontSize: 18
  }
});
