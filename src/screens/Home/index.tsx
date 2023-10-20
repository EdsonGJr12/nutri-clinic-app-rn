import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { RefeicaoPreview } from "@/components/RefeicaoPreview";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "@/routes/app.routes";
import { Avatar, Text, useTheme } from "react-native-paper";

import PagerView from 'react-native-pager-view';


export function Home() {
    const theme = useTheme();
    const navigation = useNavigation<AppRoutesProps>();

    function handleDetalhesPlanoAlimentar() {
        navigation.navigate("PlanoAlimentar", { id: 2 })
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={[styles.headerContainer, { backgroundColor: theme.colors.primary }]}>
                <TouchableOpacity
                    style={styles.avatar}
                >
                    <Avatar.Image

                        size={60}
                        source={{ uri: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" }}
                    />
                </TouchableOpacity>

                <Text variant="headlineMedium" style={[styles.headerWelcome, { color: theme.colors.secondary }]}>
                    Seja bem vindo
                </Text>

                <Text variant="headlineMedium" style={[styles.headerUserName, { color: theme.colors.secondary }]}>
                    João
                </Text>
            </View>

            <PagerView style={{ flex: 1, backgroundColor: "red" }} initialPage={1}>
                <View key="1" style={{ justifyContent: "center", alignItems: "center", backgroundColor: "blue" }}>
                    <Text>First page</Text>
                    <Text>Swipe ➡️</Text>
                </View>

                <View key="2">
                    <Text>Second page</Text>
                </View>
                <View key="3">
                    <Text>Third page</Text>
                </View>
            </PagerView>

            {/* <RefeicaoPreview /> */}
        </View>
    )
}