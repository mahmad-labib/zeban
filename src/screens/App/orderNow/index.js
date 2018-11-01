import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Form, Textarea, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { CreateOrder } from '../../../actions';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapLocation from '../../../png/map-location.png';
import Navigation from '../../../png/navigation.png';
import Clock from '../../../png/clock.png';
import CarSelected from '../../../png/car_selected.png';


class OrderNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        const nav = this.props.navigation;
        const orderdetails = this.props.OrderDetails;
        const OrderDetails = {
            ...orderdetails,
            text: this.state.text
        };
        console.log(OrderDetails);
        return (
            <AppTemplate navigation={nav} name="اطلب الان">
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: '90%', flexDirection: 'column' }}>
                        <TouchableOpacity onPress={() => nav.navigate('TalabDetails3')}>
                            <ListCard header={'حدد مكان الاستلام'} footer={'اختر موقع استلام الشحنه'} rightIcon={MapLocation} rightIconWidth={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => nav.navigate('TalabDetails2')}>
                            <ListCard header={'حدد مكان التسليم'} footer={'اختر موقع تسليم الشحنه'} rightIcon={Navigation} rightIconWidth={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => nav.navigate('TimePicker')}>
                            <ListCard header={'حددوقت التسليم'} footer={'اضغط هنا لاختيار وقت التسليم'} rightIcon={Clock} rightIconWidth={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => nav.navigate('CarType')}>
                            <ListCard header={'حدد نوع السياره'} footer={'بيك أب - سيدان'} rightIcon={CarSelected} rightIconWidth={40} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexdirection: 'row' }}>
                    <Form style={{ marginHorizontal: 14 }}>
                        <View style={{ width: '80%', alignSelf: 'center' }}>
                            <Text style={{ color: '#266A8F', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>تفاصيل الطلب</Text>
                            <Text style={{ textAlign: 'center', fontSize: 17 }} note>اكتب هنا تفاصيل الغرض الذي ترغب في ارساله مثلا ما هو وكيف حجمه</Text>
                        </View>
                        <Textarea style={{ borderRadius: 14, backgroundColor: 'white' }} rowSpan={4} bordered placeholder="" value={this.state.text} onChangeText={text => this.setState({ text })} />
                    </Form>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Button rounded style={styles.btnBot} onPress={() => this.props.CreateOrder(OrderDetails)} >
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>اطلب الان !</Text>
                    </Button>
                </View>
            </AppTemplate >
        );
    }
}

const styles = {
    btnBot: {
        backgroundColor: '#15588D',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingRight: 20,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { DeliveryCar, DeliveryTime, PickupPlace, DeliveryPlace } = state.auth;
    const OrderDetails = { DeliveryCar, DeliveryTime, PickupPlace, DeliveryPlace };
    return { OrderDetails };
};

export default connect(mapStateToProps, { CreateOrder })(OrderNow);
