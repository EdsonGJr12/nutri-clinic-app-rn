import { StyleSheet } from "react-native";
import { ITEM_WIDTH, MARGIN_ITEM } from "../swiperConfig";

export const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        justifyContent: "flex-start",
        alignItems: "center",

        marginHorizontal: MARGIN_ITEM,
    },
    content: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 20,
        borderRadius: 10

    },
    descricao: {
        textAlign: "center",
        marginBottom: 25
    },
    refeicoesContent: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    refeicaoDescricao: {
        marginBottom: 15
    },
    refeicaoHorario: {

    }
});