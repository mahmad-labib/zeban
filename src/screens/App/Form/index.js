import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { Form, View, Button, Text, DatePicker } from 'native-base';
import { connect } from 'react-redux';
import { FormAction } from '../../../actions';
import AppTemplate from '../appTemplate';
import FormInput from '../../../components/common/input';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      number: null,
      chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
    this.Submit = this.Submit.bind(this);
  }


  setDate(newDate) {
    this.setState({ chosenDate: newDate });
    console.log(newDate);
  }

  Submit(navigation) {
    const { displayName, number, chosenDate } = this.state;
    const { accountType } = this.props;
    this.props.FormAction({ displayName, number, chosenDate, accountType });
    (navigation.navigate('Policy'));
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
        </Form>
        <View style={{ flexDirection: 'column', alignSelf: 'center', height: 250, width: '50%', justifyContent: 'flex-end' }}>
          <Button rounded block style={{ backgroundColor: '#15588D', }}>
            <Text style={{ fontSize: 20 }} onPress={() => this.Submit(nav)} >موافق</Text>
          </Button>
        </View>
      </AppTemplate>
    );
  }
}
const mapStateToProps = (state) => {
  const { accountType } = state.auth;

  return { accountType };
};
export default connect(mapStateToProps, { FormAction })(UserForm);
