import React from "react";
import { View, Text } from "react-native";
import { PoseLinkCollection } from "../components/pose-link";
import WithTitle from "../components/with-title";
import { translate as $ } from "../i18n";

function Home() {
    return (
        <View style={{ flex: 1, padding: 7, justifyContent: "space-evenly" }}>
            <WithTitle title={$("quote-of-the-day")}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </WithTitle>
            <PoseLinkCollection
                title={$("pose-link.pose-of-the-day")}
                poseLinks={[{
                    name: $("test.name"),
                    description: $("test.description"),
                    imageURL: require("../../assets/google.jpg")
                }]}
            />
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