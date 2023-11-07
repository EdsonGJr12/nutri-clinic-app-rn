import { ActivityIndicator, Dimensions, FlatList, Image, StatusBar, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "@/routes/app.routes";
import { Avatar, useTheme } from "react-native-paper";

import { Text } from "@/components/Text";
import { DiaSemanaItem } from "./DiaSemanaItem";
import { ITEM_WIDTH, MARGIN_ITEM, RECUO } from "./swiperConfig";
import { useEffect, useState } from "react";
import { DiaSemanaRefeicoesDTO } from "@/dtos/DiaSemanaRefeicoesDTO";
import { api } from "@/services/api";
import { useAuth } from "@/hooks/useAuth";
import Toast from "react-native-toast-message";

export function Home() {
    const theme = useTheme();
    const navigation = useNavigation<AppRoutesProps>();
    const [diasSemana, setDiasSemana] = useState<DiaSemanaRefeicoesDTO[]>([]);
    const { user, updateUser } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);

    const offsets = [...Array(diasSemana.length)].map((__, index) => MARGIN_ITEM + (index * ITEM_WIDTH) + (index * MARGIN_ITEM * 2) - RECUO);

    function handleDetalhesPlanoAlimentar() {
        navigation.navigate("PlanoAlimentar", { id: 2 })
    }

    async function pesquisarDiasSemana() {
        setIsLoading(true);
        try {
            const response = await api.get(`/planos-alimentares/${user?.idPlanoAlimentar}`);
            setDiasSemana(response.data);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSelectAvatar() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.canceled) {
            return;
        }

        const photoUri = result.assets[0].uri;
        const photoType = result.assets[0].type;


        const fileExtension = photoUri.split(".").pop();

        const photoFile = {
            name: `${user?.id}.${fileExtension}`.toLowerCase(),
            uri: photoUri,
            type: `${photoType}/${fileExtension}`
        } as any;

        const userPhotoUploadForm = new FormData();
        userPhotoUploadForm.append("avatar", photoFile);

        try {
            setIsLoadingAvatar(true);
            const response = await api.put("/auth/avatar", userPhotoUploadForm, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            updateUser({
                ...user,
                avatar: response.data.avatar
            });

            Toast.show({
                text1: "Sucesso",
                text2: "Foto alterado com sucesso"
            });
        } finally {
            setIsLoadingAvatar(false);
        }
    }

    useEffect(() => {
        pesquisarDiasSemana();
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar
                backgroundColor={theme.colors.primary}
                translucent
            />

            <View style={[styles.headerContainer]}>
                <View style={[styles.headerContent, { backgroundColor: theme.colors.primary }]}>
                    {isLoadingAvatar ? (
                        <View style={styles.avatar}>
                            <ActivityIndicator
                                size="small"
                                color={theme.colors.secondary}
                                style={{ width: 60, height: 60 }}
                            />
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.avatar}
                            onPress={handleSelectAvatar}
                        >
                            <Avatar.Image
                                size={60}
                                source={{
                                    uri: user.avatar ? `${api.defaults.baseURL}/avatar/${user.avatar}?${new Date()}` : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
                                }}

                            />
                        </TouchableOpacity>
                    )}

                    <Text variant="headlineMedium" style={[styles.headerWelcome, { color: theme.colors.secondary }]}>
                        Seja bem vindo
                    </Text>

                    <Text variant="headlineMedium" style={[styles.headerUserName, { color: theme.colors.secondary }]}>
                        João
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator color={theme.colors.primary} size="large" />
                    </View>
                ) : (
                    <FlatList
                        data={diasSemana}
                        horizontal
                        snapToOffsets={offsets}
                        disableIntervalMomentum
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => String(item.diaSemana)}
                        renderItem={({ item }) => (
                            <DiaSemanaItem
                                diaSemana={item.diaSemana}
                                descricaoDiaSemana={item.descricaoDiaSemana}
                                refeicoes={item.refeicoes}
                            />
                        )}
                    />
                )}
            </View>
        </View>
    )
}