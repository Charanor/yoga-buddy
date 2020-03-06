import React from "react";
import { Text, ImageSourcePropType, TouchableOpacity, Image, View, ViewStyle } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { DynamicPoseLinkStyles } from "../../styles";

type LargePoseLinkProps = {
    name: string;
    description: string;
    imageURL: ImageSourcePropType;
    style?: ViewStyle;
};

function LargePoseLink({ name, description, imageURL, style }: LargePoseLinkProps) {
    const PoseLinkStyles = useDynamicStyleSheet(DynamicPoseLinkStyles);

    return (
        <TouchableOpacity style={[PoseLinkStyles.wrapper, style]}>
            <Image source={imageURL} style={PoseLinkStyles.image} resizeMode="contain" />
            <View style={PoseLinkStyles.nameDescWrapper}>
                <Text style={PoseLinkStyles.nameText}>{name}</Text>
                <Text style={PoseLinkStyles.descriptionText} numberOfLines={2}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default LargePoseLink;
export { LargePoseLinkProps };