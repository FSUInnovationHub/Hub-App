import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';


class RoomScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RoomScreen</Text>
      </View>
    );
  }
}
export default RoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});