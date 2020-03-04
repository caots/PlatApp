import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import mocks from '../data/data'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ListScreen from '../screens/List'
import ArticleScreen from '../screens/Article'


const Stack = createStackNavigator();
export default class MainApp extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='List' component={ListScreen}/>
                    <Stack.Screen name='Article' component={ArticleScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}