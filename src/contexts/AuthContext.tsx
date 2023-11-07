import { UserDTO } from "@/dtos/UserDTO";
import { api } from "@/services/api";
import { storageAuthToken } from "@/storage/storageAuth";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
    signIn: (login: string, senha: string) => Promise<void>;
    signOut: () => void;
    isAuthenticated: boolean;
    user: UserDTO;
    updateUser: (user: UserDTO) => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    const isAuthenticated = !!user?.id;

    console.log(user)

    async function signIn(login: string, senha: string) {

        try {
            const response = await api.post("/auth", { login, senha });
            const {
                id,
                token,
                nomeUsuario,
                perfilUsuario,
                idPaciente,
                idPlanoAlimentar,
                avatar
            } = response.data;

            await storageAuthToken({ token, nomeUsuario, perfilUsuario, idPaciente, avatar });

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser({ id, nome: nomeUsuario, idPlanoAlimentar, avatar });
        } catch (error) {
            throw error;
        }
    }

    async function signOut() {
        try {

        } finally {

        }
    }

    async function updateUser(user: UserDTO) {
        setUser(user);
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}