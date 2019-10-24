import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import Home from '../Screens/Home';

const MainStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      return {
        title: routeName,
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: (
          <Icon
            name="md-menu"
            size={30}
            style={{paddingLeft: 10, color: 'white'}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  }
);

export default MainStackNavigator;
