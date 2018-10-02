import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

export default class RoomScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Room Reservation Feature!</Text>
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
