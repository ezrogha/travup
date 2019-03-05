import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Button } from "native-base";

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const loc = "2 bedroom, 1 seating room spacious compound";
    let slicedLoc = loc.slice(0, 34) + "...";
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Property')}>
        <View style={styles.listItem}>
          <View style={styles.details}>
            <View style={styles.about}>
              <Text style={styles.aboutTxt}>{slicedLoc}</Text>
            </View>
            <View style={styles.address}>
              <Text style={styles.location}>Namugongo</Text>
              <View style={styles.icons}>
                <Button transparent>
                  <Icon style={styles.icon} name="share" />
                </Button>
                <Button transparent>
                  <Icon style={styles.icon} name="star" />
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    backgroundColor: "#fefefe",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
    height: 100,
    justifyContent: "space-between"
  },
  details: {
    // backgroundColor: '#fde98b',
    margin: 10,
    marginBottom: 0,
    flex: 1
  },
  about: {
    // backgroundColor: '#576432',
    marginBottom: 0,
    height: 45,
    overflow: "hidden"
  },
  aboutTxt: {
    fontSize: 18,
    color: '#888'
  },
  address: {
    // flex: 30,
    // backgroundColor: '#963580',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 100,
    marginLeft: 0,
    margin: 10,
    backgroundColor: "#ddd"
  },
  icons: {
    flexDirection: "row",
    // backgroundColor: '#435463',
    marginRight: -10
  },
  icon: {
    color: "#888",
    fontSize: 18
    // marginLeft:
  },
  location: {
    fontSize: 9
  }
});

export default Property;
