import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import loginScreen from './containers/loginScreen';
import HomeScreen from './containers/HomeScreen';
import MoviesScreen from './containers/MoviesScreen';
import WeatherConverter from './containers/WeatherConverter';
import DisplayAnImage from './containers/HariLayout';
import MyImageVIewApp from './containers/MyImageView';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" options={{ headerShown: false }} component={loginScreen}>

        <Drawer.Screen name="Login" options={{ headerShown: false }} component={loginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Movies" component={MoviesScreen} />
        <Drawer.Screen name="Weather Converter" component={WeatherConverter} />
        <Drawer.Screen name="My Movie Details" component={MyImageVIewApp} />
        <Drawer.Screen name="Image Gallery" component={DisplayAnImage} />
        
      </Drawer.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Movies" component={MoviesScreen} />
    //     <Drawer.Screen name="Weather Converter" component={WeatherConverter} />
    //     <Drawer.Screen name="Image Gallary" component={DisplayAnImage} />
    //     <Drawer.Screen name="My Image App" component={MyImageVIewApp} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
