import { createStackNavigator } from 'react-navigation';
import SignUp from '../screens/SignForm/signUp';
import SignIn from '../screens/SignForm/start';

const AuthStack = createStackNavigator(
    {
        SignIn,
        SignUp,
    },
    {
        headerMode: 'none',
        initialRouteName: 'SignUp',
    }
);
export default AuthStack;
