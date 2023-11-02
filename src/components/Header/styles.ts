import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: getStatusBarHeight(),
    }
});