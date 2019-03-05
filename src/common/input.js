import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  const { labelStyles, inputStyles, containerStyles } = styles;
  return (
    <View style={containerStyles}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#cccccc"
        autoCorrect={false}
        value={value}
        style={inputStyles}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  labelStyles: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
  },

  inputStyles: {
    height: 40,
    fontSize: 18,
    paddingRight: 15,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 2
  },

  containerStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { Input };
