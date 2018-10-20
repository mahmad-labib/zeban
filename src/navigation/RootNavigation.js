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
import UserAcc from '../screens/Account/User';
import NavigatorService from './services/navigator';

const RootStack = createStackNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: {
            screen: DrawerNavigator,
        },
        Auth: {
            screen: AuthStack,
        },
        UserAcc: {
            screen: UserAcc
        }
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
