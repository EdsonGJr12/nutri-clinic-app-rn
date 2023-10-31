import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Text } from "@/components/Text";
import { RefeicaoDTO } from "@/dtos/DiaSemanaRefeicoesDTO";
import { useTheme } from "react-native-paper";

import { Feather } from '@expo/vector-icons';
import { useState } from "react";

interface DiaSemanaDetalheItemProps {
    refeicoes: RefeicaoDTO[];
}

export function DiaSemanaDetalheItem({ refeicoes }: DiaSemanaDetalheItemProps) {

    const theme = useTheme();

    const [refeicoesShowing, setRefeicoesShowing] = useState<number[]>([]);

    function handleToggleShowDetail(idRefeicao: number) {
        if (refeicoesShowing.includes(idRefeicao)) {
            const updatedRefeicoesShowing = refeicoesShowing.filter(idRefeicaoShowing => idRefeicaoShowing !== idRefeicao);
            setRefeicoesShowing(updatedRefeicoesShowing);
        } else {
            setRefeicoesShowing([...refeicoesShowing, idRefeicao]);
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.refeicoes}>
                {refeicoes.map(refeicao => (
                    <View key={refeicao.id}>
                        <TouchableOpacity
                            onPress={() => handleToggleShowDetail(refeicao.id)}
                            style={[styles.refeicaoItem, { backgroundColor: theme.colors.background }]}
                        >
                            <View style={styles.content}>
                                <View style={styles.refeicaoItemWrapper}>
                                    <View>
                                        <Feather name="clock" size={24} color="black" />
                                    </View>

                                    <View>
                                        <Text>
                                            {refeicao.descricao}
                                        </Text>

                                        <Text>
                                            {refeicao.horario}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.toggleIcon}>
                                    <Feather name="chevron-down" size={24} color="black" />
                                </View>
                            </View>

                            {refeicoesShowing.includes(refeicao.id) && (
                                <View>
                                    <Text>
                                        Teste
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>

                    </View>
                ))}
            </View>
        </View>
    )
}