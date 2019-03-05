import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button title='Details' onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}

const styles = {
  txtStyles: {
    fontSize: 32
  },
  containerStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}