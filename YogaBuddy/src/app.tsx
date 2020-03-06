import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./tabs";

import { init as initI18n } from "./i18n";
initI18n();

function App() {
    useEffect(initI18n, []);

    return (
        <NavigationContainer>
            <MainTabs />
        </NavigationContainer>
    );
}
export default App;