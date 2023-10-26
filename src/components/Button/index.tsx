import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'react-native-paper';
import { styles } from './styles';
import { Text } from '../Text';

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
                <Text variant='smallButton'>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}