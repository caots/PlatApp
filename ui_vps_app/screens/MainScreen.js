import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView ,Image,TouchableOpacity, Button,Modal,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//  // buttons
 const buttons = {
    'checked': require("../assets/icons/checked.png"),
    'dropdown': require("../assets/icons/dropdown.png"),
    'offline': require("../assets/icons/offline.png"),
    'online': require("../assets/icons/online.png"),
    'unchecked': require("../assets/icons/unchecked.png")
 }

 // countries
 const countries = {
    'australia': require("../assets/icons/australia.png"),
    'automatic': require("../assets/icons/automatic.png"),
    'india': require("../assets/icons/india.png"),
    'russia': require("../assets/icons/russia.png"),
    'singapore': require("../assets/icons/singapore.png"),
    'sweden': require("../assets/icons/sweden.png"),
    'uk': require("../assets/icons/united-kingdom.png"),
    'us': require("../assets/icons/united-states.png")
 }

 const servers = [
    {
      name: "Automatic",
      icon: countries.automatic
    },
    {
      name: "New York, NY",
      icon: countries.us
    },
    {
      name: "London",
      icon: countries.uk
    },
    {
      name: "Moscow",
      icon: countries.russia
    },
    {
      name: "Sweden",
      icon: countries.sweden
    },
    {
      name: "Melbourne",
      icon: countries.australia
    },
    {
      name: "New Delhi",
      icon: countries.india
    },
    {
      name: "Singapore",
      icon: countries.singapore
    }
  ];
 const {width, height} = Dimensions.get('window');

export default class Main extends Component{

    state = { 
        connected : false,
        show: false,
        server : null,
        automatic : {
            name: "Automatic",
            icon: countries.automatic
        }
    }
    handleServer(server) {
        this.setState({ server, connected: false, show: false });
      }

    renderServer = () => {
        const {  automatic,server } = this.state;
        const connection = server || automatic;
        return(
           <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',
                        borderTopWidth:0.2, borderTopColor:'gray', paddingTop:25,
            }}>
               <Image source={connection.icon} />
               <Text style={{marginHorizontal:15}}>{connection.name}</Text>
               <Image source={buttons.dropdown} />
           </View>
        );
    }

    renderServers = () => {
        const { show, server, automatic } = this.state;
        const connection = server || automatic;

        return(
            <Modal visible={show} animationType='slide' transparent >
                <View style={{ backgroundColor:'white', width: width, paddingHorizontal:30,
                        position:'absolute', left:0, height:0, bottom:10, height: height/2.2}}>
                    <Text style={{color:'gray',marginTop:20,}}>
                        Pick your Server
                    </Text>
                    <ScrollView>
                        {servers.map((item, index) => {
                              const isConnected = connection.name === item.name;
                              const isChecked = isConnected ? buttons.checked : buttons.unchecked;
                            return(
                                <TouchableOpacity activeOpacity={1} key={index} onPress={()=> this.handleServer(item)} 
                                    style={{marginTop:20}}
                                >
                                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>
                                    <View  style={{flexDirection:'row'}}>
                                        <Image source={item.icon} />
                                         <Text style={{marginHorizontal:15}}>{item.name}</Text>
                                    </View>
                                    <View style={{alignItems:'flex-end'}}>
                                         <Image source={isChecked} />
                                    </View>
                                  </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            </Modal>
        );

    }

    render(){

        const {navigation} = this.props;
        const {connected} = this.state;
        navigation.setOptions({
            headerShown: false,
        })

        const active = connected ? require('../assets/icons/online.png'):  require('../assets/icons/offline.png')

        return(
            <SafeAreaView style={{flex:1, marginTop:40}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'500', fontSize:18}}>VPN</Text>
                </View>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <View style={{flexDirection:'row', backgroundColor:'white', borderColor:'gray',borderRadius:20, marginBottom:20,
                        shadowOpacity:0.25, shadowOffset:{width:1, height:0}, padding:10, paddingHorizontal:20}}>
                        <Text style={{marginRight:10}}>{connected ? 'Connected' : 'Disconnected'}</Text>
                        <View style={[{width:8, height:8, borderRadius:8, alignSelf:'center'},
                            connected ? {backgroundColor :'#0094FC'} : {backgroundColor: '#535453'}
                        ]}></View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Image
                            source={active}
                        />
                    </View>
                    <TouchableOpacity
                         onPress={()=> this.setState({connected : !connected})}
                         activeOpacity={0.8} 
                         style={{paddingHorizontal:50, padding:15, backgroundColor:'#0094FC', borderRadius:25}}
                    >
                        <Text style={{fontWeight:'500', color:'white'}}>{connected ? 'DISCONNECT NOW' : 'CONNECT NOW'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=> this.setState({show: true})}>
                             {this.renderServer()}
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderServers()}
            </SafeAreaView>
        );
    }
}