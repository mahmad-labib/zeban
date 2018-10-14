import React, { Component } from 'react';
import { Form, Text, Button, Icon, View, DatePicker } from 'native-base';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native';
import { FormAction } from '../../../actions';
import AppTemplate from '../appTemplate';
import FormInput from '../../../components/common/input';
import Square from '../../../components/common/square';

import CarSelected from '../../../png/car_selected.png';
import PickupSelected from '../../../png/pickup-selected.png';
import Car from '../../../png/car.png';
import Pickup from '../../../png/pickup-car.png';


class DriverForm extends Component {
  state = {
    displayName: '',
    number: null,
    chosenDate: new Date(),
    carType: '',
    pickupShadow: false,
    sedanShadow: false,
    sedanImg: Car,
    pickupImg: Pickup
  }

  Submit(navigation) {
    const { displayName, number, chosenDate, carType } = this.state;
    const { accountType } = this.props;
    this.props.FormAction({ displayName, number, chosenDate, accountType, carType });
    navigation.navigate('Policy');
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
      <AppTemplate navigation={nav} name="البيانات الشخصيه">
        <Form style={{ width: '80%', alignSelf: 'center' }}>
          <FormInput label='الاسم الكامل' onChangeText={displayName => this.setState({ displayName })} value={this.state.displayName} />
          <FormInput label='رقم الهاتف' onChangeText={number => this.setState({ number })} value={this.state.number} />
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(1930, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="تاريخ الميلاد"
            textStyle={{ color: 'green' }}
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={this.setDate}
          />
          <Text style={{ textAlign: 'right', color: '#266A8F', fontSize: 20, marginTop: '2%' }}>نوع السياره</Text>
        </Form>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', flex: 1 }}>
              <TouchableWithoutFeedback onPress={() => this.Pickup()}>
                <View style={{ flex: 1 }}>
                  <Square Img={this.state.pickupImg} InnerText='بيك أب' width={90} shadow={this.state.pickupShadow} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.Sedan()}>
                <View style={{ flex: 1 }}>
                  <Square Img={this.state.sedanImg} InnerText='سيدان' width={90} shadow={this.state.sedanShadow} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <Button iconLeft style={styles.btnBot}>
            <Icon name='add' />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ارفق صوره الرخصه</Text>
          </Button>
          <Button iconLeft style={styles.btnBot}>
            <Icon name='add' />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ارفق صوره السياره</Text>
          </Button>
          <Button iconLeft style={styles.btnBot} onPress={() => this.Submit(this.props.navigation)}>
            {/* <Icon name='add' /> */}
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>تسجيل</Text>
          </Button>
        </View>
      </AppTemplate>
    );
  }
}

const styles = {
  btnBot: {
    marginBottom: 10,
    backgroundColor: '#15588D',
    borderRadius: 20,
    alignSelf: 'center',
    paddingRight: '10%',
    paddingLeft: '10%',
  }
};

const mapStateToProps = (state) => {
  const { accountType } = state.auth;

  return { accountType };
};

export default connect(mapStateToProps, { FormAction })(DriverForm);
