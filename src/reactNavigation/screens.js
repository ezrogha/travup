import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';
import DetailsScreen from './details';

const AppNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },{
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNav)