import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Header, Body, Left, Right, Icon, Button, Title } from 'native-base';

import HomeScreen from './screens/HomeScreen.js'

export default class HomeStackNav extends React.Component {
  static navigationOptions = {
      drawerIcon: ({tintColor}) => (
          <Icon name="home" style={{fontSize:24, color:tintColor }} />
      )
  }

  render() {
    return(
      <StackNav />
    )
  }
}

const StackNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home'
      })
    }
  }
)
