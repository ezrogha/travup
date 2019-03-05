import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    Dimensions.get("window").height;
    return (
      <View>
        <View style={{ position: "absolute" }}>
          <Image style={styles.ImgStyles} source={require("../images/pic.jpg")} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bodyStyles}>
            <View style={{ flexDirection: 'row', height: 70, justifyContent: 'space-between', backgroundColor: '#bcbcbc' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 10, marginTop: 10 }} source={require('../images/avatar1.jpg')} />
                {/* <View> */}
                  <Text style={{ marginTop: 25, marginLeft: 5, fontSize: 10 }}>Fullname goes here</Text>
                {/* </View> */}
              </View>
              <View style={{ marginRight: 10 }}>
                <Text style={{ marginTop: 20, fontSize: 16 }}>3,000,000,000/=</Text>
              </View>            
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3 bedrooms, self contained</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyles: {
    backgroundColor: "#fff",
    height: 1000,
    marginTop: Dimensions.get("screen").height - 150
  },
  ImgStyles: {
    height: Dimensions.get('screen').height
  }
});

export default Property;
