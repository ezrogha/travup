import React, { Component } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 27, fontFamily: "serif" }}> Login </Text>
        <TextInput style={styles.inputStyles} placeholder="Username" />
        <TextInput style={styles.inputStyles} placeholder="Password" />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("List")}
          style={{
            backgroundColor: "#768732",
            width: 300,
            height: 40,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyles: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: 300
  }
};

export default Intro;
