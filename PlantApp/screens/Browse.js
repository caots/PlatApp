import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,Dimensions } from 'react-native';
import {Icon, Thumbnail, Header, Card, Badge, CardItem, Button} from 'native-base'
import { theme, mocks } from "../constants";

import { ScrollView } from 'react-native-gesture-handler';

const tabs = ['Products','Inspirations','Shop']


export default class BrowseScreen extends Component{

    state ={
        active: 'Products',
        categories: []
    }

    componentDidMount() {
        this.setState({ categories: this.props.listCategory });
    }

    renderTab(tab){
        const { active} = this.state;
        const isActive = active === tab;
        return(
            <TouchableOpacity 
                key={`tab-${tab}`}
                onPress={() => this.handleTab(tab)}
                style={[styles.tab, isActive? styles.active : null]}
            >
                <Text style={[{fontSize:18}, isActive ? {color:'#2BDA8E'} : {color:'#9DA3B4'}]}>{tab}</Text>
            </TouchableOpacity>
        );
    }

    handleTab = tab =>{
        const {listCategory} = this.props;
        const results =[];
        listCategory.map(category =>{
          if(category.tags.includes(tab.toLowerCase())){
            results.push(category);
          }
        });
        this.setState({ active: tab, categories: results });
    }
    
    render(){
        const {navigation} = this.props;
        const {categories} = this.state;
        navigation.setOptions({
            headerBackImage: ({tintColor}) => {
                return (<Image source={require('../assets/icons/back.png')} style={{marginHorizontal:20}}/>)
            },
             headerBackTitleVisible: false,
            // headerTransparent: true,
             headerTitle: null,
             headerStyle:{
                backgroundColor:'#f2f2f2f2',
            }
        })

       
        return(
            <SafeAreaView style={{flex:1, marginHorizontal:20, marginTop:10, }}>
                    <View 
                        style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
                    >
                        <Text style={{fontSize:26, fontWeight:'bold'}}>Browse</Text>
                        <Button transparent onPress={()=>navigation.push('Settings')}>
                             <Thumbnail source={require('../assets/images/avatar.jpg')} 
                                style={{width:40, height:40, resizeMode:'cover'}}/>
                        </Button>
                    </View>
                    <View style={{
                        flexDirection:'row', justifyContent:'space-around', marginTop:25,
                         borderBottomWidth:0.2, marginHorizontal:20, borderBottomColor:'#9DA3B4'
                    }}>
                       {tabs.map(tab=> this.renderTab(tab))}
                    </View>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        style={{
                            marginHorizontal:20,
                            marginTop:25,
                        }}
                    >
                        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
                            {categories.map((item, index)=>{
                                return(
                                    <TouchableOpacity
                                        key={item.name}
                                        onPress={()=>{navigation.navigate('Explore'),{item}}}
                                        style={{
                                            marginRight:5, shadowOpacity:0.5,
                                            shadowColor:'#C5CCD6',
                                            shadowOffset:{width: 0, header:0}
                                        }}>
                                        <Card style={{width:135, height:135, justifyContent:'center'}}>
                                            <CardItem style={{justifyContent:'center', alignItems:'center'}}>
                                                   <View style={{width:45, height:45, backgroundColor:'#90ee90',
                                                     justifyContent:'center', alignItems:'center', borderRadius:'50%'}}>
                                                        <Image source={item.image} 
                                                            style={{width:25, height:25, resizeMode:'contain'}}/>
                                                   </View>
                                            </CardItem>
                                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                                <Text style={{fontSize:16, fontWeight:'400'}}>{item.name}</Text>
                                                <Text style={{color:"#9DA3B4", fontSize:12}}>{item.count} products</Text>
                                            </View>
                                        </Card>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}

BrowseScreen.defaultProps= {
    listCategory : mocks.categorys
}

const styles = StyleSheet.create({
    tab: {
        marginRight:32,
        paddingBottom: 16,
        
    },
    active: {
        borderBottomColor: '#2BDA8E',
        borderBottomWidth: 3
    }
})