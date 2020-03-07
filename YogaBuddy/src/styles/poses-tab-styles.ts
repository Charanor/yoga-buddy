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
    showAllPosesButton: {
        backgroundColor: Colors.primary.light,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 80,
        borderRadius: 50,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    filterWrapper: {
    },
    filterSearchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: Colors.primary.light,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 25,
        zIndex: 1
    },
    filterOptions: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "column",
        overflow: "hidden",
        paddingHorizontal: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        zIndex: 0
    },
    filterIcon: {
        fontSize: 34,
    },
    filterTextInput: {
        flex: 1,
        fontSize: 18,
    },
    openFilterButton: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.secondary.default,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    openFilterIcon: {
        fontSize: 22,
        color: Colors.secondary.text
    },
    listSeparator: {
        height: 10
    },
    list: {
        marginTop: 10,
    },
    listContent: {
        alignItems: "center",
        paddingBottom: 10
    }
});

export default PosesTabStyles;