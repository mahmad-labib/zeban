import React, { Component } from 'react';
import { Button, Text, View } from 'native-base';
import AppTemplate from '../appTemplate';
import Square from '../../../components/common/square';
import Driver from '../../../png/taxi-driver.png';
import User from '../../../png/user0.png';


export default class AccountType extends Component {
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="نوع الحساب">
        <View style={{ flexDirection: 'column', flex: 1, marginTop: 30 }}>
          <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', flex: 1 }}>
            <Square Img={Driver} HeaderText='سائق' width={100} />
            <Square Img={User} HeaderText='مستخدم' width={100} />
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
  box: {
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
    width: '80%',
    height: 150,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    color: '#1B5686'
  },
  text: {
    marginTop: '9%',
    color: '#266A8F',
    fontSize: 18
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#15588D',
    bot: 0,
    position: 'absolute'
  }
}
