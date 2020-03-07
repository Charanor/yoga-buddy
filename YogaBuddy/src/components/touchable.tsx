import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { TouchableNativeFeedback, TouchableHighlight } from "react-native-gesture-handler";

//@ts-ignore never undefined
const Touchable: (typeof TouchableHighlight) = Platform.select({
    android: TouchableNativeFeedback,
    ios: TouchableHighlight
});

export default TouchableOpacity;