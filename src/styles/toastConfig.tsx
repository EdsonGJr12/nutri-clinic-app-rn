import { BaseToast, ToastProps } from 'react-native-toast-message';
import theme from './theme';

export const toastConfig = {
  info: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.primary }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),
};