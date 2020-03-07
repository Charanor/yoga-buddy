import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Touchable from "../../components/touchable";
import WithTitle from "../../components/with-title";
import DynamicStyles, { DynamicPosesTabStyles } from "../../styles";

type FindPosesProps = {
    navigation: NavigationProp<any, any>;
};

function FindPoses({ navigation }: FindPosesProps) {
    const Styles = useDynamicStyleSheet(DynamicStyles);
    const PosesStyles = useDynamicStyleSheet(DynamicPosesTabStyles);

    const [filterOpen, setFilterOpen] = useState<boolean>(false);
    const [filterOptionsHeight, setFilterOptionsHeight] = useState<0 | "auto">(0);

    useEffect(() => {
        const unsubFocus = navigation.addListener("focus", () => navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: false }));
        const unsubBlur = navigation.addListener("blur", () => navigation.dangerouslyGetParent()?.setOptions({ tabBarVisible: true }));
        return () => {
            unsubFocus();
            unsubBlur();
        };
    }, [navigation]);

    function toggleFilterOpen() {
        const newState = !filterOpen;
        setFilterOpen(newState);
        setFilterOptionsHeight(newState ? "auto" : 0);
    }

    function getFilterIconName() {
        return filterOpen ? "chevron-up" : "chevron-down";
    }

    return (
        <View style={Styles.content}>
            <View style={PosesStyles.filterWrapper}>
                <View style={PosesStyles.filterSearchWrapper}>
                    <Icon name="magnify" style={PosesStyles.filterIcon} />
                    <TextInput placeholder="Text filter..." style={PosesStyles.filterTextInput} />
                </View>
                <View style={[PosesStyles.filterOptions, { height: filterOptionsHeight }]}>
                    <WithTitle
                        title="Good for my..."
                        titleStyle={{fontSize: 18}}
                    >
                        <Text>Back, neck, shoulders</Text>
                    </WithTitle>
                    <WithTitle
                        title="I am / have..."
                        titleStyle={{fontSize: 18}}
                    >
                        <Text>Back problems, pregnant</Text>
                    </WithTitle>
                </View>
                <Touchable onPress={toggleFilterOpen}>
                    <View style={PosesStyles.openFilterButton}>
                        <Icon name={getFilterIconName()} style={PosesStyles.openFilterIcon} />
                    </View>
                </Touchable>
            </View>
        </View>
    );
}

export default FindPoses;