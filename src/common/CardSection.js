import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyles: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
}

export { CardSection };
