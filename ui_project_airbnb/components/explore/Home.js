import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Image } from 'react-native';

import StarRating from 'react-native-star-rating'

export default class HomeComponent extends Component {
    render(){

        return(
                <View style={{width: this.props.width/2-30, height:this.props.width/2-30, borderWidth:0.5, borderColor:'#dddddd', marginTop:10}}>
                    <View style={{flex:1,}}>
                        <Image source={require('../../assets/home.jpg')}
                            style={{width:null, height:null, resizeMode:'conver', flex:1}}
                        />
                    </View>
                    <View style={{flex:1, justifyContent:'space-evenly', alignItems:'flex-start', paddingLeft:10}}>
                        <Text style={{fontSize:12,color:'#b63838'}}>PRIVATE ROOM - 2 BEDS</Text>
                        <Text style={{fontWeight:'bold'}}>The Cozy palace</Text>
                        <Text style={{fontSize:10}}>82$</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={4}
                            starSize={10}
                        />
                    </View>
                </View>
        );
    }
}