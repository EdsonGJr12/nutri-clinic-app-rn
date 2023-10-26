import { Home } from '@/screens/Home';
import { PlanoAlimetar } from '@/screens/PlanoAlimentar';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { DiaSemanaDetalhe } from '@/screens/DiaSemanaDetalhe';


type AppProps = {
    TabNavigation: undefined;
    PlanoAlimentar: { id: number };
    DiaSemanaDetalhe: { idDiaSemana: number };
}

export type AppRoutesProps = NativeStackNavigationProp<AppProps>;

const Stack = createNativeStackNavigator<AppProps>();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="PlanoAlimentar" component={PlanoAlimetar} />
            <Stack.Screen name="DiaSemanaDetalhe" component={DiaSemanaDetalhe} />
        </Stack.Navigator>
    );
}

function TabNavigation() {

    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderRadius: 35,
                    marginHorizontal: 10,
                    height: 65,
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="home" size={28} color={color} />
                }}
            />

            <Tab.Screen
                name='Home2'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="calendar" size={28} color={color} />
                }}
            />

            <Tab.Screen
                name='Home3'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={30} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}