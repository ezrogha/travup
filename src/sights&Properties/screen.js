import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListScreen from '../sights&Properties/components/List';
import FavouritesScreen from '../sights&Properties/components/Favourites';
import PropertyScreen from '../sights&Properties/components/Property';

const AppNavigator = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      header: null
    }
  },
  Favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      header: null
    }
  },
  Property: {
    screen: PropertyScreen,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'List'
})

export default createAppContainer(AppNavigator)