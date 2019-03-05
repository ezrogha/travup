import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtStyle}> Welcome to Travup </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtStyle: {
    fontSize: 28
  }
}

export default App;
