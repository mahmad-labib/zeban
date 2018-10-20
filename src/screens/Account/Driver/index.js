import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { Button, Text, View, List, Icon } from 'native-base';
import Stars from 'react-native-stars';
import { FetchUserData } from '../../../actions';

import AccountTemplate from '../accountTemplate';
import Coupon from '../../../png/coupon.png';
import Listitem from '../../../components/common/ListItem';

class Driver extends Component {
    state = {
        rating: 3.5,
        data: {}
    }

    componentDidMount() {
        this.props.FetchUserData();
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { rating } = this.state;
        const nav = this.props.navigation;
        return (
            <AccountTemplate navigation={nav} >
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#15588D', fontSize: 25 }}>{this.props.UserData.displayName}</Text>
                        <Stars
                            default={rating}
                            count={5}
                            half={true}
                            starSize={50}
                            fullStar={<Icon type='MaterialCommunityIcons' name={'star'} style={[styles.myStarStyle]} />}
                            emptyStar={<Icon type='MaterialCommunityIcons' name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Icon type='MaterialCommunityIcons' name={'star-half'} style={[styles.myStarStyle]} />}
                        />
                        <Text style={{ textAlign: 'center', color: '#15588D', fontSize: 25 }}>{this.props.UserData.accountType}</Text>
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
                        <Button rounded block style={{ flex: 1, backgroundColor: '#266A8F' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                دعوه صديق
                            </Text>
                        </Button>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', width: '60%', alignSelf: 'center', marginTop: 5 }}>
                        <Text style={{ textAlign: 'center', color: '#6E6E6E' }}>
                            قم بدعوه اصدقائك للاستفاده بخصومات رائعه للطرفين
                        </Text>
                    </View>
                </View>

            </AccountTemplate>
        );
    }
}

const styles = StyleSheet.create({
    myStarStyle: {
        color: '#FAC819',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: '#FAC819',
    }
});


const mapStateToProps = (state) => {
    const { UserData } = state.auth;
    return { UserData };
};

export default connect(mapStateToProps, { FetchUserData })(Driver);
