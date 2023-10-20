import { useAuth } from "@/hooks/useAuth";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <AppRoutes />
            ) : (
                <AuthRoutes />
            )}
        </NavigationContainer>
    )
}