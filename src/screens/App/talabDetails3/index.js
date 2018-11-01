import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { PlaceOfPickup } from '../../../actions';

import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapComponent from '../../../components/common/map';

import MapMarker from '../../../png/map-marker.png';

class TalabDetails3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: 'حدد مكان الاستلام علي الخريطه',
        address: 'العنوان.....'
      }
    };
  }
  render() {
    const nav = this.props.navigation;
    const header = this.props.PickupPlace ? this.props.PickupPlace.name : this.state.data.name;
    const footer = this.props.PickupPlace ? this.props.PickupPlace.address : this.state.data.address;
    return (
      <AppTemplate navigation={nav} name="حدد مكان الاستلام">
        <View style={{ position: 'relative' }}>
          <MapComponent PlaceOfDelivery={data => this.props.PlaceOfPickup(data)} MapMarker={this.props.PickupPlace} />
          <View style={{ position: 'absolute', width: '90%', bottom: 0, alignSelf: 'center' }}>
            <ListCard header={header} footer={footer} rightIconSrc={MapMarker} />
          </View>
          {console.log(this.props.PickupPlace)}
        </View>

      </AppTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  const { PickupPlace } = state.auth;
  return { PickupPlace };
};

export default connect(mapStateToProps, { PlaceOfPickup })(TalabDetails3);
