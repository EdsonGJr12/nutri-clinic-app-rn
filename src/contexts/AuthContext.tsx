import { UserDTO } from "@/dtos/UserDTO";
import { api } from "@/services/api";
import { storageAuthToken } from "@/storage/storageAuth";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
    signIn: (login: string, senha: string) => Promise<void>;
    signOut: () => void;
    isAuthenticated: boolean;
    user: UserDTO | undefined;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [user, setUser] = useState<UserDTO>();

    const isAuthenticated = !!user;

    async function signIn(login: string, senha: string) {

        console.log(login, senha);

        try {
            const response = await api.post("/auth", { login, senha });
            const {
                id,
                token,
                nomeUsuario,
                perfilUsuario,
                idPaciente,
                idPlanoAlimentar
            } = response.data;

            await storageAuthToken({ token, nomeUsuario, perfilUsuario, idPaciente });

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser({ id, nome: nomeUsuario, idPlanoAlimentar });
        } catch (error) {
            throw error;
        }
    }

    async function signOut() {
        try {

        } finally {

        }
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
}