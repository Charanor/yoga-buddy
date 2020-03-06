import React from "react";
import { View } from "react-native";
import PoseLink from "../components/pose-link";
import { translate as $ } from "../i18n";

function Home() {
    return (
        <View style={{ flex: 1, padding: 7 }}>
            <PoseLink
                name={$("test.name")}
                description={$("test.description")}
                imageURL={require("../../assets/google.jpg")}
                style={{
                    alignSelf: "center"
                }}
            />
        </View>
    );
}

export default Home;