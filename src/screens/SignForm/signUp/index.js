import React, { Component } from 'react';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { View, Button, Text } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions, TouchableOpacity, ImageBackground, ActivityIndicator, TextInput } from 'react-native';
import Modal from 'react-native-modal';
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
        loading: true,
        user: null,
        message: '',
        codeInput: '',
        phoneNumber: '+44',
        confirmResult: null,
        isModalVisible: false,
        facebook: ''
    }
    componentDidMount() {
        const instant = 'instant';
        this.CurrentUser(instant);
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user.toJSON() });
            } else {
                // User has been signed out, reset the state
                this.setState({
                    user: null,
                    message: '',
                    codeInput: '',
                    phoneNumber: '+20',
                    confirmResult: null,
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    confirmCode() {
        const { codeInput, confirmResult } = this.state;

        if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
                .then((user) => {
                    this.setState({ message: 'Code Confirmed!' });
                })
                .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
        }
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
    }


    googleLogin() {
        (GoogleSignin.configure())
            .then(() => GoogleSignin.signIn())
            .then(data => firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken))
            .then(credential => firebase.auth().signInAndRetrieveDataWithCredential(credential))
            .catch(
                err => console.log(err),
                this.setState({ loading: false })
            )
            .then(
                () => {
                    this.CurrentUser();
                }
            );
    }

    facebookLogin() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then(
                result => {
                    if (result.isCancelled) {
                        // throw new Error('User cancelled request');
                        return this.setState({ loading: false, facebook: 'cancelled' });
                    }
                    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                    this.setState({ facebook: 'success' });
                }
            )
            .then(() => AccessToken.getCurrentAccessToken())
            .then(
                data => {
                    if (!data) {
                        throw new Error('Something went wrong obtaining the users access token');
                    }
                    return firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                }
            )
            .then(credential => firebase.auth().signInAndRetrieveDataWithCredential(credential))
            .then(currentUser => console.info(JSON.stringify(currentUser.user.toJSON())))
            .catch(err => console.log(err))
            .then(
                () => {
                    if (this.state.facebook === 'success') {
                        this.CurrentUser();
                    }
                }
            );
    }

    PhoneSignIn() {
        const { phoneNumber } = this.state;
        this.setState({ message: 'Sending code ...' });

        firebase.auth().signInWithPhoneNumber(phoneNumber)
            .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
            .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
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
                <TouchableOpacity onPress={() => { this.facebookLogin(); this.setState({ loading: true }); }}>
                    <SignBox icon="facebook-f" text="تسجيل الدخول بواسطه فيسبوك" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.googleLogin(); this.setState({ loading: true }); }}>
                    <SignBox icon="google" text="تسجيل الدخول بواسطه جوجل" />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModal} >
                    <SignBox icon="mobile" text="تسجيل الدخول بواسطه الجوال" />
                </TouchableOpacity>
            </View >
        );
    }

    renderVerificationCodeInput() {
        const { codeInput } = this.state;

        return (
            <View style={{ marginTop: 25, padding: 25 }}>
                <Text>Enter verification code below:</Text>
                <TextInput
                    autoFocus
                    style={{ height: 40, marginTop: 15, marginBottom: 15 }}
                    onChangeText={value => this.setState({ codeInput: value })}
                    placeholder={'Code ... '}
                    value={codeInput}
                />
                <Button onPress={() => this.confirmCode()} >
                    <Text>
                        Confirm Code
                    </Text>
                </Button>
            </View>
        );
    }
    renderPhoneNumberInput() {
        const { phoneNumber } = this.state;

        return (
            <View style={{ padding: 25 }}>
                <Text>Enter phone number:</Text>
                <TextInput
                    autoFocus
                    style={{ height: 40, marginTop: 15, marginBottom: 15 }}
                    onChangeText={value => this.setState({ phoneNumber: value })}
                    placeholder={'Phone number ... '}
                    value={phoneNumber}
                />
                <Button onPress={() => this.PhoneSignIn()} >
                    <Text>
                        SignIn
                    </Text>
                </Button>
            </View>
        );
    }

    renderMessage() {
        const { message } = this.state;

        if (!message.length) return null;

        return (
            <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
        );
    }


    render() {
        const nav = this.props.navigation;
        const { user, confirmResult } = this.state;
        return (
            <SignTemplate navigation={nav}>
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })}>
                    <View style={{ marginTop: 25, padding: 25, backgroundColor: 'white' }}>
                        {!user && !confirmResult && this.renderPhoneNumberInput()}

                        {this.renderMessage()}

                        {!user && confirmResult && this.renderVerificationCodeInput()}
                    </View>
                </Modal>
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
