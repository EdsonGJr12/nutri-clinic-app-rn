import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}
export function Button({ title, ...rest }: ButtonProps) {

    const theme = useTheme();

    return (
        <TouchableOpacity activeOpacity={.7} style={[styles.container, { backgroundColor: theme.colors.primary }]}>
            <Text variant='bodyMedium'>
                {title}
            </Text>
        </TouchableOpacity>
    )
}