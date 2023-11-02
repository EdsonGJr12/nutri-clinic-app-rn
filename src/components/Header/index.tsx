import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Text } from "../Text";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    titulo: string;
    showBack?: boolean;
}

export function Header({ titulo, showBack = true }: HeaderProps) {

    const navigation = useNavigation();

    function handleBack() {
        console.log("aqui")
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {showBack ? (
                <TouchableOpacity
                    style={{ position: "absolute", left: 5, height: 48, width: 60, justifyContent: "center", alignItems: "center", zIndex: 5 }}
                    onPress={handleBack}
                >
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            ) : null}

            <Text variant="titleMedium" style={{ width: "100%", textAlign: "center" }}>
                {titulo}
            </Text>
        </View>
    )
}