import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Forget from '../screens/auth/Forget';

const AuthStack = createStackNavigator(
    {
        SignIn: SignIn,
        SignUp: SignUp,
        Forget:Forget
    },
    {
        headerMode: 'none',
        initialRouteName: 'SignIn',
    }
);
export default AuthStack;
