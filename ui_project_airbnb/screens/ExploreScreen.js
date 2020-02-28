import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Image, Dimensions, Animated } from 'react-native';
import {Icon} from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import Category from '../components/explore/Category'
import Home from '../components/explore/Home'
import Tag from '../components/explore/Tag'

const {height, width} = Dimensions.get('window')
export default class ExploreScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            scrollY: new Animated.Value(0),
            startHeaderHeight: 80,
            endHeaderHeight: 50
        }
    }

    componentWillMount(){

        if(Platform.OS=== 'android'){
            this.setState({startHeaderHeight: 100 + StatusBar.currentHeight}) ;
            this.setState({endHeaderHeight: 70 + StatusBar.currentHeight}) ;
        }
    }
    render(){
        const {navigation} = this.props;

        const animatedHeaderHeight = this.state.scrollY.interpolate({
            inputRange:[0,50],
            outputRange:[this.state.startHeaderHeight, this.state.endHeaderHeight],
            extrapolate:'clamp'
        })

        const animatedOpacity = this.state.scrollY.interpolate({
            inputRange:[this.state.endHeaderHeight, this.state.startHeaderHeight],
            outputRange:[1,0],
            extrapolate:'clamp'
        })

        const animatedMarginTop = this.state.scrollY.interpolate({
            inputRange:[this.state.endHeaderHeight, this.state.startHeaderHeight],
            outputRange:[10,-30],
            extrapolate:'clamp'
        })

        return(
           <SafeAreaView style={{flex:1}}>
               <View style={{flex:1}}>
                   <Animated.View style={{height:animatedHeaderHeight, backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#dddddd'}}>
                        <View style={{
                            flexDirection:'row',
                             padding:10,
                             marginHorizontal:20,
                             backgroundColor:'white',
                             shadowColor:'black',
                             shadowOffset:{width:0, height:0},
                             shadowOpacity:0.2,
                             marginTop: Platform.OS === 'android' ? 30 : 0
                        }}>
                            <Ionicon name='ios-search' size={20} />
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='Try New Delhi'
                                placeholderTextColor='grey'
                                style={{flex:1, fontWeight:'700', backgroundColor:'white', marginLeft:5}}
                            />
                        </View>
                        <Animated.View 
                            style={{flexDirection:'row', marginHorizontal:20,position:'relative', top:animatedMarginTop, opacity: animatedOpacity}}
                        >
                           <Tag name='Guests'/>
                           <Tag name='Dates'/>
                        </Animated.View>
                   </Animated.View>
                   <ScrollView
                     scrollEventThrottle={16} // 16s thif update 1 laan
                     onScroll={Animated.event(
                         [
                             {nativeEvent:{contentOffset:{y:this.state.scrollY}}}
                         ]
                     )}
                   >
                       <View style={{flex:1, backgroundColor:'white', paddingTop:20}}>
                           <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal:20}}>
                               What can we help you find, CaoTran
                           </Text>
                           <View style={{height:130, marginTop:20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false} // thanh ngang
                                >
                                    <Category name='Home' imageUri={require('../assets/home.jpg')} />
                                    <Category name='Experence' imageUri={require('../assets/experiences.jpg')} />
                                    <Category name='Restaurant' imageUri={require('../assets/restaurant.jpg')} />
                                </ScrollView>
                           </View>
                           <View style={{marginTop:40, paddingHorizontal:20}}>
                               <Text style={{fontSize:24, fontWeight:'700'}}>Introducing Airbnb Plus</Text>
                               <Text style={{fontWeight:'100', marginTop:10}}>
                                   A new selection of home verified for qulity & comfort
                               </Text>
                               <View style={{width:width-40, height:200, marginTop:20}}>
                                   <Image source={require('../assets/home.jpg')}
                                    style={{flex:1, width:null, height:null,
                                     resizeMode:'cover', borderRadius:5, borderColor:'$dddddd', borderWidth:1}}/>
                               </View>
                           </View>
                       </View>
                       <View style={{marginTop:40}}>
                            <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal:20}}>
                                Home around the world
                            </Text>
                            <View style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                <Home width={width}/>
                                <Home width={width}/>
                                <Home width={width}/>
                                <Home width={width}/>
                                <Home width={width}/>
                            </View>
                            
                       </View>
                   </ScrollView>
               </View>
           </SafeAreaView>
        );
    }
}