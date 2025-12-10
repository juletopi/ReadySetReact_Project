import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background';
import TerminalButton from '../components/TerminalButton';

export default function IniciarSistema({ navigation }) {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>{'< EXEC_GAME />'}</Text>

                <View style={styles.gameContainer}>
                    <Text style={styles.placeholderText}>
                        // INICIALIZANDO AMBIENTE...
                        {'\n'}
                        // AGUARDANDO MÓDULOS DE JOGO
                    </Text>
                    <View style={styles.loadingBar}>
                        <Text style={styles.loadingText}>[||||||||||.....]</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TerminalButton
                        title="< VOLTAR"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'RobotoMono_700Bold',
        color: '#39FF14',
        fontSize: 22,
        marginBottom: 20,
        textAlign: 'center',
        textShadowColor: '#39FF14',
        textShadowRadius: 10,
        fontWeight: 'bold',
    },
    gameContainer: {
        flex: 1,
        width: '100%',
        borderWidth: 2,
        borderColor: '#1a4d2e',
        borderStyle: 'dashed',
        backgroundColor: 'rgba(0, 20, 0, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    placeholderText: {
        fontFamily: 'RobotoMono_400Regular',
        color: '#69eb40',
        fontSize: 14,
        textAlign: 'center',
        opacity: 0.8,
        marginBottom: 20,
    },
    loadingBar: {
        marginTop: 10,
    },
    loadingText: {
        fontFamily: 'RobotoMono_700Bold',
        color: '#39FF14',
        fontSize: 16,
        letterSpacing: 2,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
    },
});
