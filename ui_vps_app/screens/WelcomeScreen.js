import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Animated , Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const backgrounds = [
    {
      title: "Secured, forever.",
      description:
        "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
      img: require('../assets/images/welcome.png')
    },
    {
      title: "Encrypted, forever.",
      description:
        "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
      img: require('../assets/images/encrypted.png')
    },
    {
      title: "Privacy, forever.",
      description:
        "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
      img: require('../assets/images/privacy.png')
    },
    {
        title: "Secure, forever.",
        description:
          "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        img: require('../assets/images/secure.png')
      }
]

const {width, height} = Dimensions.get('window');

export default class Welcome extends Component{

    state ={
        scrollX: new Animated.Value(0)
    }
    renderImages = () =>{
        return(
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <ScrollView 
                        horizontal
                        pagingEnabled
                        snapToAlignment='center'
                        snapToInterval
                        scrollEnabled
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([
                            { nativeEvent: {contentOffset: {x: this.state.scrollX}} }
                        ])}
                >
                    {backgrounds.map((item, index)=>{
                        return(
                            <View key={index} style={{justifyContent:'center', alignItems:'center', width:width}}>
                                <Image source={item.img} style={{width: '70%',height:height/2, resizeMode:'contain'}}/>
                                <View style={{justifyContent:'center', alignItems:'center', marginTop:50}}>
                                    <Text style={{fontSize:24, fontWeight:'bold', marginBottom:20}}>{item.title}</Text>
                                    <Text style={{width:width/1.3,color:'gray'}}> {item.description}</Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
                {this.renderDots()}
            </View>
        );
    }
å
    renderDots = () =>{
        const dotPosiotion = Animated.divide(this.state.scrollX, width)
        return(
            <View style={{ flexDirection:'row',marginTop:40}}>
                {backgrounds.map((item, index) => {
                    const opacity = dotPosiotion.interpolate({
                        inputRange: [index -1 , index , index +1 ],
                        outputRange: [0.3,1,0.3],
                        extrapolate:'clamp'
                    })
                    return(
                        <Animated.View
                            key={index}
                            style={{
                                width:10,
                                height:10,
                                borderRadius:10,
                                backgroundColor:'gray',
                                marginRight:6,
                                opacity
                            }}
                        ></Animated.View>
                    );
                })}
            </View>
        );
    }

    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            headerShown: false,
        })
        return(
            <SafeAreaView style={{flex:1, marginHorizontal:20, }}>
                {this.renderImages()}
                <View style={{marginTop:40, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=> navigation.push('VPS')}
                         activeOpacity={0.6} 
                         style={{paddingHorizontal:40, padding:15, backgroundColor:'#0094FC', borderRadius:25}}
                    >
                        <Text style={{fontWeight:'500', color:'white'}}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}