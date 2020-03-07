import React from "react";
import { View, Platform, TouchableNativeFeedback, TouchableHighlight, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import WithTitle from "../../components/with-title";
import PoseLink, { PoseLinkCollection } from "../../components/pose-link";
import Touchable from "../../components/touchable";

import DynamicStyles, { DynamicPosesTabStyles, Colors } from "../../styles";
import { translate as $ } from "../../i18n";
import { PosesRoutes } from ".";

type PosesProps = {
    navigation: NavigationProp<any, any>;
};

function Poses({ navigation }: PosesProps) {
    const Styles = useDynamicStyleSheet(DynamicStyles);
    const PosesTabStyles = useDynamicStyleSheet(DynamicPosesTabStyles);

    function showAllFavorites() {

    }

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
                    footerComponent={
                        <Touchable onPress={showAllFavorites}>
                            <View style={PosesTabStyles.showAllPosesButton}>
                                <Icon name="chevron-double-right" style={{ fontSize: 34 }} />
                            </View>
                        </Touchable>
                    }
                />
            </View>

            <Touchable onPress={() => navigation.navigate(PosesRoutes.FindPoses)}>
                <View style={PosesTabStyles.findPosesButton}>
                    <Icon name="magnify" style={PosesTabStyles.findPoseButtonIcon} />
                    <Text style={PosesTabStyles.findPosesButtonText}>{$("screens.poses.find-poses")}</Text>
                </View>
            </Touchable>
        </View>
    );
}

export default Poses;