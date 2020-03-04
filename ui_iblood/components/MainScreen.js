import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView , Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Thumbnail } from 'native-base';
import { Line } from "react-native-svg";
import { LineChart, Path, Grid } from 'react-native-svg-charts'
import * as shape from "d3-shape";


const {width, height} = Dimensions.get('window');


//data
const chart = [
    1.1,
    3,
    1.5,
    2.3,
    3.2,
    7,
    8.2,
    1.2,
    2,
    1.2,
    8,
    3.8,
    5.8,
    3.9,
    5.1,
    0.1,
    6
  ];

const requests = [
    {
      id: 1,
      bloodType: "B+",
      name: "Ronald Dixon",
      age: 24,
      gender: "Male",
      distance: 28,
      time: 12,
      priority: "urgent",
    },
    {
      id: 2,
      bloodType: "O-",
      name: "Kathy Bates",
      age: 19,
      gender: "Female",
      distance: 10,
      time: 22,
      priority: "urgent",
    },
    {
      id: 3,
      bloodType: "A+",
      name: "Edward Sanders",
      age: 6,
      gender: "Male",
      distance: 15.3,
      time: 24,
      priority: "urgent",
    },
  
];
export default class MainScreen extends Component{

    state ={
        isLoading : false
    }

    renderLoadingScreen(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../assets/icon_pro.png')} />
            </View>
        );
    }

    renderChart = () =>{
        const LineShadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={4}
                stroke={'rgba(134, 65, 244, 0.2)'}
            />
        );
        return (
            <LineChart
                yMin={0}
                yMax={10}
                //style={{ flex:1 }}
                data={ chart }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={ { top: 20, bottom: 20 } }
            >
                <Grid/>
                <LineShadow/>
            </LineChart>
          );
    }

    renderHeader = () => {
        return(
           
            <View style={{height: height/3.5, backgroundColor:'#F72B2B', }}>
                <View style={{flexDirection:'row', marginTop:40,}}>
                    <View style={{flex:1, alignItems:'center',marginLeft:70 }}>
                        <Text style={{fontSize:24, fontWeight:'bold', color:'white'}}>Blood Requests</Text>
                    </View>
                    <Thumbnail source={require('../assets/avatar.jpg')} 
                        style={{width:35, height: 35 , resizeMode:'cover', marginRight:30 }}
                    />
                </View>
                <View style={{
                    backgroundColor:'white',
                    height: height/4,
                    marginHorizontal:20,
                    marginTop:20,
                    borderRadius:12,
                    shadowColor:'#D9D2D2',
                    shadowOpacity:0.8,
                    shadowOffset:{width:2, height:2}
                }}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:25, marginTop:25}}>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:28, fontWeight:'bold', color:'#000000'}}>
                                    291
                                </Text>
                                <Text style={{fontSize:12, fontWeight:'bold', paddingHorizontal:10, alignSelf:'center', color:'#ED6004'}}>
                                    -12%
                                </Text>
                            </View>
                        </View>
                    <View>
                        <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:12, fontWeight:'bold', paddingHorizontal:10, alignSelf:'center', color:'#ED6004'}}>
                                    +49%
                                </Text>
                                <Text style={{fontSize:28, fontWeight:'bold', color:'#000000'}}>
                                    481
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}> 
                         <Text style={{marginTop:10, fontSize:16, color:'gray'}}>Avaliable</Text>
                         <Text style={{marginTop:10, fontSize:16, color:'gray'}}>Requests</Text>
                    </View>
                    <View style={{marginHorizontal:20, flex:1}}>
                        {this.renderChart()}
                    </View>
                </View>
            </View>
            
        );
    }

    renderRequests = () =>{
        return(
            <View style={{flex:1, marginHorizontal:25, marginTop: height / 8 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'500', color:'gray'}}>Recent Updates</Text>
                    <Text style={{fontWeight:'bold'}}>View All</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    
                    {requests.map((request, index)=>{
                        return(
                            <TouchableOpacity activeOpacity={0.8} key={request.id}>
                                {this.renderRequest(request)}
                            </TouchableOpacity>
                        );
                        
                        
                    })}
                </ScrollView>
            </View>
        );
    }

    renderRequest = (request) =>{
        return(
            <View style={{flex:1, flexDirection:'row', width : width, height: height /6, alignItems:'center',
                        backgroundColor:'white', marginTop:20 , borderRadius:12, paddingHorizontal:20,
                        shadowColor:'#D9D2D2', 
                        shadowOpacity:0.8,
                        shadowOffset:{width:2, height:2 }}}>
                <View style={{width: 90, maxHeight: height/6.5, justifyContent:'center',}}>
                    <View style={{alignItems:'center', backgroundColor:'#D61B1F',borderTopLeftRadius:12,borderTopRightRadius:12}}>
                        <Text style={{fontWeight:'bold', color:'white', padding:5}}>{request.priority}</Text>
                    </View>
                    <View style={{ alignItems:'center', backgroundColor:"#3A3232",borderBottomLeftRadius:12,borderBottomRightRadius:12}}>
                        <Text style={{fontSize:24, fontWeight:'bold', color:'white', padding:10, paddingTop:25, paddingBottom:25}} >
                            {request.bloodType}
                        </Text>
                    </View>
                </View>
                <View style={{marginHorizontal:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>
                        {request.name}
                    </Text>
                    <Text style={{marginTop:5}}>
                        {request.age} • {request.gender} • {request.distance}km •{" "}{request.time}hrs
                    </Text>

                </View>
            </View>
        );
    }

    render(){
        setTimeout(()=>{
            this.setState({isLoading: true})
        }, 2000)
        if(!this.state.isLoading){
            return(
            <View style={{flex:1}}>
                    {this.renderLoadingScreen()}
            </View>
            );
        }
    
        return(
            <View style={{flex:1,backgroundColor:'#F6F5F5'}}>
                 {this.renderHeader()}
                 {this.renderRequests()}
            </View>
               
            
        );
    }
}

