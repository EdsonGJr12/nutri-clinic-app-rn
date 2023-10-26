import { useAuth } from "@/hooks/useAuth";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { DiaSemanaRefeicoesDTO } from "@/dtos/DiaSemanaRefeicoesDTO";
import { DiaSemanaDetalheItem } from "./DiaSemanaDetalheItem";

export function DiaSemanaDetalhe() {

    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    const [diasSemana, setDiasSemana] = useState<DiaSemanaRefeicoesDTO[]>([]);

    async function pesquisarDiasSemana() {
        setIsLoading(true);
        try {
            const response = await api.get(`/planos-alimentares/${user?.idPlanoAlimentar}`);
            setDiasSemana(response.data);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        pesquisarDiasSemana();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.paginationContainer}>

            </View>

            <View style={styles.content}>
                <FlatList
                    data={diasSemana}
                    keyExtractor={item => String(item.idDiaSemana)}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <DiaSemanaDetalheItem
                            refeicoes={item.refeicoes}
                        />
                    )}
                />
            </View>
        </View>
    )
}