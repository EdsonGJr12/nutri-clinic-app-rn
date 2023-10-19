import { Login } from '@/screens/Login';
import theme from '@/styles/theme';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Login />
    </PaperProvider>
  );
}


