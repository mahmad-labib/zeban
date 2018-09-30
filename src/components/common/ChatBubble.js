import React, { Component } from 'react';
import { View, Text, Card,Thumbnail } from 'native-base';
import { CheckBox } from 'react-native';
import uri from '../../png/profile.png'


export default class ChatBubble extends Component {

    constructor(props){
        super(props);

        this.ChatBox = this.ChatBox.bind(this)
    }

    ChatBox() {
        if(this.props.user === 'current') {
            return(
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center' }}>
                 <View style={{flexDirection:'row', maxWidth:200}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{backgroundColor:'white', padding:8, borderRadius:15, borderTopEndRadius:0}}>
                                <Text style={{color:'#717171', textAlign:'right'}}>
                                    {this.props.text} 
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={[styles.triangleCorner, this.props.style]} />
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Thumbnail large source={uri} style={{height:50, width:50}} />
                        </View>
                    </View>
            </View>
            )
        }else {
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center' }}>
                 <View style={{flexDirection:'row-reverse', maxWidth:200}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{backgroundColor:'white', padding:8, borderRadius:15, borderTopStartRadius:0}}>
                                <Text style={{color:'#717171', textAlign:'right'}}>
                                    {this.props.text} 
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={[styles.trianglefriend]} />
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Thumbnail large source={uri} style={{height:50, width:50}} />
                        </View>
                    </View>
            </View>
        }
    }

    render() {
        return (
            <AppTemplate navigation={nav} name="">
            {this.ChatBox()}
            </AppTemplate>
        );
    }
}

const styles = {
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderTopWidth: 15,
        borderRightColor: 'transparent',
        borderTopColor: 'white'
      },
      trianglefriend: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderTopWidth: 15,
        borderRightColor: 'transparent',
        borderTopColor: 'white',
        transform: [
            {rotate: '90deg'}
          ]
      }
}