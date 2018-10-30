import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Card, CardItem, Body, Text } from 'native-base';
import AppTemplate from '../appTemplate';
import ChatBubble from '../../../components/common/ChatBubble';

export default class Complaining extends Component {
    render() {
        const nav = this.props.navigation;
        return (
            <AppTemplate navigation={nav} name="الشكوي">
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', alignSelf: 'center' }} >
                    <View style={{}}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text style={{ color: '#2C6691', fontWeight: 'bold', alignSelf: 'flex-end', fontSize: 20 }}>
                                        مشكله اثناء الطلب
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{}}>
                        <Card style={{ height: 200 }}>
                            <ScrollView>
                                <Text style={{ padding: 20, fontSize: 20, color: '#6E6E6E' }}>
                                    لدي مشكله في بدايه الطلب لا تظهر لي النافذه كما كانت
                                </Text>
                            </ScrollView>
                        </Card>
                    </View>
                    <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1, marginTop: 20 }} />
                    <Text style={{ color: '#2C6691', fontWeight: 'bold', alignSelf: 'center', fontSize: 20, marginBottom: 10 }}>
                        الرد
                    </Text>
                    <View>
                        <ChatBubble text="مشتركنا العزيز سيتم متابعه الامر" user="current" />
                    </View>
                </View>
            </AppTemplate>
        );
    }
}

