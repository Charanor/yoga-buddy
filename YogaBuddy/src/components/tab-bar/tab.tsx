import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { DynamicTabBarStyles } from "../../styles";

type TabProps = {
    activeRoute: boolean;
    onPress: () => void;
    onLongPress: () => void;
    accessibilityLabel?: string;
    icon: React.ReactNode;
    tintColor?: string | { light: string; dark: string };
    labelText?: string | ((scene: {
        focused: boolean;
        tintColor?: string | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    }) => string | undefined);
    big?: boolean;
};

function Tab({ activeRoute, icon, labelText, tintColor, big, ...props }: TabProps) {
    const TabBarStyles = useDynamicStyleSheet(DynamicTabBarStyles);

    if (big) {
        return (
            <View style={TabBarStyles.bigTabSpacer}>
                <View style={[TabBarStyles.bigTab, { borderColor: tintColor }]}>
                    <TouchableOpacity style={TabBarStyles.bigTabInner} {...props}>
                        {icon}
                        <Text style={[TabBarStyles.tabText, { color: tintColor }]}>{labelText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <TouchableOpacity style={TabBarStyles.tab} {...props}>
            {icon}
            <Text style={[TabBarStyles.tabText, { color: tintColor }]}>{labelText}</Text>
            {activeRoute && <View style={[TabBarStyles.tabUnderline, { backgroundColor: tintColor }]} />}
        </TouchableOpacity>
    );
}

export default Tab;