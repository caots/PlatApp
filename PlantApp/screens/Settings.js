import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,Dimensions, Slider } from 'react-native';
import { Thumbnail, Header, Card, Badge, CardItem, Button, Item, Right, Switch} from 'native-base'
import { theme, mocks } from "../constants";
import { ScrollView, FlatList, TextInput } from 'react-native-gesture-handler';
import * as Icon from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");


export default class SettingsScreen extends Component{

    state = {
        budget: 850,
        monthly: 1700,
        notifications: true,
        newsletter: false,
        editing: null,
        profile: {}
    }

    componentDidMount() {
        this.setState({ profile: this.props.profileProp });
    }

    handleEdit(name,text) {
        const { profile } = this.state;
        profile[name] = text;
        this.setState({ profile });
      }

      toggleEdit(name) {
        const { editing } = this.state;
        this.setState({ editing: !editing ? name : null });
      }

      renderEdit(name) {
        const { profile, editing } = this.state;
    
        if (editing === name) {
          return (
            <TextInput 
                defaultValue={profile[name]}
                onChangeText={ text =>{
                    this.handleEdit([name],text)
                }}
            />
          );
        }
    
        return <Text style={{fontWeight:'bold'}}>{profile[name]}</Text>;
      }

    render(){
        const {navigation, profileProp} = this.props;
        const { profile, editing } = this.state;
        navigation.setOptions({
            headerBackImage: ({tintColor}) => {
                return (<Image source={require('../assets/icons/back.png')} style={{marginHorizontal:20}}/>)
            },
             headerBackTitleVisible: false,
             headerTitle: '',
             headerStyle:{
                 backgroundColor:'#f2f2f2f2',
             }
        })
        return(
            <SafeAreaView style={{flex:1, marginHorizontal:20,marginTop:10,}}>
                <View 
                    style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
                >
                    <Text style={{fontSize:26, fontWeight:'bold'}}>Settings</Text>
                    <Button transparent onPress={()=>navigation.push('Settings')}>
                        <Thumbnail source={require('../assets/images/avatar.jpg')} 
                            style={{width:40, height:40, resizeMode:'cover'}}/>
                    </Button>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20}}>
                    <View>
                        <Text style={{color:'#C5CCD6', marginBottom:6, fontSize:16}}>Username</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            {this.renderEdit("username")}
                            
                            <Text 
                                style={{color:'#0AC4BA'}}
                                onPress={() => this.toggleEdit("username")}
                            >
                                {editing === "username" ? "Save" : "Edit"}
                            </Text>
                        </View>
                    </View> 
                    <View style={{marginTop:15}}>
                        <Text style={{color:'#C5CCD6', marginBottom:6, fontSize:16}}>Location</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            {this.renderEdit("location")}
                            
                            <Text 
                                style={{color:'#0AC4BA'}}
                                onPress={() => this.toggleEdit("location")}
                            >
                                {editing === "location" ? "Save" : "Edit"}
                            </Text>
                        </View>
                    </View> 
                    <View  style={{marginTop:15}}>
                        <Text style={{color:'#C5CCD6', marginBottom:6, fontSize:16}}>Email</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            {this.renderEdit("email")}
                            
                            <Text 
                                style={{color:'#0AC4BA'}}
                                onPress={() => this.toggleEdit("email")}
                            >
                                {editing === "email" ? "Save" : "Edit"}
                            </Text>
                        </View>
                    </View> 
                    <View style={{borderWidth:0.2, backgroundColor:'#C5CCD6', marginTop:35,}}></View>
                    <View style={{marginTop:30, marginBottom:15}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#C5CCD6', marginBottom:6, fontSize:16}}>Budget</Text>
                            <Text style={{fontSize:14}}>$ 1,000</Text>
                        </View>
                        <Slider 
                            minimumValue={0}
                            maximumValue={1000}
                            style={{ height: 19 }}
                            minimumTrackTintColor="#2BDA8E"
                            maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                            value={this.state.budget}
                            onValueChange={value => this.setState({ budget: value })}
                            thumbStyle={styles.thumb}
                            trackStyle={{ height: 6, borderRadius: 6 }}
                        />
                    </View>
                    <View style={{marginTop:30, marginBottom:15}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#C5CCD6', marginBottom:6, fontSize:16}} >Monthly Cap</Text>
                            <Text style={{fontSize:14}}>$ 5,000</Text>
                        </View>
                        <Slider 
                            minimumValue={0}
                            maximumValue={1000}
                            style={{ height: 19 }}
                            minimumTrackTintColor="#2BDA8E"
                            maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                            value={this.state.monthly}
                            onValueChange={value => this.setState({ monthly: value })}
                            thumbStyle={styles.thumb}
                            trackStyle={{ height: 6, borderRadius: 6 }}
                        />
                    </View>
                    <View style={{borderWidth:0.2, backgroundColor:'#C5CCD6', marginTop:35,}}></View>
                    <View style={{marginTop:30, marginBottom:15}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text  style={{color:'#C5CCD6', marginBottom:6, fontSize:16}}>Notifications</Text>
                            <Switch 
                                 value={this.state.notifications}
                                 onValueChange={value => this.setState({ notifications: value })}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:35}}>
                            <Text  style={{color:'#C5CCD6', marginBottom:6, fontSize:16}}>Newsletter</Text>
                            <Switch 
                                 value={this.state.newsletter}
                                 onValueChange={value => this.setState({ newsletter: value })}
                            />
                        </View>
                    </View>
                </ScrollView>
                   
            </SafeAreaView>
        )
    }
}

SettingsScreen.defaultProps= {
    profileProp : mocks.profile
}

const styles = StyleSheet.create({
    tag: {
        borderColor: '#C5CCD6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:5,
        marginRight: 15,
        fontSize:12,
        color:'gray'
      },
      image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight:20
      },
      thumb: {
        width: 16,
        height: 16,
        borderRadius: 16,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: 'red'
      },
})