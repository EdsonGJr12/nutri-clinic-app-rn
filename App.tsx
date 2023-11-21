import { AuthContextProvider } from '@/contexts/AuthContext';
import { Routes } from '@/routes';
import theme from '@/styles/theme';
import { toastConfig } from '@/styles/toastConfig';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import * as Notifications from 'expo-notifications';


import {
  useFonts,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_700Bold
} from '@expo-google-fonts/mulish';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <Toast config={toastConfig} />
    </PaperProvider>
  );
}


