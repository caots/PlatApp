import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'native-base'

import ExploreScreen from './screens/ExploreScreen'
import SavedScreen from './screens/SavedScreen'
import TripsScreen from './screens/TripsScreen'
import InboxScreen from './screens/InboxScreen'
import ProfileScreen from './screens/ProfileScreen'


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor;
            switch(route.name){
              case 'Explore' :
                iconColor = focused
                  ? 'tomato'
                  : 'gray'
                return (<Icon name="ios-search" style={{color: iconColor}}/>)
              case 'Saved' :
                iconColor = focused
                  ? 'tomato'
                  : 'gray'
                return (<Icon name="ios-heart" style={{color: iconColor}}/>)  
              case 'Trips' :
                  iconColor = focused
                    ? 'tomato'
                    : 'gray'
                  return (<Image source={require('./assets/airbnb.png')} style={{height:24, width:24, color: iconColor}}/>)
              case 'Inbox' :
                iconColor = focused
                  ? 'tomato'
                  : 'gray'
                return (<Icon name="ios-chatboxes" style={{color: iconColor}}/>)
              case 'Profile' :
                iconColor = focused
                  ? 'tomato'
                  : 'gray'
                return (<Icon name="ios-person" style={{color: iconColor}}/>)   
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style:{
            // shadowOffset:{width:5, height:5},
            // shadowColor:'black',
            // shadowOpacity:0.5,
            // elevation:5,
          }
        }}
      >
          <Tab.Screen name='Explore' component={ExploreScreen} />
          <Tab.Screen name='Saved' component={SavedScreen} />
          <Tab.Screen name='Trips' component={TripsScreen} />
          <Tab.Screen name='Inbox' component={InboxScreen} />
          <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

