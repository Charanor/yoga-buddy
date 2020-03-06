import { DynamicStyleSheet } from "react-native-dark-mode";
import Colors from "./colors";

const PosesTabStyles = new DynamicStyleSheet({
    findPosesButton: {
        backgroundColor: Colors.secondary.default,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

        borderRadius: 15,
        height: 60,
        marginBottom: 30,

        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    findPoseButtonIcon: {
        fontSize: 28,
        marginRight: 10,
        color: Colors.secondary.text
    },
    findPosesButtonText: {
        fontSize: 18,
        color: Colors.secondary.text
    },
});

export default PosesTabStyles;