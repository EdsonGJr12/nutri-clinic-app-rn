import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 50
    },
    headerContainer: {
        height: 200,
        width: "100%",
        borderBottomEndRadius: 200,
        borderBottomStartRadius: 50,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,

        justifyContent: "flex-end",
        paddingBottom: 25
    },
    headerWelcome: {
        marginLeft: 50
    },
    headerUserName: {
        marginLeft: 50,
    },
    avatar: {
        position: "absolute",
        top: 20,
        right: 15
    }
});