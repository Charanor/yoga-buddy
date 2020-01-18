import { DynamicStyleSheet } from "react-native-dark-mode";

const DynamicTabBarStyles = new DynamicStyleSheet({
    tabBar: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        borderTopWidth: 2,
        borderColor: "gray"
    },
    tab: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 5
    },
    bigTabSpacer: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    bigTab: {
        flex: 1,
        position: "absolute",
        width: 85,
        height: 85,
        bottom: 5,
        backgroundColor: "white",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bigTabInner: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    tabIcon: {
        fontSize: 24,
    },
    tabText: {
    },
    tabUnderline: {
        width: "100%",
        height: 10,
        alignSelf: "flex-end"
    }
});
export default DynamicTabBarStyles;