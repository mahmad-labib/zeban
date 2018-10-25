import React from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation';
import reducers from '../reducers';
import AuthLoadingScreen from './loading';
import AuthStack from './authNavigation';
import DrawerNavigator from './DrawerNavigator';
import AppTabNavigator from './appTabNavigator';
import Driver from '../screens/Account/Driver';
import NavigatorService from './services/navigator';
import AccountType from '../screens/App/accountType';
import CarType from '../screens/App/CarType';
import DriverForm from '../screens/App/DriverForm';
import UserForm from '../screens/App/Form';
import ReportForm from '../screens/App/reportForm';
import Talabaty from '../screens/App/talbaty';
import Complainings from '../screens/App/complainings';
import Policy from '../screens/App/Policy';
import Invite from '../screens/App/Invite';
import OrderNow from '../screens/App/orderNow';
import TalabDetails from '../screens/App/map';
import AddTalab from '../screens/App/addTalab';
import TalabDetails1 from '../screens/App/talabDetails';
import TalabDetails2 from '../screens/App/talabDetails2';
import TalabDetails3 from '../screens/App/talabDetails3';
import User from '../screens/Account/User';
import Settings from '../screens/App/AccountSetting';
import ModalBox from '../screens/App/Modal';
import Offers from '../screens/App/offers';
import OffersLoading from '../screens/App/offersLoading';
import StartScreen from '../screens/SignForm/start';
import SignUp from '../screens/SignForm/signUp';
import TimePicker from '../screens/App/picker';
import Chat from '../screens/App/Chat';

const RootStack = createStackNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        DriverTabNavigator: {
            screen: AppTabNavigator,
        },
        Auth: {
            screen: AuthStack,
        },
        Driver: {
            screen: Driver
        },
        AccountType:
        {
            screen: AccountType,
        },
        CarType:
        {
            screen: CarType,
        },
        DriverForm:
        {
            screen: DriverForm,
        },
        UserForm:
        {
            screen: UserForm,
        },
        ReportForm:
        {
            screen: ReportForm,
        },
        Talabaty:
        {
            screen: Talabaty,
        },
        Complainings:
        {
            screen: Complainings,
        },
        Invite:
        {
            screen: Invite,
        },
        Policy:
        {
            screen: Policy,
        },
        OrderNow:
        {
            screen: OrderNow,
        },
        TalabDetails:
        {
            screen: TalabDetails,
        },
        AddTalab:
        {
            screen: AddTalab,
        },
        TalabDetails1:
        {
            screen: TalabDetails1,
        },
        TalabDetails2:
        {
            screen: TalabDetails2,
        },
        TalabDetails3:
        {
            screen: TalabDetails3,
        },
        User:
        {
            screen: User,
        },
        Settings:
        {
            screen: Settings,
        },
        ModalBox:
        {
            screen: ModalBox,
        },
        Offers:
        {
            screen: Offers,
        },
        OffersLoading:
        {
            screen: OffersLoading,
        },
        StartScreen:
        {
            screen: StartScreen,
        },
        SignUp:
        {
            screen: SignUp,
        },
        TimePicker:
        {
            screen: TimePicker,
        },
        Chat:
        {
            screen: Chat,
        },

    },
    {
        headerMode: 'none',
        initialRouteName: 'Auth',
    }
);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class RootNavigation extends React.Component {
    render() {
        return (
            <Root>
                <Provider store={store}>
                    <RootStack
                        ref={navigatorRef => {
                            NavigatorService.setContainer(navigatorRef);
                        }}
                    />
                </Provider>
            </Root>
        );
    }
}
