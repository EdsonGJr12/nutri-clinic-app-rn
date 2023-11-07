import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Text } from "@/components/Text";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "@/routes/app.routes";
import { RefeicaoDTO } from "@/dtos/DiaSemanaRefeicoesDTO";
interface DiaSemanaItemProps {
    diaSemana: number;
    descricaoDiaSemana: string;
    refeicoes: RefeicaoDTO[];
}

export function DiaSemanaItem({ diaSemana, descricaoDiaSemana, refeicoes }: DiaSemanaItemProps) {

    const theme = useTheme();

    const navigation = useNavigation<AppRoutesProps>();


    function handleDiaSemana() {
        navigation.navigate("DiaSemanaDetalhe", { diaSemana });
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleDiaSemana}>
            <View style={[styles.content, { backgroundColor: theme.colors.primary }]}>
                <Text style={[styles.descricao, { color: theme.colors.secondary }]} variant="headlineMedium">
                    {descricaoDiaSemana}
                </Text>

                {refeicoes.map(refeicao => (
                    <View key={refeicao.id} style={styles.refeicoesContent}>
                        <Text style={[styles.refeicaoDescricao, { color: theme.colors.secondary, fontSize: 18 }]} variant="titleMedium">
                            {refeicao.descricao}
                        </Text>

                        <Text style={[styles.refeicaoHorario, { color: theme.colors.secondary, fontSize: 18 }]} variant="titleMedium">
                            {refeicao.horario}
                        </Text>
                    </View>
                ))}
            </View>
        </TouchableOpacity>
    )
}