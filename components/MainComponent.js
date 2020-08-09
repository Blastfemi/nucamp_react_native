import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
// Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Import StyleSheet, Text, ScrollView & Image
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
// Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Import DrawerItems
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
// Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Import Icon
import { Icon } from 'react-native-elements';
// Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Import SafeAreaView
import SafeAreaView from 'react-native-safe-area-view';

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Set AboutNavigator Options
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Create Icon
      headerLeft: <Icon
        name='info-circle'
        type='font-awesome'
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - styles.stackIcon is a custom style 
        iconStyle={styles.stackIcon}
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Makes icon interactive
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Set ContactNavigator Options
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Create Icon
      headerLeft: <Icon
        name='address-card'
        type='font-awesome'
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - styles.stackIcon is a custom style 
        iconStyle={styles.stackIcon}
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Makes icon interactive
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const DirectoryNavigator = createStackNavigator(
  {
    // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Set Options just for DirectoryNavigator
    Directory: { 
      screen: Directory,
      // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Create navigation function
      navigationOptions: ({navigation}) => ({
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Create Icon
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - styles.stackIcon is a custom style 
          iconStyle={styles.stackIcon}
          // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Makes icon interactive
          onPress={() => navigation.toggleDrawer()}
        />
      })
    },
    CampsiteInfo: { screen: CampsiteInfo }
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

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Set HomeNavigator Options
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#5637DD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Create Icon
      headerLeft: <Icon
        name='home'
        type='font-awesome'
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - styles.stackIcon is a custom style 
        iconStyle={styles.stackIcon}
        // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Makes icon interactive
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

// Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - CustomDrawer Component
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>NuCamp</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const MainNavigator = createDrawerNavigator(
  // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Set navigation options for each screen 
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Directory: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='list'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({tintColor}) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({tintColor}) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#CEC8FF',
    // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Connect the custom component to DrawerNavigator
    contentComponent: CustomDrawerContentComponent
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
    );
  }
}

  // Week 2 - Exercise 2: Navigation Icons and Custom Side Drawer - Create StyleSheet
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    drawerHeader: {
      backgroundColor: '#5637DD',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      height: 60,
      width: 60
    },
    stackIcon: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 24
    }
  });

export default Main;