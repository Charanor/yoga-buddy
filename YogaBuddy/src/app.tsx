import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./tabs";

function App() {
    return (
        <NavigationContainer>
            <MainTabs />
        </NavigationContainer>
    );
}
export default App;