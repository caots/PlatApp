import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import MainScreen from  './screens/MainScreen'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name='Welcome' component={WelcomeScreen}/>
         <Stack.Screen name='VPS' component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
