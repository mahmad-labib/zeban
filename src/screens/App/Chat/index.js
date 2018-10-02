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
                <View style={{ width: '95%', flexDirection: 'column', alignSelf:'center' }}>
                    <ChatBubble text=" !مرحبا " user="current" />
                    <ChatBubble text="يا هلا انا بالخدمه" user="friend" />
                    <ChatBubble text="هل تستطيع توصيل الطلب في الوقت المحدد" user="current" />
                </View>
            </AppTemplate>
        );
    }
}

