import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PosesTab from "./main-tab";
import FindPoses from "./find-poses";
import { translate as $ } from "../../i18n";

enum PosesRoutes {
    MainTab = "Poses_MainTab",
    FindPoses = "Poses_FindPoses"
}

const { Navigator, Screen } = createStackNavigator();

function Poses() {
    return (
        <Navigator mode="modal">
            <Screen
                name={PosesRoutes.MainTab}
                component={PosesTab}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name={PosesRoutes.FindPoses}
                component={FindPoses}
                options={{
                    headerTitle: $("screens.poses.find-poses"),
                }}
            />
        </Navigator>
    );
}

export default Poses;
export { PosesRoutes };