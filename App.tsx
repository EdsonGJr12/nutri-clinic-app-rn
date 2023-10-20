import { AuthContextProvider } from '@/contexts/AuthContext';
import { Routes } from '@/routes';
import theme from '@/styles/theme';
import { toastConfig } from '@/styles/toastConfig';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>

      <Toast config={toastConfig} />
    </PaperProvider>
  );
}


