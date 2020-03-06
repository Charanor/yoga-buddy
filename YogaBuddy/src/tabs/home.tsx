import React from "react";
import { View, Text } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";

import PoseLink, { PoseLinkCollection } from "../components/pose-link";
import WithTitle from "../components/with-title";
import { translate as $ } from "../i18n";
import DynamicStyles from "../styles";

function Home() {
    const Styles = useDynamicStyleSheet(DynamicStyles);

    return (
        <View style={Styles.content}>
            <WithTitle title={$("quote-of-the-day")}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </WithTitle>
            <WithTitle title={$("pose-link.pose-of-the-day")}>
                <PoseLink
                    name={$("test.name")}
                    description={$("test.description")}
                    imageURL={require("../../assets/google.jpg")}
                />
            </WithTitle>
            <PoseLinkCollection
                title={$("pose-link.recent-poses")}
                poseLinks={[
                    {
                        name: $("test.name"),
                        description: $("test.description"),
                        imageURL: require("../../assets/google.jpg"),
                        small: true
                    },
                    {
                        name: $("test.name"),
                        description: $("test.description"),
                        imageURL: require("../../assets/google.jpg"),
                        small: true
                    },
                    {
                        name: $("test.name"),
                        description: $("test.description"),
                        imageURL: require("../../assets/google.jpg"),
                        small: true
                    }
                ]}
            />
        </View>
    );
}

export default Home;