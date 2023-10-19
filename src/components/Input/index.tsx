import { TextInput, TextInputProps } from "react-native-paper";
import { styles } from "./styles";

interface InputProps extends TextInputProps {

}

export function Input({ render, ...rest }: InputProps) {
    return (
        <TextInput
            style={styles.container}
            {...rest}
            render={inputProps => render?.(inputProps)}
        />
    )
}