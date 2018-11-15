import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Button, Text } from 'native-base';
import { connect } from 'react-redux';
// import firebase from 'react-native-firebase';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';
import MapMarker from '../../../png/map-marker.png';
import GreenDot from '../../../png/green-dot.png';
// import YellowDot from '../../../png/yellow-dot.png';
// import Done from '../../../png/done.png';

class Talabaty extends Component {
  componentDidUpdate() {
   
  }

  renderListCard() {
    const Data = this.props.UserData.Orders;
    if (Data) {
      const List = Object.entries(Data);
      return List.map(([key, value]) => {
        return (
          <TouchableOpacity style={{ flex: 1 }} key={key} onPress={() => this.props.navigation.navigate('TalabDetails', { value: value.data })}>
            <ListCard key={key} header={value.data.text} footer={value.data.DeliveryPlace.address} rightIconSrc={MapMarker} rightIconWidth={20} leftIconSrc={GreenDot} />
          </TouchableOpacity>
        );
      });
    }
  }

  render() {
    const nav = this.props.navigation;
    return (
      <AppTemplate navigation={nav} name="طلباتي">
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: '90%' }}>
            {this.renderListCard()}
          </View>
        </View>
      </AppTemplate>
    );
  }
}
const mapStateToProps = (state) => {
  const { UserData } = state.auth;
  return { UserData };
};


export default connect(mapStateToProps, {})(Talabaty);
