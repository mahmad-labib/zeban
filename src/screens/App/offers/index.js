import React, { Component } from 'react';
import { View } from 'native-base';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import User from '../../../png/user-circle.png';
import Dollar from '../../../png/dollar-coin.png';

export default class Offers extends Component {
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="العروض">
        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'column' }}>
          <ListCard rightIcon={User} rightIconWidth={50} header='مدحت خالد' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='سالم محمد' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='خالد علي' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='مدحت خالد' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='احمد منصور' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='مدحت خالد' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='مدحت خالد' stars={true} Price='40' leftIconSrc={Dollar} />
          <ListCard rightIcon={User} rightIconWidth={50} header='مدحت خالد' stars={true} Price='40' leftIconSrc={Dollar} />
        </View>
      </AppTemplate>
    );
  }
}