import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {Container, Content, Header, Left, Right, Icon, Item, Input, CardItem} from 'native-base'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ marginTop: Platform.OS === 'ios'? 34 : 0 }}>
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: ({focused, color, size}) =>{
          if (route.name === 'Home') {
            return (<Icon name='md-home' size={size} color={color} />)
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Drawer.Screen name="Home" component={ HomeScreen }/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

