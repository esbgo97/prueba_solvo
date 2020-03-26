import React from 'react';
import { Button, View,StyleSheet,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/ui/screens/HomeScreen'
import CountriesScreen from './src/ui/screens/CountriesScreen'
import DetailedCountry from './src/ui/screens/DetailedCountry'
import MoreScreen from './src/ui/screens/MoreScreen';
import FoldersScreen from './src/ui/screens/FoldersScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Countries" component={CountriesScreen} />
        <Drawer.Screen name="Folders" component={FoldersScreen} />
        <Drawer.Screen name="More" component={MoreScreen} />
        <Drawer.Screen name="DetailedCountry" component={DetailedCountry}  options={{drawerLabel:()=>null,gestureEnabled:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

