import { Image, View } from "react-native";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { MaskedTextInput } from "react-native-mask-text";

export function Login() {

    const theme = useTheme();

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const { signIn } = useAuth();

    async function logar() {
        await signIn(login, senha);
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
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <Button
                title="Entrar"
                onPress={logar}
            />
        </View>
    );
}