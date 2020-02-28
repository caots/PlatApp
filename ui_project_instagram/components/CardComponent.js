import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon, CardItem, Thumbnail, Body,Left, Right, Button, Card} from 'native-base'

export default class CardComponent extends Component{
    render(){
        const arrImage = {
             "1": require('../assets/feed_image.jpg'),
             "2": require('../assets/feed_image.jpg'),
             "3": require('../assets/feed_image.jpg')
        }
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/avatar.jpg')} />
                        <Body>
                            <Text>Cao Tran</Text>
                            <Text note>Jan 15, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={arrImage[this.props.imageSource]} style={{height:200, width:null, flex:1}}/>
                </CardItem>
                <CardItem style={{height:35}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color:'black'}}/>
                        </Button>
                    </Left>
                    <Right>
                    <Button transparent>
                            <Icon name="ios-bookmark" style={{color:'black'}}/>
                        </Button>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text>101 likes</Text>      
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight:'600'}}>Cao tran </Text>
                        Công việc này bao gồm các tài liệu có thể được bảo vệ như một nhãn hiệu trong một số khu vực pháp lý. 
                        Nếu bạn muốn sử dụng nó, bạn phải đảm bảo rằng bạn có quyền hợp pháp để làm như vậy và bạn không vi phạm 
                        bất kỳ quyền thương hiệu nào. 
                        </Text>
                    </Body>  
                </CardItem>
            </Card>
        )
    }
}