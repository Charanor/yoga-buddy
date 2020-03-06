import { DynamicStyleSheet } from "react-native-dark-mode";
import Colors from "./colors";

const DynamicWithTitleStyles = new DynamicStyleSheet({
    title: {
        fontSize: 20,
        color: Colors.primary.text,
        marginBottom: 5
    },
});

export default DynamicWithTitleStyles;