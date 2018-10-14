import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { Button, Text, View } from 'native-base';
import { TouchableWithoutFeedback } from 'react-native';
import { AccountTypeAction } from '../../../actions';
import AppTemplate from '../appTemplate';
import Square from '../../../components/common/square';
import DriverSelected from '../../../png/taxi-driver.png';
import Driver from '../../../png/taxi-driver-gray.png';
import UserSelected from '../../../png/user0.png';
import User from '../../../png/user.png';


class AccountType extends Component {
  state = {
    userImg: User,
    driverImg: Driver,
    selected: '',
    userShadow: false,
    DriverShadow: false
  }

  AddUser() {
    this.setState({ userImg: UserSelected, driverImg: Driver, userShadow: true, DriverShadow: false, selected: 'User' });
    console.log(this.state);
  }

  AddDriver() {
    this.setState({ driverImg: DriverSelected, userImg: User, selected: 'Driver', userShadow: false, DriverShadow: true });
    console.log(this.state);
  }

  OnButtonPress(navigation) {
    // const { currentUser } = firebase.auth();
    // const usersRef = firebase.database().ref('users');
    // console.log(currentUser);
    // usersRef.child(currentUser.uid).update({
    //   accountType: 'user'
    // })
    this.props.AccountTypeAction(this.state.selected);
    console.log(`${this.state.selected}Form`);
    navigation.navigate(`${this.state.selected}Form`);
  }

  render() {
    const nav = this.props.navigation;
    return (
      <AppTemplate navigation={nav} name="نوع الحساب">
        <View style={{ flexDirection: 'column', flex: 1, marginTop: 30 }}>
          <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => this.AddDriver()}>
              <View style={{ flex: 1 }}>
                <Square Img={this.state.driverImg} HeaderText='سائق' width={100} shadow={this.state.DriverShadow} />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.AddUser()}>
              <View style={{ flex: 1 }}>
                <Square Img={this.state.userImg} HeaderText='مستخدم' width={100} shadow={this.state.userShadow} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignSelf: 'center', height: 250, width: '50%', justifyContent: 'flex-end' }}>
          <Button rounded block style={{ backgroundColor: '#15588D', }}>
            <Text style={{ fontSize: 20 }} onPress={() => this.OnButtonPress(nav)} >موافق</Text>
          </Button>
        </View>
      </AppTemplate >
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
};


// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;

//   return { name, phone, shift };
// };

export default connect(null, { AccountTypeAction })(AccountType);
