import React from "react";
import { View, Platform, TouchableNativeFeedback, TouchableHighlight, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import Icon from "react-native-vector-icons/MaterialIcons";

import WithTitle from "../../components/with-title";
import PoseLink, { PoseLinkCollection } from "../../components/pose-link";
import { translate as $ } from "../../i18n";
import DynamicStyles, { DynamicPosesTabStyles } from "../../styles";
import { PosesRoutes } from ".";

const Touchable = Platform.select({
    android: TouchableNativeFeedback,
    ios: TouchableHighlight
});

type PosesProps = {
    navigation: NavigationProp<any, any>;
};

function Poses({ navigation }: PosesProps) {
    const Styles = useDynamicStyleSheet(DynamicStyles);
    const PosesTabStyles = useDynamicStyleSheet(DynamicPosesTabStyles);

    return (
        <View style={Styles.content}>
            <View style={{ flex: 1 }}>
                <WithTitle title={$("pose-link.pose-of-the-day")}>
                    <PoseLink
                        name={$("test.name")}
                        description={$("test.description")}
                        imageURL={require("../../../assets/google.jpg")}
                    />
                </WithTitle>
                <PoseLinkCollection
                    title={$("pose-link.recent-poses")}
                    poseLinks={[
                        {
                            name: $("test.name"),
                            description: $("test.description"),
                            imageURL: require("../../../assets/google.jpg"),
                            small: true
                        },
                        {
                            name: $("test.name"),
                            description: $("test.description"),
                            imageURL: require("../../../assets/google.jpg"),
                            small: true
                        },
                        {
                            name: $("test.name"),
                            description: $("test.description"),
                            imageURL: require("../../../assets/google.jpg"),
                            small: true
                        }
                    ]}
                />
                <PoseLinkCollection
                    title={$("pose-link.favorite-poses")}
                    poseLinks={[
                        {
                            name: $("test.name"),
                            description: $("test.description"),
                            imageURL: require("../../../assets/google.jpg"),
                            small: true
                        },
                        {
                            name: $("test.name"),
                            description: $("test.description"),
                            imageURL: require("../../../assets/google.jpg"),
                            small: true
                        },
                        {
                            name: $("test.name"),
                            description: $("test.description"),
                            imageURL: require("../../../assets/google.jpg"),
                            small: true
                        }
                    ]}
                />
            </View>

            <Touchable onPress={() => navigation.navigate(PosesRoutes.FindPoses)}>
                <View style={PosesTabStyles.findPosesButton}>
                    <Icon name="search" style={PosesTabStyles.findPoseButtonIcon} />
                    <Text style={PosesTabStyles.findPosesButtonText}>{$("screens.poses.find-poses")}</Text>
                </View>
            </Touchable>
        </View>
    );
}

export default Poses;