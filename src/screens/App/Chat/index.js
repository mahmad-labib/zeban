import React, { Component } from 'react';
import { Picker } from 'react-native';
import { View, Icon, Text, Card } from 'native-base';
import ChatBubble from '../../../components/common/ChatBubble';
import AppTemplate from '../appTemplate';


export default class Chat extends Component {


    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="تحديد وقت التسليم">
                   <ChatBubble text=" !مرحبا " user="current" />
                   <ChatBubble text=" !مرحبا " user="friend" />
            </AppTemplate>
        );
    }
}

