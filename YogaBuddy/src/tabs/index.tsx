import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";

import TabBar from "../components/tab-bar";
import { DynamicTabBarStyles } from "../styles";
import Home from "./home";
import Poses, { PosesRoutes } from "./poses";

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

const { Navigator, Screen } = createBottomTabNavigator();

function MainTabs() {
    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: "green",
                inactiveTintColor: "gray"
            }}
            tabBar={props => <TabBar {...props} />}
        >
            <Screen
                name={Routes.Home}
                component={Home}
                options={{ tabBarIcon: ({ color }) => <TabIcon name="home" tintColor={color} /> }}
            />
            <Screen
                name={Routes.Discover}
                component={Empty}
                options={{ tabBarIcon: ({ color }) => <TabIcon name="map-marker" tintColor={color} /> }}
            />
            <Screen
                name={Routes.Poses}
                component={Poses}
                options={{
                    tabBarIcon: ({ color }) => <TabIonIcon name="ios-body" tintColor={color} />,
                }}
            />
            <Screen
                name={Routes.Profile}
                component={Empty}
                options={{ tabBarIcon: ({ color }) => <TabIcon name="account" tintColor={color} /> }}
            />
            <Screen
                name={Routes.Settings}
                component={Empty}
                options={{ tabBarIcon: ({ color }) => <TabIcon name="settings" tintColor={color} /> }}
            />
        </Navigator>
    );
}

export default MainTabs;
export { Routes };