import React, { Component } from 'react';

import { View, Form, Textarea, Text, Button } from 'native-base';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapLocation from '../../../png/map-location.png';
import Navigation from '../../../png/navigation.png';
import Clock from '../../../png/clock.png';
import Car from '../../../png/car.png';


export default class OrderNow extends Component {
    render() {
        const nav = this.props.navigation;
        return (
            <AppTemplate navigation={nav} name="اطلب الان">
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: '90%', flexDirection: 'column' }}>
                        <ListCard header={'حدد مكان الاستلام'} footer={'اختر موقع استلام الشحنه'} rightIcon={MapLocation} rightIconWidth={40} />
                        <ListCard header={'حدد مكان التسليم'} footer={'اختر موقع تسليم الشحنه'} rightIcon={Navigation} rightIconWidth={40} />
                        <ListCard header={'حددوقت التسليم'} footer={'اضغط هنا لاختيار وقت التسليم'} rightIcon={Clock} rightIconWidth={40} />
                        <ListCard header={'حدد نوع السياره'} footer={'بيك أب - سيدان'} rightIcon={Car} rightIconWidth={40} />
                    </View>
                </View>
                <View style={{ flexdirection: 'row' }}>
                    <Form style={{ marginHorizontal: 14 }}>
                        <View style={{ width: '80%', alignSelf: 'center' }}>
                            <Text style={{ color: '#266A8F', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>تفاصيل الطلب</Text>
                            <Text style={{ textAlign: 'center', fontSize: 17 }} note>اكتب هنا تفاصيل الغرض الذي ترغب في ارساله مثلا ما هو وكيف حجمه</Text>
                        </View>
                        <Textarea style={{ borderRadius: 14, backgroundColor: 'white' }} rowSpan={4} bordered placeholder="" />
                    </Form>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Button rounded style={{ backgroundColor: '#15588D', alignSelf: 'center', alignItems: 'center', marginTop: 30, paddingRight: 20, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>اطلب الان !</Text>
                    </Button>
                </View>
            </AppTemplate>
        );
    }
}



const styles = {
    btnBot: {
        backgroundColor: '#15588D',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
}