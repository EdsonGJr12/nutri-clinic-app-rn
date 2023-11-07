import { AUTH_TOKEN_STORAGE } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface StorageAuthToken {
    token: string;
    nomeUsuario: string;
    perfilUsuario: string;
    idPaciente: number;
    avatar: string;
}

export async function storageAuthToken(storage: StorageAuthToken) {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify(storage));
}

export async function deleteAuthToken() {
    await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}