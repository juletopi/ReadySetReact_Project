import React from 'react';
import { useFonts, RobotoMono_400Regular, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import IniciarSistema from './screens/IniciarSistema';
import DadosAppScreen from './screens/DadosAppScreen';
// import GameManager from './src/game/GameManager';

const Stack = createNativeStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        RobotoMono_400Regular,
        RobotoMono_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                <ActivityIndicator size="large" color="#39FF14" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: '< SYSTEM_ROOT />' }} />
                <Stack.Screen name="IniciarSistema" component={IniciarSistema} options={{ headerShown: false, title: '< EXEC_GAME />' }} />
                <Stack.Screen name="DadosApp" component={DadosAppScreen} options={{ headerShown: false, title: '< APP_DATA />' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
