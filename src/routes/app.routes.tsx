import { Home } from '@/screens/Home';
import { Login } from '@/screens/Login';
import { PlanoAlimetar } from '@/screens/PlanoAlimentar';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppProps = {
    Home: undefined;
    PlanoAlimentar: { id: number };
}

export type AppRoutesProps = NativeStackNavigationProp<AppProps>;

const Stack = createNativeStackNavigator<AppProps>();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PlanoAlimentar" component={PlanoAlimetar} />
        </Stack.Navigator>
    );
}