import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { onChangeSignupName, onChangeSignupContact, onChangeSignupEmail, onChangeSignupAddress, onChangeSignupPassword, onChangeSignupConfirmPassword, onSignupUser } from '../actions/loginSignUpActions';

class Signup extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = 'Signup';
    return { headerTitle };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onChangeName = name => {
    this.props.onChangeSignupName(name)
  }

  onChangeContact = contact => {
    this.props.onChangeSignupContact(contact)
  }

  onChangeEmail = email => {
    this.props.onChangeSignupEmail(email)
  }

  onChangeAddress = address => {
    this.props.onChangeSignupAddress(address)
  }

  onChangePassword = password => {
    this.props.onChangeSignupPassword(password)
  }

  onChangeConfirmPassword = confirmPassword => {
    this.props.onChangeSignupConfirmPassword(confirmPassword)
  }

  onSignUp = () => {
    const signupData = this.props.signupData
    if (signupData.password !== signupData.confirm_password) {
      alert('Passwords don\'t match')
      return;
    }
    this.props.onSignupUser(signupData)
    
  }

  render() {
    const { redirect, name, contact, email, address, password, confirmPassword } = this.props.signupData

    if(redirect) {
      this.props.navigation.navigate('Login')
    }
    return (
      <ScrollView>
      <View style={styles.containertStyles}>
        {/* <Text style={styles.headingStyles}>Signup</Text> */}
        <TextInput value={name} onChangeText={this.onChangeName.bind(this)} placeholder='Fullname' style={styles.inputStyles} />
        <TextInput value={contact} keyboardType='numeric' onChangeText={this.onChangeContact.bind(this)} placeholder='Contact' style={styles.inputStyles} />
        <TextInput value={email} keyboardType='email-address' onChangeText={this.onChangeEmail.bind(this)} placeholder='Email' style={styles.inputStyles} />
        <TextInput value={address} onChangeText={this.onChangeAddress.bind(this)} placeholder='Address' style={styles.inputStyles} />
        <TextInput secureTextEntry value={password} onChangeText={this.onChangePassword.bind(this)} placeholder='Password' style={styles.inputStyles} />
        <TextInput secureTextEntry value={confirmPassword} onChangeText={this.onChangeConfirmPassword.bind(this)} placeholder='Confirm Password' style={{ ...styles.inputStyles, marginBottom: 10 }} />
        <TouchableOpacity style={styles.loginBtnStyles} onPress={this.onSignUp.bind(this)}>
          <Text style={styles.mainLoginTextStyles}>Signup</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containertStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headingStyles: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 5,
    // marginBottom: 5,
  },
  inputStyles: {
    borderColor: '#bbb',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch'
  },
  loginBtnStyles: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#ddd'
  },
  mainLoginTextStyles: {
    fontSize: 15,
    color: '#333'
  },
})

const mapStateToProps = state => {
  return {
    signupData: state.Signup
  }
}

export default connect(mapStateToProps, 
  {
    onChangeSignupName, 
    onChangeSignupContact, 
    onChangeSignupEmail, 
    onChangeSignupAddress, 
    onChangeSignupPassword, 
    onChangeSignupConfirmPassword,
    onSignupUser
  })(Signup);
