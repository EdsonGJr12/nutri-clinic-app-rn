import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    content: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    refeicoes: {
        paddingHorizontal: 30
    },

    refeicaoItem: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",

        marginBottom: 15,

        padding: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        borderRadius: 15,

    },
    refeicaoItemWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    toggleIcon: {
        alignItems: "center",
        justifyContent: "center",
    }
});