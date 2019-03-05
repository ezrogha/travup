import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListScreen from './mylist';
import DetailsScreen from './details';
import RegisterScreen from './register';
import IntroScreen from './Intro';

const AppNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
    },
    List: {
      screen: ListScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Register: {
      screen: RegisterScreen,
    }
  },
  {
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      header: null
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  }
)

export default createAppContainer(AppNavigator)