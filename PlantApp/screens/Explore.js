import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,Dimensions , Animated, TextInput} from 'react-native';
import { Thumbnail, Header, Card, Badge, CardItem, Button} from 'native-base'
import { BlurView } from 'expo-blur';
import { theme, mocks } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

import { ScrollView } from 'react-native-gesture-handler';

const tabs = ['Products','Inspirations','Shop']
const { width, height } = Dimensions.get("window");


export default class ExploreScreen extends Component{

    state = {
        searchFocus: new Animated.Value(0.5),
        searchString: null,
        isEditting: false
    };

    renderExplore() {
         const { images, navigation } = this.props;
         const mainImage = images[0];
    
        return (
          <View style={{ marginBottom: height / 3 }}>
            <TouchableOpacity
              style={[styles.image, styles.mainImage]}
              onPress={() => navigation.navigate("Product")}
            >
              <Image source={mainImage} style={[styles.image, styles.mainImage,{resizeMode:'contain'}]} />
            </TouchableOpacity>
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
              {images.slice(1).map((img, index) => this.renderImage(img, index))}
            </View>
          </View>
        );
      }

      renderImage(img, index) {
        const { navigation } = this.props;
        const sizes = Image.resolveAssetSource(img);
        const fullWidth = width - 40;
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;
    
        return (
          <TouchableOpacity
            key={`img-${index}`}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={img}
              style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
            />
          </TouchableOpacity>
        );
      }

      handleSearchFocus(status) {
        Animated.spring(this.state.searchFocus, {
          toValue: status ? 0.7 : 0.5,
          duration: 500 // ms
        }).start();
        this.setState({ isEditing: status ? true : false}) 
      }

    render(){
        const {navigation} = this.props;
        const {images} = this.props;
        const { searchString, searchFocus,isEditing } = this.state;
        navigation.setOptions({
            headerBackImage: ({tintColor}) => {
                return (<Image source={require('../assets/icons/back.png')} style={{marginHorizontal:20}}/>)
            },
             headerBackTitleVisible: false,
             headerTitle: null,
             headerStyle:{
              backgroundColor:'#f2f2f2f2',
          }
        })
        return(
            <View style={{flex:1, marginHorizontal:20, marginTop:10, }}>
                   <View 
                        style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
                    >
                        <Text style={{fontSize:26, fontWeight:'bold'}}>Explore</Text>
      
                        <Animated.View 
                          style={{
                            flex :searchFocus,
                            flexDirection:'row',
                            paddingHorizontal:10,
                            backgroundColor:'white',
                            shadowColor:'#C5CCD6',
                            shadowOffset:{width:0, height:0},
                            shadowOpacity:0.2,
                            borderRadius:5,
                            padding:3,
                          }}
                        >
                            <TextInput
                                onFocus={() => this.handleSearchFocus(true)}
                                onBlur={() => this.handleSearchFocus(false)}
                                placeholder='Search'
                                onChangeText={text => {
                                  this.setState({ searchString: text })
                                }}
                                value={searchString}
                                style={{ paddingHorizontal:10, paddingRight: 30, fontSize: 12, width:'100%', height:25}}
                            />
                            <TouchableOpacity transparent 
                              onPress={()=>{
                                isEditing ? this.setState({ searchString: null }) : null
                              }}
                              style={{
                                    paddingRight:5,
                                    position: "absolute",
                                    right: 5,
                                    top: 3
                                  }}
                            >
                               <Ionicons name={isEditing ? 'md-close' : 'md-search'} size={24} color="#C5CCD6" />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        style={{marginHorizontal:20, marginTop:30}}
                    >
                        {this.renderExplore()}
                    </ScrollView>
                    <View style={{justifyContent:'center', alignItems:'center', marginBottom:20}}>
                      <Button
                        style={styles.buttonLogin}
                      >
                        <Text style={{color:'white', fontSize:16}}>Filter</Text>
                      </Button>
                    </View>
            </View>
        )
    }
}

ExploreScreen.defaultProps = {
    images : mocks.explore
}

const styles = StyleSheet.create({
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - 40,
        marginBottom: 16,
        borderRadius: 4
      },
      mainImage: {
        minWidth: width - 40,
        minHeight: width - 40
      },
      searchIcon: {
        position: "absolute",
        right: theme.sizes.base / 1.333,
        top: theme.sizes.base / 1.6
      },
      buttonLogin:{
        position:'absolute',
        bottom:10,
        left:'25%',
        right:0,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:'#0bc5b9', 
        width: 200,
        borderRadius:5,
        shadowOpacity:0.5,
        shadowColor:'#C5CCD6',
        shadowOffset:{width: 0, header:0}
    },
})