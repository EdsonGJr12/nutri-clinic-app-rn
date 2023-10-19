import { api } from "@/services/api";
import { createContext, ReactNode } from "react";

export type AuthContextDataProps = {
    signIn: (login: string, senha: string) => Promise<void>;
    signOut: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {


    async function signIn(login: string, senha: string) {
        try {
            await api.post("/auth", { login, senha })
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
        <AuthContext.Provider value={{ signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}