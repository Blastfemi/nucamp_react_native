import React, { Component } from 'react';
import Home from './HomeComponent'
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
// Week 1: Task 1 - Import About & Contact components
import About from './AboutComponent';
import Contact from './ContactComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

// Week 1: Task 1 - Create Stack Navigator for About
const AboutNavigator = createStackNavigator(
  {
    Directory: { screen: About },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);
  
  // Week 1: Task 1 - Create Stack Navigator for Contact
  const ContactNavigator = createStackNavigator(
    {
    Directory: { screen: Contact },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: 'Directory',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const HomeNavigator =  createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

// Week 1: Task 1 - Include About & Contact in Drawer Navigator
const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
    About: { screen: AboutNavigator },
    Contact: { screen: ContactNavigator }
  },
  {
    drawerBackgroundColor: '#CEC8FF'
  }
);

class Main extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        }}>
        <MainNavigator />
      </View>
    )
  }
}

export default Main;