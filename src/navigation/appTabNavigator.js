import React from 'react';
import { createTabNavigator } from 'react-navigation';
// import HomeScreen from '../screens/app/Home';
import ChatScreen from '../screens/app/Chat';
import LikesScreen from '../screens/app/Likes';
import SearchScreen from '../screens/app/Search';
import { strings } from '../i18n';
import Text2 from "../components/Text2";
import Header2 from "../components/Header2";

import { Icon } from 'native-base'
const AppTabNavigator = createTabNavigator(
    {
        Search: SearchScreen,
        Likes: LikesScreen,
        Chat: ChatScreen,
        Home: HomeScreen

    },

    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Chat') {
                    iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Likes') {
                    iconName = `ios-heart${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Search') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} type="Ionicons" size={23} color={tintColor} />;
            },
            tabBarLabel: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Home':
                        return <Text2 style={{ fontSize: 11 }} text="navigator.home" />;
                        break;
                    case 'Chat':
                        return <Text2 style={{ fontSize: 11 }} text="navigator.chat" />;
                        break;
                    case 'Likes':
                        return <Text2 style={{ fontSize: 11 }} text="navigator.likes" />;
                        break;
                    case 'Search':
                        return <Text2 style={{ fontSize: 11 }} text="navigator.search" />;
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
            },
        },

        initialRouteName: 'Home',
    }
);
export default AppTabNavigator;
