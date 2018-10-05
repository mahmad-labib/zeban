import React, { Component } from 'react';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import { View, Button, Text } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions, TouchableOpacity, ImageBackground, } from 'react-native';
import SignBox from '../../../components/common/signBox';
import SignTemplate from '../signTemplate';


import Zeban from '../../../png/zeban.png';
import Zeban1 from '../../../png/Zeban1.png';
import Sparkels from '../../../png/sparkels.png';
import City from '../../../png/city.png';

const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
    componentDidMount() {
        const signIn = async () => {
            try {
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                this.setState({ userInfo });
            } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // user cancelled the login flow
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // operation (f.e. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    // play services not available or outdated
                } else {
                    // some other error happened
                }
            }
        };
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
                    <View style={{ flex: 1, flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
                        <TouchableOpacity>
                            <SignBox icon="facebook-f" text="تسجيل الدخول بواسطه فيسبوك" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SignBox icon="google" text="تسجيل الدخول بواسطه جوجل" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SignBox icon="mobile" text="تسجيل الدخول بواسطه الجوال" />
                        </TouchableOpacity>
                    </View>
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
