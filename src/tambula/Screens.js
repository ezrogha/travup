import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Button, Icon } from 'native-base';

import LoginScreen from "./components/Login";
import SignupScreen from "./components/Signup";
import ListScreen from './components/List';
import RegisterScreen from './components/Register3';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignupScreen,
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
        header: null
        // headerTitle: 'Vehicle',
        // headerLeft: null,
        // headerStyle: { backgroundColor: '#43d46a' },
        // headerRight: (<Button transparent style={{ marginTop: 5 }}><Icon name='home' /></Button>)
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
        // headerTitle: 'Register Vehicle',
        // headerRight: (<Button transparent style={{ marginTop: 5 }}><Icon name='home' /></Button>)
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator)