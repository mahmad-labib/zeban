import React, { Component } from 'react';
import { Form, Text, Button, Icon, View } from 'native-base';
import AppTemplate from '../appTemplate';
import FormInput from '../../../components/common/input';
import Square from '../../../components/common/square';

import Car from '../../../png/car0.png';
import Pickup from '../../../png/pickup-car.png';


export default class AccountType extends Component {
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="البيانات الشخصيه">
        <Form style={{ width: '80%', alignSelf: 'center' }}>
          <FormInput label='الاسم الكامل' />
          <FormInput label='رقم الهاتف' />
          <FormInput label='تاريخ الميلاد' />
          <Text style={{ textAlign: 'right', color: '#266A8F', fontSize: 20, marginTop: '2%' }}>نوع السياره</Text>
        </Form>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', flex: 1 }}>
              <Square Img={Pickup} InnerText='بيك أب' width={90} />
              <Square Img={Car} InnerText='سيدان' width={90} />
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
}