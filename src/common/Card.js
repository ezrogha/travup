import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyles : {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
}

export {Card};