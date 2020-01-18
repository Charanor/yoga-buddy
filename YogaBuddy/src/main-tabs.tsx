import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";

import TabBar from "./components/tab-bar";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { DynamicTabBarStyles } from "./styles";

enum Routes {
    Home = "Home",
    Discover = "Discover",
    Poses = "Poses",
    Profile = "Profile",
    Settings = "Settings"
}

function Empty() {
    return null;
}

function TabIcon({ tintColor, ...props }: { name: string, tintColor: string | undefined }) {
    const TabBarStyles = useDynamicStyleSheet(DynamicTabBarStyles);
    return <Icon {...props} color={tintColor} style={TabBarStyles.tabIcon} />
}

function TabIonIcon({ tintColor, ...props }: { name: string, tintColor: string | undefined }) {
    const TabBarStyles = useDynamicStyleSheet(DynamicTabBarStyles);
    return <IonIcon {...props} color={tintColor} style={TabBarStyles.tabIcon} />

}

const MainTabs = createBottomTabNavigator(
    {
        [Routes.Home]: {
            screen: Empty,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <TabIcon name="home" {...{ tintColor }} />
            }
        },
        [Routes.Discover]: {
            screen: Empty,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <TabIcon name="map-marker" {...{ tintColor }} />
            }
        },
        [Routes.Poses]: {
            screen: Empty,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <TabIonIcon name="ios-body" {...{ tintColor }} />
            }
        },
        [Routes.Profile]: {
            screen: Empty,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <TabIcon name="account" {...{ tintColor }} />
            }
        },
        [Routes.Settings]: {
            screen: Empty,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <TabIcon name="settings" {...{ tintColor }} />
            }
        },
    },
    {
        tabBarComponent: TabBar,
        tabBarOptions: {
            activeTintColor: "green",
            inactiveTintColor: "gray"
        }
    }
);

export default MainTabs;
export { Routes };