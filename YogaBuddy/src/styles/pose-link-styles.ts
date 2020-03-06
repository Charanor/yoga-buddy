import { DynamicStyleSheet } from "react-native-dark-mode";
import Colors from "./colors";

const DynamicPoseLinkStyles = new DynamicStyleSheet({
    wrapper: {
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        width: "80%",
        backgroundColor: Colors.primary.light,
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 5,

        // Shadows
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    image: {
        flex: 1,
        width: "30%",
        height: "100%",
    },
    nameText: {
        fontSize: 14,
    },
    nameTextLarge: {
        flex: 2,
        fontSize: 28
    },
    descriptionText: {
        flex: 1,
        fontSize: 14,
    },
    nameDescWrapper: {
        flex: 2,
    }
});


export default DynamicPoseLinkStyles;