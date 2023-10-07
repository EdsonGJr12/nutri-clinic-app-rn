import { Text, View } from "react-native";
import { styles } from "./styles";

import { RefeicaoPreview } from "@/components/RefeicaoPreview";

export function Home() {
    return (
        <View style={styles.container}>
            <Text>
                Home
            </Text>

            <RefeicaoPreview />
        </View>
    )
}