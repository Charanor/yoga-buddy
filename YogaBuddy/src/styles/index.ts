import { DynamicStyleSheet } from "react-native-dark-mode";

import DynamicTabBarStyles from "./tab-bar-styles";
import DynamicPoseLinkStyles from "./pose-link-styles";
import DynamicWithTitleStyles from "./with-title-styles";
import DynamicPosesTabStyles from "./poses-tab-styles";
import Colors from "./colors";

const DynamicStyles = new DynamicStyleSheet({
    content: {
        flex: 1,
        padding: 7,
    }
});

export default DynamicStyles;
export {
    DynamicTabBarStyles,
    DynamicPoseLinkStyles,
    DynamicWithTitleStyles,
    DynamicPosesTabStyles,
    Colors
};