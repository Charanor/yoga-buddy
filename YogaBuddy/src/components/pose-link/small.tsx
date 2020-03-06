import React from "react";
import { Text, Image, ImageSourcePropType, TouchableOpacity, ViewStyle } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";

import { DynamicPoseLinkStyles } from "../../styles";

type SmallPoseLinkProps = {
    name: string;
    imageURL: ImageSourcePropType;
    style?: ViewStyle;
};

function SmallPoseLink({ name, imageURL, style }: SmallPoseLinkProps) {
    const PoseLinkStyles = useDynamicStyleSheet(DynamicPoseLinkStyles);
    return (
        <TouchableOpacity style={[PoseLinkStyles.wrapper, PoseLinkStyles.wrapperSmall, style]}>
            <Image source={imageURL} style={PoseLinkStyles.image} resizeMode="contain" />
            <Text style={PoseLinkStyles.nameTextSmall}>{name}</Text>
        </TouchableOpacity>
    );
}
export default SmallPoseLink;
export { SmallPoseLinkProps };