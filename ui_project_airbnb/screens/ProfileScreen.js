import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'

export default class ProfileScreen extends Component {
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
           
        })

        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}