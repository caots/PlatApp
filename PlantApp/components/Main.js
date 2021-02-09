import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Explore from '../screens/Explore'
import Browse from '../screens/Browse'
import Product from '../screens/Product'
import Settings from '../screens/Settings'
import {AppLoading} from 'expo'
import { Asset } from 'expo-asset';

import Block from './Block'

import {theme} from '../constants'

// import all used images
const images = [
    require("../assets/icons/back.png"),
    require("../assets/icons/plants.png"),
    require("../assets/icons/seeds.png"),
    require("../assets/icons/flowers.png"),
    require("../assets/icons/sprayers.png"),
    require("../assets/icons/pots.png"),
    require("../assets/icons/fertilizers.png"),
    require("../assets/images/plants_1.png"),
    require("../assets/images/plants_2.png"),
    require("../assets/images/plants_3.png"),
    require("../assets/images/explore_1.png"),
    require("../assets/images/explore_2.png"),
    require("../assets/images/explore_3.png"),
    require("../assets/images/explore_4.png"),
    require("../assets/images/explore_5.png"),
    require("../assets/images/explore_6.png"),
    require("../assets/images/illustration_1.png"),
    require("../assets/images/illustration_2.png"),
    require("../assets/images/illustration_3.png"),
    require("../assets/images/avatar.jpg")
  ];
  

const Stack = createStackNavigator();

export default class MainApp extends Component {

    constructor(props){
        super(props);
        this.state={
            isLoadingComplete : false
        }
    }

    handleResourcesAsync = async () => {
        // we're caching all the images
        // for better performance on the app
    
        const cacheImages = images.map(image => {
          return Asset.fromModule(image).downloadAsync();
        });
    
        return Promise.all(cacheImages);
    };
    render(){

        if (!this.state.isLoadingComplete) {
            return (  
                <AppLoading
                    startAsync={this.handleResourcesAsync}
                    onError={error => console.warn(error)}
                    onFinish={() => this.setState({ isLoadingComplete: true })}
            />
            );
        }
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Welcome' component={Welcome} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Explore' component={Explore} />
                    <Stack.Screen name='Browse' component={Browse} />
                    <Stack.Screen name='Product' component={Product} />
                    <Stack.Screen name='Settings' component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
