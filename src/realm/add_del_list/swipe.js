import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import Swipeout from "react-native-swipeout";

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    showDeleteConfirmation = () => {
      Alert.alert(
        "Delete",
        "Delete a todoList",
        [
          {
            text: "No",
            onPress: () => {}, //Do nothing
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => {}
          }
        ],
        { cancelable: true }
      );
    };
    var swipeoutBtns = [
      {
        text: "Edit",
        backgroundColor: "rgb(81,134,237)"
        // onPress: showEditModal
      },
      {
        text: "Delete",
        backgroundColor: "rgb(217, 80, 64)",
        onPress: showDeleteConfirmation
      }
    ];
    return (
      <Swipeout right={swipeoutBtns} autoClose={true}>
        <View style={styles.swipeStyle}>
          <Text>Swipe me left</Text>
        </View>
      </Swipeout>
    );
  }
}

const styles = {
  swipeStyle: {
    height: 50
  }
};

export default Swipe;
