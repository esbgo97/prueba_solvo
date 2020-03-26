import React from 'react';
import { Button, View,StyleSheet,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/ui/screens/HomeScreen'
import CountriesScreen from './src/ui/screens/CountriesScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Countries" component={CountriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

