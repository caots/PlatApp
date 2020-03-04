import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback,Image , MaskedViewIOS} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'


export default class ScreenLoading extends Component{

    state ={
        isLoading: new Animated.Value(0),
        animationDone: false
    }
    

    componentDidMount(){
        Animated.spring(this.state.isLoading,{
            toValue: 100,
            duration:2000,
            delay:400,
        }).start(()=>{
            this.setState({animationDone: true})
        })
    }

    render(){
        const colorLayer =<View style={[{backgroundColor:'#7F239D'}, StyleSheet.absoluteFill]}></View>
        const whiteLayer =<View style={[{backgroundColor:'#FFF' },StyleSheet.absoluteFill]}></View>

        const imagesSclae = {
            transform : [
                {
                    scale: this.state.isLoading.interpolate({
                        inputRange: [0,15,100],
                        outputRange: [0.1,0.06,16]
                    })
                }
            ]
        }

        const opacity = {
            opacity: this.state.isLoading.interpolate({
                inputRange: [0,25,50],
                outputRange: [0,0,1],
                extrapolate:'clamp'
            })
        }

        
        return(
            <View style={{flex:1}}>
                {colorLayer}
                <MaskedViewIOS
                    style={{flex:1}}
                    maskElement={
                        <Animated.View style={[styles.container,opacity]}>
                             <Animated.Image source={require('../assets/avatar.jpg')}
                                style={[{width:1000, resizeMode:'contain'},imagesSclae]}
                            />
                        </Animated.View>
                       
                    }
                >
                    {whiteLayer}
                    <Animated.View style={styles.container}>
                        <Text >Your App goes here !!!</Text>
                    </Animated.View>
                </MaskedViewIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})
