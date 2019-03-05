import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  ScrollView,
  StyleSheet
} from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Picker placeholder="Your city" mode="dropdown" style={{ flex: 50 }}>
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
          <Picker placeholder="Car type" mode="dialog" style={{ flex: 50 }}>
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
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Picker placeholder="Gear" mode="dropdown" style={{ flex: 50 }}>
            <Picker.Item label="Automatic" value="Automatic" />
            <Picker.Item label="Manual" value="Manual" />
          </Picker>
          <Picker placeholder="WD" mode="dropdown" style={{ flex: 50 }}>
            <Picker.Item label="2WD" value="2WD" />
            <Picker.Item label="4WD" value="4WD" />
          </Picker>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Picker placeholder="Fuel Type" mode="dropdown" style={{ flex: 50 }}>
            <Picker.Item label="Petrol" value="Petrol" />
            <Picker.Item label="Diesel" value="Diesel" />
          </Picker>
          <TextInput
            placeholder="Seaters"
            style={{ ...styles.inputStyles, flex: 50 }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TextInput placeholder="Plate number" style={{ ...styles.inputStyles, flex: 50 }} />
          <TextInput placeholder="Vehicle brand" style={{ ...styles.inputStyles, flex: 50 }} />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TextInput placeholder="Vehicle model" style={{ ...styles.inputStyles, flex: 50 }} />
          <TextInput placeholder="Vehicle make" style={{ ...styles.inputStyles, flex: 50 }} />
        </View>
        <TextInput
          placeholder="Comment about the car"
          style={styles.inputStyles}
          multiline
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputStyles: {
    borderColor: "#bbb",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "stretch",
    fontSize: 16
  }
});

export default Register;
