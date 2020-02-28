import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Icon, Title} from 'native-base'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UploadScreen from '../screens/UploadScreen'
import LikeScreen from '../screens/LikeScreen'

const Tab = createBottomTabNavigator();

export default class MainScreen extends Component{
    render(){
        return(
                <Tab.Navigator 
                    backBehavior='order'
                    tabBarOptions={{
                      activeTintColor: '#ffc700',
                      inactiveTintColor: 'gray',
                      showLabel: true,
                    }}
                    
                >
                    <Tab.Screen name='Home' component={HomeScreen}/>
                    <Tab.Screen name='Search' component={SearchScreen}/>
                    <Tab.Screen name='Upload' component={UploadScreen}/>
                    <Tab.Screen name='Like' component={LikeScreen}/>
                    <Tab.Screen name='Profile' component={ProfileScreen}/>
                </Tab.Navigator>
        )
    }
}