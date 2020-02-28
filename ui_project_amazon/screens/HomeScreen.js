import React, { Component} from 'react'
import {View, Text,StyleSheet, Image} from 'react-native'
import {Container, Content, Header, Left, Right, Icon, Item, Input, CardItem} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome' // fontAwesome
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import {DrawerActions} from '@react-navigation/native'
import RecommendationsCardItem from '../components/RecommendationsCardItem'


export default class HomeScreen extends Component{
    render(){
        const {navigation} = this.props;
        
        return(
            <Container>
                <Header style={styles.headerHome}>
                    <Left style={{flexDirection:'row'}}>
                        <Icon onPress={()=>{
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }} name='md-menu' style={{color:'white', paddingLeft:5, marginRight:15}} />
                        <FAIcon name='amazon' style={{fontSize: 32, color:'white'}}/>
                    </Left>
                    <Right>
                        <Icon name='md-cart' style={{color:'white'}}/>
                    </Right>
                </Header>
                <View style={styles.searchrHome}>
                    <TouchableOpacity>
                        <View style={styles.buttonSearchHome}>
                            <Text style={{fontSize:12}}>Shop by</Text>
                            <Text style={{fontWeight:'bold'}}>Category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.inputSearchHome}>
                        <Item style={{backgroundColor:'white', borderRadius:4,}}>
                            <Icon name='md-search' style={{fontSize:20,paddingTop:5, paddingLeft:8}}></Icon>
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>
                <Content style={{backgroundColor:'#d5d5d6', marginTop:0}}>
                    <View style={styles.contentAccountHome} >
                        <Text>Hello, Cao Tran</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='md-person' style={{fontSize:18, marginLeft:5}}/>
                            <Icon name='arrow-forward' style={{fontSize:18, marginLeft:5}}/>
                        </View>
                    </View>
                    <Swiper style={{height:100}}  autoplay={true}>
                        <View style={{flex:1}}>
                            <Image style={{resizeMode:'contain', height:'100%', width:'100%'}} source={require('../assets/swiper_2.jpg')}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{resizeMode:'contain',height:'100%', width:'100%'}} source={require('../assets/swiper_3.jpg')}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{resizeMode:'contain',height:'100%', width:'100%'}} source={require('../assets/swiper_2.jpg')}/>
                        </View>
                    </Swiper>
                    <CardItem header style={{borderBottomWidth:1, borderBottomColor:'#dee0e2'}}>
                        <Text>Your Recommendations</Text><Icon name="md-pricetags" style={{fontSize:18, marginLeft:5}}/>
                    </CardItem>
                    <RecommendationsCardItem 
                        itemName="You can heal your life"
                        itemCreator="Louise"
                        itemPrice="$10"
                        savings="2.5"
                        imgUrl={require('../assets/recommended_1.jpg')}
                        rating={5}
                    />
                    <RecommendationsCardItem 
                        itemName="You can heal your life"
                        itemCreator="Louise"
                        itemPrice="$5"
                        savings="2"
                        imgUrl={require('../assets/recommended_2.jpg')}
                        rating={3}
                    />
                    <RecommendationsCardItem 
                        itemName="You can heal your life"
                        itemCreator="Louise"
                        itemPrice="$12"
                        savings="3"
                        imgUrl={require('../assets/recommended_3.jpg')}
                        rating={4}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headerHome : {
        backgroundColor:'#3a445c',
        borderBottomColor:'#757575',
        height:90
    },
    searchrHome : {
        height:70,
        backgroundColor:'#3a455c',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5
    },
    buttonSearchHome: {
        width:100,
        backgroundColor:'#e7e7eb',
        height:50,
        borderRadius:4,
        padding:10
    },
    inputSearchHome:{
        flex:1, 
        height:'100%',
        marginLeft: 5, 
        justifyContent:'center'
    },
    contentAccountHome:{
        height:50, 
        backgroundColor:'white', 
        flexDirection:'row', 
        paddingHorizontal:5,
        justifyContent:'space-between',
        alignItems:'center'
    }
})