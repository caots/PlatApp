import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'


const numStar = 5
export default class StarRating extends Component{

    state ={
        rating: 3,
        animation : new Animated.Value(1)
    }

    animate = () =>{
        Animated.spring(this.state.animation,{
            toValue: 2 ,
            duration:400
        }).start(()=>{
            this.state.animation.setValue(1)
        })
    }
    
    render(){

        let stars =[];

        const animateScale = this.state.animation.interpolate({
           inputRange: [1,1.5,2],
           outputRange: [1,1.4,1]
        })

        const animationOpacity = this.state.animation.interpolate({
            inputRange: [1,1.5,2],
            outputRange: [1,0.6,1]
        })

        const animationRotate = this.state.animation.interpolate({
            inputRange: [1,1.25,1.75,2],
            outputRange: ['0deg','-3deg','3deg', '0deg']
        })

        const animationStyle ={
            transform: [
                {scale: animateScale},
                {rotate: animationRotate}
            ],
            opacity: animationOpacity
        }

        for(let x =1 ;x <= numStar ;x++){
            stars.push(
                   <TouchableWithoutFeedback key={x}
                        onPress={()=> {
                            this.setState({rating: x})
                            this.animate()
                    }}>
                        <Animated.View style={x<= this.state.rating ? animationStyle : ''}>
                            <Star isActive={ x <= this.state.rating ? true: false} />
                        </Animated.View>
                   </TouchableWithoutFeedback>
                
            )
        }
        
        return(
            <View style={{flex:1, backgroundColor:'whitesmoke', justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>{stars}</View>
            </View>
        );
    }
}

class Star extends Component {
    render(){
        return(
            <FontAwesome name={this.props.isActive ? 'star' : 'star-o'} size={32} color='orange' style={{marginHorizontal: 6}}/>
        );
    }
}

const styles = StyleSheet.create({
     
})