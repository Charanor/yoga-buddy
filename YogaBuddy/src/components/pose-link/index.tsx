import React from "react";
import { ImageSourcePropType, ViewStyle } from "react-native";

import SmallPoseLink from "./small";
import LargePoseLink from "./large";
import PoseLinkCollection from "./collection";

type PoseLinkDelegateProps = {
    small?: boolean;
    name: string;
    description: string;
    imageURL: ImageSourcePropType;
    style?: ViewStyle;
};

function PoseLink({ small, ...props }: PoseLinkDelegateProps) {
    return small ? <SmallPoseLink {...props} /> : <LargePoseLink {...props} />;
}

export default PoseLink;
export { PoseLinkCollection, PoseLinkDelegateProps };