import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { DynamicWithTitleStyles } from "../styles";

type WithTitleProps = {
    title: string;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    children: React.ReactNode;
};

function WithTitle({ title, style, titleStyle, children }: WithTitleProps) {
    const WithTitleStyles = useDynamicStyleSheet(DynamicWithTitleStyles);

    return (
        <View style={style}>
            <Text style={[WithTitleStyles.title, titleStyle]}>{title}</Text>
            {children}
        </View>
    );
}

export default WithTitle;