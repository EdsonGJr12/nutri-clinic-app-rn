import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Text } from "@/components/Text";
import { RefeicaoDTO } from "@/dtos/DiaSemanaRefeicoesDTO";
import { useTheme } from "react-native-paper";

import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Route } from "react-native-tab-view";
interface DiaSemanaDetalheItemProps {
    route: Route;
}

export function DiaSemanaDetalheItem({ ...rest }: DiaSemanaDetalheItemProps) {

    const idPlanoDiaSemana = rest.route.key;
    const [refeicoes, setRefeicoes] = useState<RefeicaoDTO[]>([])

    const [isLoading, setIsLoading] = useState(true);

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

    async function carregarRefeicoes() {
        try {
            const response = await api.get<RefeicaoDTO[]>(`/planos-alimentares-dia-semana/${idPlanoDiaSemana}/refeicoes`);
            setRefeicoes(response.data);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        carregarRefeicoes();
    }, [idPlanoDiaSemana]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
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