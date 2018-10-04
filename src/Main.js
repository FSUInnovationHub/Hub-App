import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,
         ScrollView, Dimensions, Image, Platform,
         StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import Home from './home/Home.js'
import Rooms from './rooms/Rooms.js'

const {width} = Dimensions.get('window')

export default class Main extends React.Component {
  render() {
    return (
      <AppNav/>
    );
  }
}

const AppNav = createDrawerNavigator({
    Home: Home,
    Rooms: Rooms
  }, {
    drawerWidth: width/2,
    contentOptions: {
      activeTintColor: 'orange'
    }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
