import React from "react";
import { ViewStyle, ScrollView, View, Text } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import PoseLink, { PoseLinkDelegateProps } from "./index";
import { DynamicPoseLinkStyles } from "../../styles";
import WithTitle from "../with-title";

type PoseLinkCollectionProps = {
    title: string;
    poseLinks: PoseLinkDelegateProps[];
    style?: ViewStyle;
    footerComponent?: React.ReactNode;
};

function PoseLinkCollection({ title, poseLinks, style, footerComponent }: PoseLinkCollectionProps) {
    const PoseLinkStyles = useDynamicStyleSheet(DynamicPoseLinkStyles);

    function renderPoseLink(props: PoseLinkDelegateProps, index: number) {
        return (
            <PoseLink
                key={index}
                style={{ ...props.style, marginRight: 10 }}
                {...props}
            />
        );
    }

    const noPoses = poseLinks.length <= 0;
    const singlePose = poseLinks.length == 1;
    const padWrapper = noPoses || singlePose;

    return (
        <WithTitle
            title={title}
            style={[padWrapper && PoseLinkStyles.collectionPadding, style]}
        >
            {
                noPoses ?
                    null
                    :
                    (
                        singlePose ?
                            renderPoseLink(poseLinks[0], 0)
                            :
                            (
                                <ScrollView horizontal contentContainerStyle={PoseLinkStyles.collectionPadding}>
                                    {poseLinks.map(renderPoseLink)}
                                    {footerComponent}
                                </ScrollView>
                            )
                    )
            }
        </WithTitle>
    );
}

export default PoseLinkCollection;