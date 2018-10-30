import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Fab, Icon } from 'native-base';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';

export default class Complainings extends Component {
    state = {
        active: true
    };
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="الشكاوي">
                <View style={{ flex: 1 }} >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '90%', flexDirection: 'column' }}>
                            <TouchableOpacity onPress={() => nav.navigate('Complaining')}>
                                <ListCard header={'شكوي بخصوص التسجيل'} footer={'لم يتم التسجيل ..الرجاء متابعه الموضوع'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => nav.navigate('Complaining')}>
                                <ListCard header={'شكوي بخصوص التوصيل'} footer={'التوصيل يتاخر'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row', height: 250 }}>
                        <Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{}}
                            style={{ backgroundColor: '#5067FF' }}
                            position="bottomLeft"
                            onPress={() => nav.navigate('ReportForm')}>
                            <Icon name="add" />
                        </Fab>
                    </View>
                </View>
            </AppTemplate>
        );
    }
}

