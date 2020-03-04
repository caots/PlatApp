import React,{Component} from 'react';
import { StyleSheet, Text, View , Animated, ImageBackground, Dimensions, SafeAreaView,Image} from 'react-native';
import {Button,Thumbnail} from 'native-base'
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const mocks = [
    {
        id: 1,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
        rating: 4.3,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        ]
      },
      {
        id: 2,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: false,
        location: 'Loutraki, Greece',
        temperature: 34,
        title: 'Loutraki',
        description: 'This attractive small town, 80 kilometers from Athens',
        rating: 4.6,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
        ]
      },
      {
        id: 3,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini - Description',
        rating: 3.2,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        ]
      },
      {
        id: 4,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        location: 'Loutraki, Greece',
        temperature: 34,
        title: 'Loutraki',
        description: 'This attractive small town, 80 kilometers from Athens',
        rating: 5,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
        ]
      },
]

const {width, height} = Dimensions.get('window')
export default class ListScreen extends Component{

    scrollX = new Animated.Value(0);

    renderDots = () => {
        const dotPosition = Animated.divide(this.scrollX, width);
        return(
            <View style={{flexDirection:'row',flex:1, justifyContent:'center', alignItems:'center', marginTop:20}}>
                {
                    mocks.map((item, index) =>{
                        const borderWidth = dotPosition.interpolate({
                            inputRange: [index -1 , index , index+1],
                            outputRange:[0,2.5,0],
                            extrapolate: 'clamp'
                        })
                        return(
                            <Animated.View
                                key= {index}
                                style={{
                                        width:5, height:5, 
                                        borderRadius:5,
                                        borderWidth, 
                                        marginHorizontal:6,
                                        backgroundColor:'#DCE0E9',
                                        width: 12.5,
                                        height: 12.5,
                                        borderRadius: 6.25,
                                        borderColor: '#007BFA',
                                        
                                    }}
                            >
                                    
                            </Animated.View>
                        );
                    })
                    
                }
            </View>
        );
    }

    renderDestinations = () => {
        return(
            <View>
                <FlatList 
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    style={{ overflow:'visible', height: 300, }}
                    data={mocks}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => this.renderDestination(item)}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
                    />
                {this.renderDots()}
            </View>
            
        );
    }

    renderDestination = item =>{ 
        const {navigation} = this.props;
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.push('Article')}>
                <ImageBackground 
                    source={{uri: item.preview}}
                    style={{ 
                             width:width - 75 , height: width* 0.6, 
                             paddingTop:10, paddingVertical:20,marginTop:20,
                             marginRight:35,
                             shadowColor: '#000',
                             shadowOffset: {
                               width: 0,
                               height: 6,
                             },
                             shadowOpacity: 0.05,
                             shadowRadius: 12,
                             elevation: 5,  
                     }}
                    imageStyle={{ borderRadius: 12}}
                >
                    <View style={{ justifyContent: 'space-between', flex:1 , flexDirection:'row', marginHorizontal:20, marginTop:10 }}>
                        <View style={{flex:0}}>
                            <Thumbnail source={{ uri: item.user.avatar }}  style={{width:40, height:40, resizeMode:'cover',borderRadius:'50%'}} />
                        </View>
                        <View style={{flex:2, paddingHorizontal:20}}>
                            <Text style={{fontWeight:'bold', color:'white'}}>{item.user.name}</Text>
                            <Text>
                                <Octicons
                                    name="location"
                                    size={14}
                                    color='white'
                                />
                                <Text style={{color:'white'}}> {item.location}</Text>
                            </Text>
                        </View>
                        <View style={{  alignItems: 'flex-end', flex:0,}}>
                            <Text style={{fontSize:32, color: 'white', fontWeight:'bold'}}>{item.rating}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{
                    position:'absolute',
                    left:'8.5%',right:0, bottom:-30,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'white',
                    width:width - 140,
                    borderRadius:12,
                    padding:10
                }}>
                    <Text style={{fontSize:20, fontWeight:'500', paddingBottom:10}}>
                        {item.title}
                    </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center'}}>
                        <Text style={{width:width/2, color:'#BCCCD4'}}>
                            {item.description.slice(0, 50)}...
                        </Text>
                        <FontAwesome
                            name="chevron-right"
                            size={12}
                            color='#BCCCD4'
                            style={{paddingLeft:15}}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    renderRecommended = () =>{
        return(
            <View>
                <View style={{flex:1, marginTop:35, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:24, fontWeight:'bold'}}>Recommend</Text>
                    <TouchableOpacity>
                         <Text style={{color:'#BCCCD4'}}>More</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{marginTop:20}}> 
                    <FlatList 
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        style={{ overflow:'visible'}}
                        data={mocks}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => this.renderRecommendation(item, index) }
                    />
                </View>

            </View>
        );   
    }

    renderRecommendation = (item, index) =>{
        return(
            <View style={{flexDirection:'column', marginRight:20, borderRadius:1, backgroundColor:'white',borderRadius:12}}>
                <View style={{borderRadius:12}}>
                    <Image source={{uri: item.preview}} 
                        style={{width: width /2-45, height: width /2 -45,resizeMode:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>
                    <View 
                        style={{
                            flexDirection:'row', justifyContent:'space-between',
                            position:'absolute',
                            top:0,left:0, right:0,
                            paddingHorizontal:10,
                            paddingTop:15
                        }}
                    >
                        <Text style={{fontWeight:'500', color:'white'}}>{item.temperature}℃</Text>
                        <FontAwesome 
                            name={item.saved ? 'bookmark' : 'bookmark-o'}
                            color='white'
                            style={{fontSize:16}}
                        />
                    </View>
                </View>
                <View style={{padding:10}}>
                    <Text style={{ fontSize:18, fontWeight: '500', paddingBottom: 6, marginTop:10}}>{item.title}</Text>
                    <Text style={{ color: '#BCCCD4'}}>{item.location}</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 10 , flexDirection:'row'}}>
                        <View style={{flexDirection:'row'}}>
                            {this.renderRatings(item.rating)}
                        </View>
                        <Text style={{ color: '#007BFA', marginRight: 30}}>
                         {item.rating}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
    renderRatings = rating =>{
        const stars = new Array(5).fill(0);
        return(
            
            stars.map((star, index)=>{
                const activeStar = Math.floor(rating) >= (index+1)
                return(
                    <FontAwesome
                        name="star"
                        key={index}
                        size={12}
                        color={activeStar ? '#007BFA' : '#DCE0E9'}
                    />
                )
            })
        );
    }

    render(){
        const {navigation,mocks} = this.props;
        navigation.setOptions({
            headerShown: false
           
        })
        return(
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal:20,
                        marginHorizontal:20
                    }}
                >
                    <View 
                            style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}
                        >
                            <Text style={{fontSize:26, fontWeight:'bold'}}>Destination</Text>
                            <Button transparent onPress={()=>navigation.push('Settings')}>
                                <Thumbnail source={require('../assets/avatar.jpg')} 
                                    style={{width:40, height:40, resizeMode:'cover', borderRadius:'50%'}}/>
                            </Button>
                        </View>
                    {this.renderDestinations()}
                    {this.renderRecommended()}
                </ScrollView>
            </SafeAreaView>
            
        );
    }
}
ListScreen.defaultProps = {
     mocks 
}

