import React, { Component } from 'react';
import { View } from 'native-base';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapMarker from '../../../png/map-marker.png';
import GreenDot from '../../../png/green-dot.png';
import YellowDot from '../../../png/yellow-dot.png';
import Done from '../../../png/done.png';

export default class Talabaty extends Component {
  render() {
    const nav = this.props.navigation;
    return (
      <AppTemplate navigation={nav} name="طلباتي">
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: '90%' }}>
            <ListCard header={'توصيل شاشه'} footer={'حي النصر- شارع الوحده'} rightIconSrc={MapMarker} leftIconSrc={GreenDot} />
            <ListCard header={'توصيل اثاث منزلي'} footer={'شارع خالد بن الوليد'} rightIconSrc={MapMarker} leftIconSrc={YellowDot} />
            <ListCard header={'توصيل اجهزه كهربائيه'} footer={'حي الامل'} rightIconSrc={MapMarker} leftIconSrc={Done} />
          </View>
        </View>
      </AppTemplate>
    );
  }
}
