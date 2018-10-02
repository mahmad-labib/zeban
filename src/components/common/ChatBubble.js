import React, { Component } from 'react';
import { View, Text, Card, Thumbnail } from 'native-base';
import { CheckBox } from 'react-native';
import uri from '../../png/profile.png'


export default class ChatBubble extends Component {

    constructor(props) {
        super(props);

        this.ChatBox = this.ChatBox.bind(this)
    }

    ChatBox() {
        if (this.props.user === "current") {
            return (
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ flexDirection: 'column',  maxWidth: 200  }}>
                            <View style={{ backgroundColor: 'white', padding: 11, borderRadius: 15, borderTopEndRadius: 0 }}>
                                <Text style={{ color: '#717171', textAlign: 'right', fontSize:17 }}>
                                    {this.props.text}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={[styles.triangleCorner]} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Thumbnail large source={uri} style={{ height: 50, width: 50 }} />
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <View style={{ flexDirection: 'column', maxWidth: 200 }}>
                            <View style={{ backgroundColor: 'white', padding: 11, borderRadius: 15, borderTopStartRadius: 0 }}>
                                <Text style={{ color: '#717171', textAlign: 'right', fontSize:17 }}>
                                    {this.props.text}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={[styles.trianglefriend]} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Thumbnail large source={uri} style={{ height: 50, width: 50 }} />
                        </View>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                {this.ChatBox()}
            </View>
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
        borderLeftWidth: 30,
        borderTopWidth: 15,
        borderLeftColor: 'transparent',
        borderTopColor: 'white',
    }
}