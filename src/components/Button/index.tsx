import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    isLoading: boolean;
}
export function Button({ title, isLoading, ...rest }: ButtonProps) {

    const theme = useTheme();

    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={[styles.container, { backgroundColor: theme.colors.primary }]}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator color={theme.colors.secondary} />
            ) : (
                <Text variant='bodyMedium'>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}