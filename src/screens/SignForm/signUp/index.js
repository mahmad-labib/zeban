import React, { Component } from 'react';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { View, Button, Text } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
// import { CurrentUser } from '../../../actions';
import SignBox from '../../../components/common/signBox';
import SignTemplate from '../signTemplate';


import Zeban from '../../../png/zeban.png';
import Zeban1 from '../../../png/Zeban1.png';
import Sparkels from '../../../png/sparkels.png';
import City from '../../../png/city.png';

const { width } = Dimensions.get('window');

class SignUp extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        const instant = 'instant';
        this.CurrentUser(instant);
    }

    CurrentUser(instant) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const ref = firebase.database().ref(`/users/${user.uid}`);
                ref.once('value')
                    .then(snapshot => snapshot.val())
                    .then((data) => {
                        if (data) {
                            console.log(`instantdata${data}`);
                            this.props.navigation.navigate(`${data.accountType}`);
                        } else {
                            if (instant) {
                                return this.setState({ loading: false });
                            }
                            this.props.navigation.navigate('AccountType');
                        }
                    }
                    );
            }
        });
        return this.setState({ loading: false });
    }

    googleLogin() {
        (GoogleSignin.configure())
            .catch(
                err => console.log(err)
            )
            .then(() => GoogleSignin.signIn())
            .catch(
                err => console.log(err)
            )
            .then(data => firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken))
            .catch(
                err => console.log(err)
            )
            .then(credential => firebase.auth().signInAndRetrieveDataWithCredential(credential))
            .catch(
                err => console.log(err)
            )
            .then(
                () => {
                    this.CurrentUser();
                }
            );
    }

    Loading() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
                <TouchableOpacity>
                    <SignBox icon="facebook-f" text="تسجيل الدخول بواسطه فيسبوك" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.googleLogin(this.props.navigation)}>
                    <SignBox icon="google" text="تسجيل الدخول بواسطه جوجل" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SignBox icon="mobile" text="تسجيل الدخول بواسطه الجوال" />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const nav = this.props.navigation;
        return (
            <SignTemplate navigation={nav}>
                <View style={{ flex: 1, height: 100, justifyContent: 'center', flexDirection: 'row' }}>
                    <AutoHeightImage
                        width={width}
                        source={Sparkels}
                        style={{ zIndex: 1 }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', zIndex: 2, }}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 40 }}>
                        <AutoHeightImage
                            width={width / 2}
                            source={Zeban}
                            style={{ alignSelf: 'center' }}
                        />
                        <AutoHeightImage
                            width={width / 4}
                            source={Zeban1}
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                    {this.Loading()}
                </View>
                <ImageBackground source={City} style={{ width, height: 190 }}>
                    <Button bordered style={{ borderColor: '#2AA2B9', backgroundColor: 'transparent', borderRadius: 12, alignSelf: 'center', }}>
                        <Text style={{ color: '#276A8E', fontSize: 20 }} >ليس الان</Text>
                    </Button>
                    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#22688D', textAlign: 'center' }}>استخدامك لهذا التطبيق يعني موافقتك علي</Text>
                        <Text style={{ color: '#22688D', fontWeight: 'bold', textAlign: 'center' }}>الشروط والاحكام</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SignTemplate>
        );
    }
}


export default connect()(SignUp);
