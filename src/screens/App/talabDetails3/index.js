import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from "react-native";


import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapComponent from '../../../components/common/map';

import MapMarker from '../../../png/map-marker.png';


export default class TalabDetails3 extends Component {
  render() {
    const nav = this.props.navigation;
    return (
      <AppTemplate navigation={nav} name="حدد مكان الاستلام">

        <View style={{ position: 'relative' }}>
          <MapComponent />
          <View style={{ position: 'absolute', width: '90%', bottom: 0, alignSelf: 'center' }}>
            <ListCard header={'متجر بلايستيشن'} footer={'حي النصر - شارع الوحده'} rightIconSrc={MapMarker} />
          </View>
        </View>

      </AppTemplate>
    );
  }
}
