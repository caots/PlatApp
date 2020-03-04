import React, { Component } from 'react';
import { StyleSheet, Text, View,
    Dimensions,
    FlatList ,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    SafeAreaView}
 from 'react-native';
import  MapView from 'react-native-maps'
import Modal from 'react-native-modal'
import Dropdown from 'react-native-modal-dropdown'
import { FontAwesome, Ionicons , Entypo} from "@expo/vector-icons";


const { Marker } = MapView;
const { height, width } = Dimensions.get("screen");

const parkingsSpots = [
    {
      id: 1,
      title: "Parking 1",
      price: 5,
      rating: 4.2,
      spots: 20,
      free: 10,
      coordinate: {
        latitude: 37.78735,
        longitude: -122.4334
      },
      description: `Description about this parking lot Open year 2018 Secure with CTV`
    },
    {
      id: 2,
      title: "Parking 2",
      price: 7,
      rating: 3.8,
      spots: 25,
      free: 20,
      coordinate: {
        latitude: 37.78845,
        longitude: -122.4344
      },
      description: `Description about this parking lot Open year 2018 Secure with CTV`

    },
    {
      id: 3,
      title: "Parking 3",
      price: 10,
      rating: 4.9,
      spots: 50,
      free: 25,
      coordinate: {
        latitude: 37.78615, // vi do
        longitude: -122.4314 // kinh do
      },
      description: `Description about this parking lot Open year 2018 Secure with CTV`

    }
  ];

export default class MainScreen extends Component{

    state ={ 
        isActive : -1,
        hours : {},
        activeModal: null
    }

    renderHeader = () =>{
        return(
            <View 
                style={styles.headers}
            >
                <View style={{flexDirection:'row'}}>
                    <View style={{alignItems:'center', paddingRight:10, marginTop:10}}>
                        <Entypo name='location' size={16} color='red'/>
                    </View>
                    <View>
                        <Text style={{color:'#7D818A', marginBottom:5}}>Detected Location</Text>
                        <Text style={{fontSize:16, fontWeight:'500'}}>San Francisco, US 〉</Text>
                    </View>
                </View>
                <View >
                    <TouchableWithoutFeedback>
                        <Entypo name='list' size={16 * 1.7}  />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

    renderParkings = () =>{
        const {parkings} = this.props;

        return(
            <View style={styles.parkings}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled
                    pagingEnabled
                    scrollEventThrottle={16}
                    snapToAlignment= 'center'
                    data={parkings}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> this.renderParking(item)}
                />
            </View>
        );
    }

    componentWillMount(){
        const { parkings } = this.props;
        const hours = {};

        parkings.map(parking => {
            hours[parking.id] = 1;
        });

        this.setState({ hours });
    }

    handleHours = (id, value) => {
        const { hours } = this.state;
        hours[id] = value;
    
        this.setState({ hours });
    };

    renderHours(id) {
        const { hours } = this.state;
        const availableHours = [1, 2, 3, 4, 5, 6];
    
        return (
          <Dropdown
            defaultIndex={0}
            options={availableHours}
            defaultValue={`0${hours[id]}:00` || "01:00"}
            dropdownStyle={styles.hoursDropdownStyle}
            style={{padding:10, paddingHorizontal:15, borderWidth:1, borderRadius:6, borderColor: '#7D818A'}}
            onSelect={(index, value) => this.handleHours(id, value)}
            renderRow={option => (
                <Text style={{ padding:10}}>
                     {`0${option}:00`}
                </Text>
            )}
            renderButtonText={option => `0${option}:00`}
          />
        );
      }

    renderParking = item =>{
        const {hours} = this.state;
        return (
            <TouchableOpacity activeOpacity={0.8} key={item.id} style={styles.parking}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontWeight:'500'}}>x {item.spots} {item.title}</Text>
                        <View style={{flexDirection:'row', marginTop:10}}>
                           
                            {this.renderHours(item.id)}
                            <Text style={{padding:10,paddingHorizontal:5, color:'#7D818A'}}>hrs</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', }}>
                        <View style={{justifyContent:'center'}}>
                            <View style={{flexDirection:'row', paddingHorizontal:10}}>
                                <Entypo name='price-tag' size={16} style={{paddingHorizontal:10}} color='#D83C54'/>
                                <Text>${item.price}</Text>
                            </View>
                            <View style={{flexDirection:'row', paddingHorizontal:10, marginTop:10}}>
                                <Entypo name='star' size={16} style={{paddingHorizontal:10}} color='#ffc700'/>
                                <Text>{item.rating}</Text>
                            </View>
                        </View>
                        <TouchableOpacity 
                            onPress={()=>{
                                this.setState({activeModal: item})
                            }}
                            style={{flexDirection :'row', alignItems:'center', justifyContent:'space-between',
                                backgroundColor:'#D83C54', borderRadius:6}}
                         >
                            <View style={{paddingLeft:10}}>
                                <Text style={{color:'white', fontSize:18, fontWeight:'bold', marginBottom:5}}>${item.price}</Text>
                                <Text style={{color:'white'}}>{item.price}✗{hours[item.id]} hrs</Text>
                            </View>
                            <Entypo name='chevron-thin-right' size={16} color='white' style={{paddingRight:10}}/>
                        </TouchableOpacity>                       
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderModal = () => {

        const { activeModal, hours } = this.state;
        if (!activeModal) return null;
        return(
            <Modal 
                isVisible
                useNativeDriver
                onBackButtonPress={()=> this.setState({activeModal: null})}
                onBackdropPress={() => this.setState({ activeModal: null })}
                onSwipeComplete={() => this.setState({ activeModal: null })}
            >
               <View style={{ flexDirection:'column', backgroundColor:'white', 
                            borderRadius:6 , paddingHorizontal:20, padding:20}}>
                     <Text style={{fontSize:18, marginBottom:15}}>x {activeModal.spots} {activeModal.title}</Text>
                     <Text style={{color:'#7D818A'}}>{activeModal.description}</Text>
                     <Text style={{color:'#7D818A'}}>{activeModal.description}</Text>
                     <View style={{marginTop:25, flexDirection:'row', justifyContent:'space-between',
                         borderTopWidth:0.4,borderBottomWidth:0.4, borderColor:'#7D818A', padding:15,}}>
                         <View style={{flexDirection:'row'}}>
                            <Entypo name='price-tag'  size={16} style={{paddingHorizontal:5}} color='#7D818A'/>
                            <Text>${activeModal.price}</Text>
                         </View>
                         <View style={{flexDirection:'row'}}>
                            <Entypo name='star'  size={16} style={{paddingHorizontal:5}} color='#7D818A'/>
                            <Text>{activeModal.rating}</Text>
                         </View>
                         <View style={{flexDirection:'row'}}>
                            <Entypo name='location-pin'  size={16} style={{paddingHorizontal:5}} color='#7D818A'/>
                            <Text>{activeModal.price}</Text>
                         </View>
                         <View style={{flexDirection:'row'}}>
                            <Ionicons name='ios-car'  size={16} style={{paddingHorizontal:5}} color='#7D818A'/>
                            <Text>{activeModal.free}/{activeModal.spots}</Text>
                         </View>
                     </View>
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:50}}>
                         <Text style={{marginBottom:10}}>Choose your Booking Period</Text>
                         <View style={{flexDirection:'row', marginTop:10}}>
                           
                             {this.renderHours(activeModal.id)}
                           <Text style={{padding:10,paddingHorizontal:5, color:'#7D818A'}}>hrs</Text>
                       </View>
                     </View>
                     <TouchableOpacity style={{width:width-80, padding:20, backgroundColor:'#D83C54', flexDirection:'row',marginTop:30,
                                         justifyContent:'space-between', alignItems:'center', alignSelf:'center', borderRadius:6}}>
                         <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>Proceed to pay $20</Text>
                         <Entypo name='chevron-thin-right' size={16} color='white' style={{paddingRight:10, fontWeight:'bold'}}/>
                     </TouchableOpacity>
               </View>
            </Modal>
        );
    }

    render(){
        const {currentPosition,parkings} = this.props;

        return(
                <View style={{flex:1}}>
                    {this.renderHeader()}
                    <MapView initialRegion={currentPosition} style={{flex: 10}}>
                        {parkings.map( parking => {
                            return(
                                <Marker 
                                    key={parking.id}
                                    coordinate ={parking.coordinate}
                                >
                                    <TouchableOpacity
                                        onPress={()=>{
                                            this.setState({isActive : parking.id})
                                            this.setState({activeModal: parking})
                                        }}
                                       
                                    >
                                        <View 
                                            style={{
                                                flexDirection:'row', backgroundColor:'white',
                                                borderRadius:10,
                                                padding:10,
                                                borderWidth:1,
                                                borderColor: this.state.isActive === parking.id ? '#D83C54' : '#7D818A',
                                                shadowColor: 'black' ,
                                                shadowOffset: {
                                                width: 0,
                                                height: 6
                                                },
                                                shadowOpacity: 0.1,
                                                shadowRadius: 4
                                            }}
                                        >
                                            <View style={{
                                                position:'absolute',
                                                left:'50%', right:0, bottom:-6,
                                                width:7, height: 7,
                                                backgroundColor:'white',
                                                borderBottomRightRadius:'100%',
                                                borderBottomWidth:1,borderLeftWidth:1, borderRightWidth:1,
                                                borderColor: this.state.isActive === parking.id ? '#D83C54' : '#7D818A',
                                            }}></View>
                                            <Text style={{color:'#D83C54', fontWeight:'bold'}}>${parking.price}</Text>
                                            <Text style={{color:'#7D818A'}}>
                                                {" "}
                                                ({parking.free}/{parking.spots})
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Marker>
                            );
                        })}
                    </MapView>
                    {this.renderParkings()}
                    {this.renderModal()}
                </View>    
        );
    }
}

MainScreen.defaultProps = {
    currentPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121
      },
    parkings: parkingsSpots
}

const styles = StyleSheet.create({
    headers: {
        flex:1, 
        flexDirection:'row',  justifyContent:'space-between',
        marginHorizontal:20, 
        marginTop:Platform.OS === 'ios' ? 40 :0
    },
    parkings: {
        position: 'absolute',
        left:0, right: 0, bottom: 10
    },
    parking: {
        flex:1, 
        width: width-40, 
        backgroundColor:'white', 
        margin:20, padding:15,
        borderRadius:6,
        shadowColor:'#7D818A',
        shadowOpacity:0.5,
        shadowOffset: {width:0, height:0}
    },
    hoursDropdownStyle: {
        marginLeft: -17,
        paddingHorizontal: 12 / 2,
        marginVertical: -(12 + 1)
    }
});