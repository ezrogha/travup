import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Buttonx = ({ onPress, children }) => {
  const { buttonContainer, TextStyles } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonContainer}>
      <Text style={TextStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 2,
    borderRadius: 5,
    // borderColor: '#007aff',
    borderColor: '#5b9fc1',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  TextStyles: {
    alignSelf: 'center',
    // color: '#007aff',
    color: '#5b9fc1',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export { Buttonx };
