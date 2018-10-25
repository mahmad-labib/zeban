import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Button, Text, View } from 'native-base';
import AppTemplate from '../appTemplate';
import Square from '../../../components/common/square';

import CarSelected from '../../../png/car_selected.png';
import PickupSelected from '../../../png/pickup-selected.png';
import Car from '../../../png/car.png';
import Pickup from '../../../png/pickup-car.png';


export default class CarType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carType: '',
      pickupShadow: false,
      sedanShadow: false,
      sedanImg: Car,
      pickupImg: Pickup,
    };
  }

  Sedan() {
    this.setState({ sedanImg: CarSelected, pickupImg: Pickup, sedanShadow: true, pickupShadow: false, carType: 'Sedan' });
    console.log(this.state);
  }

  Pickup() {
    this.setState({ sedanImg: Car, pickupImg: PickupSelected, sedanShadow: false, pickupShadow: true, carType: 'Pickup' });
    console.log(this.state);
  }

  render() {
    const nav = this.props.navigation;
    return (
      <AppTemplate navigation={nav} name="حدد نوع السياره">
        <View style={{ flexDirection: 'column', flex: 1, marginTop: 30 }}>
          <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => this.Pickup()}>
              <View style={{ flex: 1 }}>
                <Square Img={this.state.pickupImg} InnerText='بيك أب' width={100} shadow={this.state.pickupShadow} />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.Sedan()}>
              <View style={{ flex: 1 }}>
                <Square Img={this.state.sedanImg} InnerText='سيدان' width={100} shadow={this.state.sedanShadow} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignSelf: 'center', height: 250, width: '50%', justifyContent: 'flex-end' }}>
          <Button rounded block style={{ backgroundColor: '#15588D', }}>
            <Text style={{ fontSize: 20 }}>موافق</Text>
          </Button>
        </View>
      </AppTemplate>
    );
  }
}

const styles = {

}
