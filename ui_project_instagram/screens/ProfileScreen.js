import React, { Component } from 'react';
import { StyleSheet, Text, View , Image, Dimensions} from 'react-native';
import {Icon, Container, Content,Header, Left, Right, Body, Button} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome' // fontAwesome


var images = [
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg'),
    require('../assets/avatar.jpg')
]

var {width, height} = Dimensions.get('window');
export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex: 0
        }
    }

    segmentClicked =(index) => {
        this.setState({activeIndex: index})
    }

    renderSectionOne =() => {
        return images.map((image, index) =>{
            return (
                <View 
                    key={{index}} style={[{width: (width)/3},
                    {height: (width)/3},
                    {marginBottom:2},
                    index%3 !==0? {paddingLeft:2}: {paddingLeft:0}]} 
                >
                    <Image style={{flex:1,width:undefined, height:undefined }} source={image}/>
                </View>
            )
        })
    }

    renderSection = () =>{
        if(this.state.activeIndex == 0){
            return(
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        }
    }
    render(){
        const {navigation} = this.props;
        navigation.setOptions({
            tabBarIcon: ({tintColor}) => {
                return (<Icon name="ios-person" style={{color: tintColor}}/>)
            }
        })

        return(
           <Container style={{flex:1, backgroundColor:'white'}}>
                <Header>
                    <Left>
                        <Icon name="md-person-add" style={{paddingLeft:10, }}/>
                    </Left>
                    <Body>
                        <Text>Cao tran</Text>
                    </Body>
                    <Right>
                        <Icon name="md-timer" style={{paddingRight:10,}}/>
                    </Right>
                </Header>
                <Content>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1, marginTop:10, alignItems:'center'}}>
                            <Image source={require('../assets/avatar.jpg')} style={{width:75, height:75, borderRadius:37.5}}/>
                        </View>
                        <View style={{flex:3,}}>
                            <View style={{ flexDirection:'row', justifyContent:'space-evenly', marginTop:10}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:16}}>20</Text>
                                    <Text style={{fontSize:10, color:'gray'}}>Posts</Text>
                                </View>
                                
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:16}}>106</Text>
                                    <Text style={{fontSize:10, color:'gray'}}>followers</Text>
                                </View>
                                
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:16}}>167</Text>
                                    <Text style={{fontSize:10, color:'gray'}}>following</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', paddingTop:10}}>
                                <Button bordered dark style={{flex:3, marginLeft:10, justifyContent:'center', height:35}}>
                                    <Text style={{fontSize:13}}>Edit Profile</Text>
                                </Button>
                                <Button bordered dark style={{flex:1, marginRight:10, marginLeft:5, justifyContent:'center', height:35}}>
                                    <Icon name='settings' style={{fontSize:18}}/>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingBottom:10,paddingTop:5, paddingHorizontal:10}}>
                            <Text style={{fontWeight:'bold'}}>Cao tran</Text>
                            <Text>abc| Computer engineer | Hust Student</Text>
                            <Text>wwww.caotran.com</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', borderTopWidth:1, borderTopColor:'#eae5e5'}}>
                        <Button transparent onPress={()=> this.segmentClicked(0)} active={this.state.activeIndex == 0}>
                            <Icon name='ios-apps' style={[this.state.activeIndex == 0 ? {} : {color:'gray'} ]}/>
                        </Button>
                        <Button transparent onPress={()=> this.segmentClicked(1)} active={this.state.activeIndex == 1}>
                            <Icon name='ios-list' style={[this.state.activeIndex == 1 ? {} : {color:'gray'} ]}/>
                        </Button>
                        <Button transparent onPress={()=> this.segmentClicked(2)} active={this.state.activeIndex == 2}>
                            <Icon name='ios-people' style={[this.state.activeIndex == 2 ? {} : {color:'gray'} ]}/>
                        </Button>
                        <Button transparent onPress={()=> this.segmentClicked(3)} active={this.state.activeIndex == 3}>
                            <Icon name='ios-bookmark' style={[this.state.activeIndex == 3 ? {} : {color:'gray'} ]}/>
                        </Button>
                    </View>
                    {this.renderSection()}
                </Content>
           </Container>
        )
    }
}