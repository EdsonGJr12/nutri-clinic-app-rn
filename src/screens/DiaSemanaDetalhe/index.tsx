import { useAuth } from "@/hooks/useAuth";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { DiaSemanaRefeicoesDTO } from "@/dtos/DiaSemanaRefeicoesDTO";
import { DiaSemanaDetalheItem } from "./DiaSemanaDetalheItem";
import { Header } from "@/components/Header";
import { useTheme } from "react-native-paper";
import { Route, SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Text } from "@/components/Text";

export function DiaSemanaDetalhe() {

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState<Route[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    const [scenes, setScenes] = useState({});

    const theme = useTheme();

    const renderScene = SceneMap(scenes);

    async function pesquisarDiasSemana() {
        setIsLoading(true);
        try {
            const response = await api.get<DiaSemanaRefeicoesDTO[]>(`/planos-alimentares/${user?.idPlanoAlimentar}`);

            const routesScene = response.data.map(dia => {
                return {
                    key: String(dia.id),
                    title: dia.descricaoDiaSemana
                }
            });
            setRoutes(routesScene);

            const scenesMap = response.data.reduce((acc, dia) => {
                return {
                    ...acc,
                    [dia.id]: DiaSemanaDetalheItem
                }
            }, {});
            setScenes(scenesMap);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        pesquisarDiasSemana();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Header titulo="Plano alimentar" />

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: theme.colors.primary }}
                        tabStyle={{ width: 110 }}
                        scrollEnabled={true}
                        style={{ backgroundColor: theme.colors.background }}
                        activeColor={theme.colors.primary}
                        inactiveColor={"black"}
                        renderLabel={({ route, focused, color }) => (
                            <Text style={{ color, margin: 8, textAlign: "center" }}>
                                {route.title}
                            </Text>
                        )}
                    />
                )}
                lazy
            />
        </View>
    )
}