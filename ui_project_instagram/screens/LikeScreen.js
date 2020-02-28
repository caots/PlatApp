import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'

export default class LikeScreen extends Component{
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            tabBarIcon: ({tintColor}) => {
                return (<Icon name="ios-heart" style={{color: tintColor}}/>)
            }
        })
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>LikeScreen Screen</Text>
            </View>
        )
    }
}