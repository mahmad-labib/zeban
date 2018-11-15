import React from 'react';
import { createBottomTabNavigator, addNavigationHelpers } from 'react-navigation';
import { Icon } from 'native-base';
import { Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';
import Driver from '../screens/Account/Driver';
import User from '../screens/Account/User';
import Offers from '../screens/App/offers';
import Talabaty from '../screens/App/talbaty';
import OrderNow from '../screens/App/orderNow';
import Text2 from '../components/Text2';
import UserIcon from '../png/user-btn.png';
import Ring from '../png/ring.png';
import Package from '../png/package.png';
import Shopping from '../png/shopping-cart.png';


const AppTabNavigator = createBottomTabNavigator(
    {
        Driver,
        Offers,
        Talabaty,
        OrderNow,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Driver') {
                    iconName = UserIcon;
                } else if (routeName === 'Offers') {
                    iconName = Ring;
                }
                else if (routeName === 'Talabaty') {
                    iconName = Package;
                }
                else if (routeName === 'OrderNow') {
                    iconName = Shopping;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // <Icon name={iconName} type="Ionicons" size={23} color={tintColor} />;
                return (
                    <Icon size={23} color={tintColor} >
                        {/* <Image source={iconName} /> */}
                        <AutoHeightImage
                            width={100}
                            source={iconName}
                            style={{ alignSelf: 'center' }}
                        />
                    </Icon>
                );
            },
            tabBarLabel: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Driver':
                        return <Text2 style={{ fontSize: 15, alignSelf: 'center', color: '#707070' }} text="حسابي" />;
                        break;
                    case 'Offers':
                        return <Text2 style={{ fontSize: 15, alignSelf: 'center', color: '#707070' }} text="التنبيهات" />;
                        break;
                    case 'Talabaty':
                        return <Text2 style={{ fontSize: 15, alignSelf: 'center', color: '#707070' }} text="طلباتي" />;
                        break;
                    case 'OrderNow':
                        return <Text2 style={{ fontSize: 15, alignSelf: 'center', color: '#707070' }} text="متاجر" />;
                        break;
                    default:

                }
            }
        }),
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true,

        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                width: 100,
            },
            style: {
                backgroundColor: '#ededed',
                height: 70
            },
        },

        initialRouteName: 'Driver',
    }
);

export default AppTabNavigator;
