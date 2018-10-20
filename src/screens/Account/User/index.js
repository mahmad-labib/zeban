import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text, View, List } from 'native-base';
import { FetchUserData } from '../../../actions';
import AccountTemplate from '../accountTemplate';

import Coupon from '../../../png/coupon.png';
import Listitem from '../../../components/common/ListItem';

class UserAccount extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        this.props.FetchUserData();
    }
    render() {
        const nav = this.props.navigation;
        return (
            <AccountTemplate navigation={nav}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#15588D', fontSize: 25 }}>{this.props.UserData.displayName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
                        <List>
                            <Listitem RightData='اضف كوبون' Icon={Coupon} />
                            <Listitem RightData='رصيد الحساب' LeftData='00 ريال' />
                            <Listitem RightData='عدد الطلبات' LeftData='0' />
                            <Listitem RightData='تعليقات العملاء' LeftData='0 تعليقات' />
                        </List>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', width: '40%', alignSelf: 'center', marginTop: 20 }}>
                        <Button rounded block style={{ flex: 1 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                                شحن رصيد
                            </Text>
                        </Button>
                    </View>
                </View>
            </AccountTemplate>
        );
    }
}

const mapStateToProps = (state) => {
    const { UserData } = state.auth;
    return { UserData };
};

export default connect(mapStateToProps, { FetchUserData })(UserAccount);
