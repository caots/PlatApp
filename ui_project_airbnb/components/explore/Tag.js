import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Image } from 'react-native';


export default class TagComponent extends Component {
    render(){

        return(
            <View style={{minHeight:20, minWidth:40, padding:5,
                backgroundColor:'white', borderColor:'#dddddd', borderWidth:0.5, borderRadius:2, marginRight:5
            }}>
               <Text style={{fontWeight:'700', fontSize:10}}>{this.props.name}</Text>
           </View>
        );
    }
}