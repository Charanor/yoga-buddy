import React from "react";
import { View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useDynamicStyleSheet } from "react-native-dark-mode";

import { DynamicTabBarStyles } from "../../styles";
import Tab from "./tab";

function TabBar({
    navigation,
    state: { routes, index: stateIndex },
    descriptors,
    activeTintColor,
    inactiveTintColor
}: BottomTabBarProps) {
    const TabBarStyles = useDynamicStyleSheet(DynamicTabBarStyles);

    function renderTabs() {
        const middleIdx = Math.floor((routes.length - 1) / 2);
        return routes.map((route, index) => {
            const { options: {
                tabBarLabel,
                title,
                tabBarAccessibilityLabel,
                tabBarIcon,
            } } = descriptors[route.key];
            const labelText = tabBarLabel || title || route.name;
            const activeRoute = index == stateIndex;
            const tintColor = activeRoute ? activeTintColor : inactiveTintColor;
            const big = index == middleIdx;

            function onPress() {
                const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true
                });

                if (!activeRoute && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            }

            function onLongPress() {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            }

            return (
                <Tab
                    key={index}
                    accessibilityLabel={tabBarAccessibilityLabel}
                    icon={tabBarIcon?.({ focused: activeRoute, color: tintColor, size: 14 })}
                    {...{
                        onPress,
                        onLongPress,
                        labelText,
                        activeRoute,
                        tintColor,
                        big
                    }}
                />
            );
        });
    }

    return (
        <View style={TabBarStyles.tabBar}>
            {renderTabs()}
        </View>
    );
}

export default TabBar;