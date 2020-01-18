import React from "react";
import { View } from "react-native";
import { NavigationRoute } from "react-navigation";
import { BottomTabBarProps } from "react-navigation-tabs";
import { useDynamicStyleSheet } from "react-native-dark-mode";

import { DynamicTabBarStyles } from "../../styles";
import Tab from "./tab";

function TabBar({
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    renderIcon,
    getLabelText,
    navigation: { state: { routes, index: activeRouteIndex } },
    activeTintColor,
    inactiveTintColor
}: BottomTabBarProps) {
    const TabBarStyles = useDynamicStyleSheet(DynamicTabBarStyles);

    function renderTabs() {
        const middleIdx = Math.floor((routes.length - 1) / 2);
        return routes.map((route, index) => {
            const activeRoute = index == activeRouteIndex;
            const tintColor = activeRoute ? activeTintColor : inactiveTintColor;
            const big = index == middleIdx;
            return (
                <Tab
                    key={index}
                    onPress={() => onTabPress({ route })}
                    onLongPress={() => onTabLongPress({ route })}
                    accessibilityLabel={getAccessibilityLabel({ route })}
                    icon={renderIcon({ route, focused: activeRoute, tintColor })}
                    labelText={getLabelText({ route })}
                    {...{
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