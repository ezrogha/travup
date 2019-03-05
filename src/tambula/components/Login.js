import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { onChangeEmail, onChangePassword, onLoginUser } from '../actions/loginSignUpActions';
import Realm from 'realm';
import { databaseOptions, USER_SCHEMA } from "../database/schemas";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeLoginEmail = email => {
    this.props.onChangeEmail(email)
  }

  onChangeLoginPassword = password => {
    this.props.onChangePassword(password)
  }

  onLogin = () => {
    const loginData = this.props.loginData
    this.props.onLoginUser(loginData)
  }

  render() {
    const { email, password, redirect } = this.props.loginData
    if(redirect) {
      this.props.navigation.navigate('List');
    }

    return (
      <View style={styles.containertStyles}>
        <Text style={styles.headingStyles}>Travup</Text>
        <TextInput style={styles.inputStyles} value={email} placeholder="Email" onChangeText={this.onChangeLoginEmail.bind(this)} autoFocus />
        <TextInput secureTextEntry style={{...styles.inputStyles, marginBottom: 10 }} value={password} placeholder="Password" onChangeText={this.onChangeLoginPassword.bind(this)} />
        <TouchableOpacity style={styles.loginBtnStyles} onPress={this.onLogin.bind(this)}>
          <Text style={styles.mainLoginTextStyles}>Login</Text>
        </TouchableOpacity>
        <View style={styles.thirdPartyContainerStyles}>
          <TouchableOpacity style={styles.GoogleLoginStyles} onPress={() => alert("Google Login")}>
            <Text style={styles.FbTextStyles}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FbLoginStyles} onPress={() => alert("Facebook Login")}>
            <Text style={styles.FbTextStyles}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 16 }}>Don't have an account?{' '}</Text>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Signup')
          }}>
            <Text style={{ fontSize: 16, textDecorationLine: 'underline' }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 10,
    marginBottom: 10,
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
  thirdPartyContainerStyles: {
    flexDirection: 'row',
    marginTop: 10,
  },
  GoogleLoginStyles: {
    flex: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 2,
    borderColor: 'rgb(204,84,65)',
    borderRadius: 5,
    backgroundColor: 'rgb(204,84,65)',
    marginLeft: 5
  },
  FbLoginStyles: {
    flex: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 2,
    borderColor: 'rgb(73,104,173)',
    borderRadius: 5,
    backgroundColor: 'rgb(73,104,173)',
    marginLeft: 5,
    marginRight: 5
  },
  FbTextStyles: {
    // alignSelf: 'center'
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
})

const mapStateToProps = state => {
  return {
    loginData: state.Login
  }
}

export default connect(mapStateToProps, 
  {
    onChangeEmail, 
    onChangePassword,
    onLoginUser
  })(Login);
