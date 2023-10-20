import { Login } from '@/screens/Login';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthProps = {
    Login: undefined;
}

export type AuthRoutesProps = NativeStackNavigationProp<AuthProps>;

const Stack = createNativeStackNavigator<AuthProps>();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}