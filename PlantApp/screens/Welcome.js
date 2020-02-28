import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,Dimensions , Animated} from 'react-native';
import {Icon, Container, Body, Button} from 'native-base'
import { FlatList } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window");

export default class WelcomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    }

    scrollX = new Animated.Value(0);

    renderIllustrations = () =>{
        const {illustrations} = this.props;
        return (
            <View style={{alignItems:'center',marginTop:30, width: width, height: height/2}}>
                <FlatList
                    horizontal
                    pagingEnabled // chuyen luon sang trang moi
                    scrollEnabled // keo sang trang khac
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment='center' // can chinh
                    data={illustrations}
                    extraData={this.state}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index})=>{
                        return(<Image source={item.source} 
                                style={{flex:1, width, height:height/2, resizeMode:'cover', overflow:'visible'}} />);
                    }}

                    onScroll= {
                        Animated.event([
                            {
                                nativeEvent: { contentOffset: { x: this.scrollX } }
                            }
                        ])
                    }
                />
            </View>
        );
    }

    renderSteps() {
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return (
            <View style={[styles.stepContainer],{flexDirection:'row'}}>
            {illustrations.map((item,index)=>{
                const opacity = stepPosition.interpolate({
                    inputRange: [index -1, index, index + 1],
                    outputRange:[0.4, 1, 0.4],
                    extrapolate: 'clamp'
                })
                return(
                    <Animated.View 
                         style={[styles.steps,{backgroundColor:'gray'},{alignItems:'center', opacity}]}                        
                    ></Animated.View>
                );
            })}
        </View>
        );
      }

    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            headerBackImage: <Image />,
            headerShown: false,
            gestureResponseDistance: {
                horizontal: 200
              },
             headerTransparent: false,
        })

        return(
            <SafeAreaView style={{flex:1}}>
                <Container style={styles.container}>
                    <Body 
                         style={styles.container}>
                        {/* header */}
                        <View 
                            style={{flexDirection:'row',}}
                        >
                            <Text style={styles.headerTitle}>
                                Your home.
                            </Text>
                            <Text style={[styles.headerTitle,{color:'#0AC4BA'}]}>
                                Greener.
                            </Text>
                        </View>
                        <Text style={{fontSize:18, color:'#C5CCD6', marginTop:10}}>
                            Enjoy the experience
                        </Text>

                        {/* slide */}
                        {this.renderIllustrations()}
                        {this.renderSteps()}

                         {/* button login */}
                         <View>
                            <Button
                                onPress={()=>{navigation.navigate('Browse')}}
                                style={styles.buttonLogin}
                            >
                                <Text style={{color:'white', fontSize:16}}>Login</Text>
                            </Button>
                            <Button
                                style={{
                                    marginTop:15,justifyContent:'center',backgroundColor:'white',
                                    shadowOpacity:0.5,
                                    shadowColor:'#C5CCD6',
                                    shadowOffset:{width: 0, header:0}
                                }}
                                onPress={()=>{}}
                            >
                                <Text style={{color:'#333', fontSize:16}}>Signup</Text>
                            </Button>
                            <Button
                                onPress={()=>{}}
                                style={{marginTop:15,justifyContent:'center', backgroundColor:'',
                                    shadowOpacity:0.5,
                                    shadowColor:'#C5CCD6',
                                    shadowOffset:{width: 0, header:0}
                                }}
                            >
                                <Text>Terms of service</Text>
                            </Button>
                         </View>
                    </Body>

                </Container>
            </SafeAreaView>
           
        )
    }
}


WelcomeScreen.defaultProps ={
    illustrations : [
        {id:1, source:require('../assets/images/illustration_1.png')},
        {id:2, source:require('../assets/images/illustration_2.png')},
        {id:3, source:require('../assets/images/illustration_3.png')}
    ]
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle: {
        fontSize:26, 
        fontWeight: 'bold'
    },
    buttonLogin:{
        justifyContent:'center',
        paddingHorizontal:10,
        backgroundColor:'#0bc5b9', 
        width: width-100,
        marginTop:20,
        borderRadius:5,
        shadowOpacity:0.5,
        shadowColor:'#C5CCD6',
        shadowOffset:{width: 0, header:0}
    },
    stepContainer: {
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
    },
    steps: {
        width:5,
        height:5,
        borderRadius:5,
        marginHorizontal:2.5
    }

})
//2ad98f