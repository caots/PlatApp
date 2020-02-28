import React, { Component } from 'react';
import { StyleSheet, Text, View , Dimensions, Image, Animated, SafeAreaView} from 'react-native';
import {Asset} from 'expo'

const {width, height} = Dimensions.get('window')

function cacheImage(images) {
    return images.map(image =>{
        if(typeof image === 'String'){
            return Image.prefetch(image);
        }else{
            return Asset.fromModule(image).dowloadAsync();
        }
    })
}


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={
           isReady: false
        }
    }

    componentWillMount(){
       
    }

    render(){

        
        return (
           <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <Text>Main Screen</Text>
           </View>
          );
    }
  
}

