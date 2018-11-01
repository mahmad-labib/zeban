import React, { Component } from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import { } from 'native-base';
import { connect } from 'react-redux';
import { PlaceOfDelivery } from '../../../actions';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapComponent from '../../../components/common/map';
import MapMarker from '../../../png/map-marker.png';


let { width, height } = Dimensions.get('window');

class TalabDetails2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: 'حدد مكان التسليم علي الخريطه',
                address: 'العنوان.....'
            }
        };
    }
    render() {
        const nav = this.props.navigation;
        const header = this.props.DeliveryPlace ? this.props.DeliveryPlace.name : this.state.data.name;
        const footer = this.props.DeliveryPlace ? this.props.DeliveryPlace.address : this.state.data.address;
        return (
            <AppTemplate navigation={nav} name="حدد مكان التسليم">

                <View style={{ position: 'relative' }}>
                    <MapComponent PlaceOfDelivery={data => this.props.PlaceOfDelivery(data)} MapMarker={this.props.DeliveryPlace} />
                    <View style={{ position: 'absolute', width: '90%', bottom: 0, alignSelf: 'center' }}>
                        <ListCard header={header} footer={footer} rightIconSrc={MapMarker} />
                    </View>
                </View>

            </AppTemplate>
        );
    }
}
const mapStateToProps = (state) => {
    const { DeliveryPlace } = state.auth;
    return { DeliveryPlace };
};

export default connect(mapStateToProps, { PlaceOfDelivery })(TalabDetails2);
