import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Platform, StatusBar, Image } from 'react-native';
import { Header, Body, Left, Right, Icon, Button, Title } from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Innovation Hub App!</Text>
        <Image source={require('../../assets/images/hublogo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
