import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,Dimensions } from 'react-native';
import { Thumbnail, Header, Card, Badge, CardItem, Button, Item} from 'native-base'
import { theme, mocks } from "../constants";
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import * as Icon from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");


export default class ProductScreen extends Component{

    state = {
        
    }

    componentDidMount() {
    }

    renderGallery(){
        const {products} = this.props;
        return(
            <FlatList 
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
                data={products.images}
                keyExtractor={(item, index)=> index}
                renderItem={({item})=>(
                    <Image 
                        source={item} 
                        resizeMode="contain"
                        style={{width, height:height/2.8}}
                    />
                )}
            />
        );
    }

    render(){
        const {navigation, products} = this.props;
        navigation.setOptions({
            headerBackImage: ({tintColor}) => {
                return (<Image source={require('../assets/icons/back.png')} style={{marginHorizontal:20}}/>)
            },
             headerBackTitleVisible: false,
             headerTitle: null,
             headerRight: ({tintColor}) => {
                return (
                    <Button onPress={() => {}} transparent style={{marginHorizontal:20}}>
                        <Icon.Entypo name="dots-three-horizontal" color='#9DA3B4' style={{fontSize:20}} />
                    </Button>
                )
            },
        })
        return(
            <SafeAreaView style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {this.renderGallery()}
                        <View style={{flex:1, paddingHorizontal:20, marginHorizontal:20,marginTop:20}}>
                            <Text style={{fontSize:20, fontWeight:'bold'}}>{products.name}</Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop:15, marginHorizontal:20, paddingHorizontal:20,}}>
                            {products.tags.map(tag =>{
                                 return(
                                    <Text style={styles.tag}>{tag}</Text>
                                 );
                            })}
                        </View>
                        <Text style={{color:'#9DA3B4',paddingHorizontal:20, marginHorizontal:20, marginTop:15}}>
                             {products.description}
                        </Text>
                        <View style={{borderWidth:0.2, backgroundColor:'#C5CCD6', marginTop:35,}}></View>
                        <View>
                            <Text style={{fontSize:18,paddingHorizontal:20, marginHorizontal:20, marginTop:15}}>Gallery</Text>
                            <View style={{flexDirection:'row', marginHorizontal:20, marginTop:15}}>
                                {products.images.slice(1, 3).map((image, index) => (
                                    <Image
                                        key={`gallery-${index}`}
                                        source={image}
                                        style={styles.image}
                                    />
                                ))}
                                <View
                                    style={{
                                        width:55,
                                        height:55,
                                        backgroundColor:'#dcdcdc',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text style={{color:'#9DA3B4'}}>+{products.images.slice(3).length}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}

ProductScreen.defaultProps= {
    products : mocks.products[0]
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
})