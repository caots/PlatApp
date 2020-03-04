import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons'

export default class AnimationButton extends Component{

    constructor(props){
        super(props)
        this.state ={
            animationButton : new Animated.Value(0),
        }
    }
      
    

    toggleMenu = () =>{
        const toValue = this.open ? 0 : 1
        Animated.spring(this.state.animationButton, {
            toValue,
            friction: 5
        }).start();

        this.open = ! this.open;
    }

    render(){

        const pinStyle = {
            transform : [
                {scale: this.state.animationButton},
                {
                    translateY: this.state.animationButton.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,-60]
                    })
                }
            ]
        }

        const thumbstyle = {
            transform : [
                {scale: this.state.animationButton},
                {
                    translateY: this.state.animationButton.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,60]
                    })
                }
            ]
        }
        const heartstyle = {
            transform : [
                {scale: this.state.animationButton},
                {
                    translateX: this.state.animationButton.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,-60]
                    })
                }
            ]
        }
        const heartstylelv2 = {
            transform : [
                {scale: this.state.animationButton},
                {
                    translateX: this.state.animationButton.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,60]
                    })
                }
            ]
        }

        const rotation = {
            transform : [
               { 
                   rotate: this.state.animationButton.interpolate({
                        inputRange:[0,1],
                        outputRange: ['0deg', '45deg'],
                        extrapolate:'clamp'
                    })
                }
            ]
        }
        return(
            <View style={{flex:1, backgroundColor:'yellow',justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.button}>
                        <Animated.View style={[styles.buttonSecond,heartstylelv2,]}>
                            <Entypo name='heart-outlined' size={20} color='#F02A4B' />
                        </Animated.View>
                    </View>
                    <View style={styles.button}>
                        <Animated.View style={[styles.buttonSecond,heartstyle,]}>
                            <Entypo name='heart-outlined' size={20} color='#F02A4B' />
                        </Animated.View>
                    </View>
                    <View style={styles.button}>
                        <Animated.View style={[styles.buttonSecond,thumbstyle]}>
                            <Entypo name='thumbs-up' size={20} color='#F02A4B'/>
                        </Animated.View>
                    </View>
                    <View style={styles.button}>
                        <Animated.View style={[styles.buttonSecond,pinStyle]}>
                            <Entypo name='location-pin' size={20} color='#F02A4B' />
                        </Animated.View>
                    </View>
                    <TouchableWithoutFeedback style={styles.button} onPress={()=> this.toggleMenu()}>
                        <Animated.View style={[styles.buttonMain, styles.menu, rotation]}>
                            <AntDesign name='plus' size={24} color='#FFF' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position:'absolute',
        //bottom: 50,
        left:0, right:0,
        alignItems:'center',
    },

    buttonMain : {
        position: 'absolute',
        width:56, 
        height:56,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:56/2,
        shadowColor:'#F02A4B',
        shadowOpacity:0.3,
        shadowOffset: {height:10},
        alignSelf:'center',
    },
    menu: {
        backgroundColor:'#F02A4B'
    },
    buttonSecond : {
        width:48, 
        height:48,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:24,
        shadowColor:'#F02A4B',
        shadowOpacity:0.3,
        shadowOffset: {height:10},
        backgroundColor:'white'
    },
})