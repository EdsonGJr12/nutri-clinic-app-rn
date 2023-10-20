import { TextInput, TextInputProps } from "react-native-paper";
import { View, TextInput as NativeTextInput } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {

}

export function Input({ render, ...rest }: InputProps) {
    return (
        <TextInput
            {...rest}
            style={styles.container}
            render={inputProps => render ? render(inputProps) : <NativeTextInput {...inputProps} />}
        />
    )
}