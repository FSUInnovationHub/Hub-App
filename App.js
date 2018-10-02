import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import RoomScreen from './screens/RoomScreen'

const {width} = Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
      <AppNav/>
    );
  }
}
const AppNav = createDrawerNavigator({
  
  Home: HomeScreen, 
  Rooms: RoomScreen, 
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