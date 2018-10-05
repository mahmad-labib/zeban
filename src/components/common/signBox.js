import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Icon } from 'native-base';

export default class SignBox extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderRadius: 12, borderColor: '#A6AEB8', marginBottom: 10, height: 50, backgroundColor: '#15588D' }} >
                <View style={{ flex: 0.1, flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}>
                    <Icon type='FontAwesome' name={this.props.icon} style={{ alignSelf: 'center', color: 'white' }} />
                </View>
                <View style={{ flex: 0.1, flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 30 }} >|</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }} >{this.props.text}</Text>
                </View>
            </View>
        );
    }
}
