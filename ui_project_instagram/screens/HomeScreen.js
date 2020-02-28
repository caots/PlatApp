import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {Icon,CardItem, Container,Content, Thumbnail, Header, Left, Right, Body} from 'native-base'
import CardComponent from '../components/CardComponent'

export default class HomeScreen extends Component{
    
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            tabBarIcon: ({tintColor}) => {
                return (<Icon name="ios-home" style={{color: tintColor}}/>)
            },
            // headerLeft: () =>{
            //     return (<Icon name='ios-camera' style={{paddingLeft:10}}/>)
            // } ,
            // title: 'Instagram',
            // headerRight: () =>{
            //     return (<Icon name='ios-send' style={{paddingRight:10}}/>)
            // } ,
        })
        return(
            <Container style={{flex:1, backgroundColor:'white'}}>
                <Header>
                    <Left>
                        <Icon name="ios-home" style={{paddingLeft:10, }}/>
                    </Left>
                    <Body>
                        <Text style={{fontWeight:'bold', fontSize:18}}>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon name="ios-send" style={{paddingRight:10,}}/>
                    </Right>
                </Header>
                <View style={{height:100}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:7}}>
                        <Text style={{fontWeight:'bold'}}>Stories</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="md-play" style={{fontSize:14}}/>
                            <Text> Match All</Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems:'center',
                                paddingStart:5,
                                paddingEnd:5
                            }}
                        >
                            <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                             <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                             <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                             <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                             <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                            <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                            <Thumbnail 
                                style={{marginHorizontal:5, borderColor:'#ffc700', borderWidth:2}}
                                 source={require('../assets/avatar.jpg')} />
                        </ScrollView>
                    </View>
                    
                </View>
               <Content>
                   <CardComponent imageSource="1"/>
                   <CardComponent imageSource="2"/>
                   <CardComponent imageSource="3"/>
               </Content>
           </Container>
        )
    }
}