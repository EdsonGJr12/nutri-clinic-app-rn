import { Image, View } from "react-native";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { MaskedTextInput } from "react-native-mask-text";
import Toast from 'react-native-toast-message';
import { AppError } from "@/utils/AppError";


export function Login() {

    const theme = useTheme();

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const { signIn, signOut } = useAuth();

    async function logar() {
        try {
            setIsLoading(true);
            const loginSemMascara = login.replaceAll(".", "").replaceAll("-", "")
            await signIn(loginSemMascara, senha);
        } catch (error) {
            const isAppError = error instanceof AppError;

            const message = isAppError ? error.detail : "Não foi possível entrar. Tente novamente mais tarde";

            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: message
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Image
                source={require("../../assets/images/logo.png")}
                style={{
                    width: 150,
                    height: 100
                }}
            />

            <View style={styles.inputContent}>
                <Input
                    label="Login"
                    style={styles.input}
                    onChangeText={setLogin}
                    value={login}
                    keyboardType="number-pad"
                    render={props => (
                        <MaskedTextInput
                            {...props}
                            mask="999.999.999-99"
                            onChangeText={(text) => props.onChangeText?.(text)}
                        />
                    )}
                />

                <Input
                    label="Senha"
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    autoCapitalize="none"
                />
            </View>

            <Button
                title="Entrar"
                onPress={logar}
                isLoading={isLoading}
            />
        </View>
    );
}