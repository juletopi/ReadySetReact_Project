import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import Background from '../components/Background'; 
import TerminalButton from '../components/TerminalButton';
import VisualResult from './components/VisualResult';
import GameTerminal from './components/GameTerminal';
import { levels } from './data/levels';

export default function GameManager({ navigation }) {
    const [levelIndex, setLevelIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const currentLevel = levels[levelIndex];

    useEffect(() => {
        if (userInput.trim().toLowerCase() === currentLevel.correctAnswer.toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }, [userInput, currentLevel]);

    const handleNextLevel = () => {
        if (levelIndex < levels.length - 1) {
            setLevelIndex(prev => prev + 1);
            setUserInput('');
            setIsCorrect(false);
        } else {
            Alert.alert("SISTEMA RESTAURADO", "Você completou todos os módulos!");
            navigation.goBack();
        }
    };

    return (
        <Background>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    
                    <View style={styles.header}>
                        <Text style={styles.levelIndicator}>
                            LEVEL {levelIndex + 1}/{levels.length} :: {currentLevel.title}
                        </Text>
                    </View>

                    <VisualResult type={currentLevel.type} isCorrect={isCorrect} />

                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            ༝ {currentLevel.question}
                        </Text>
                        <Text style={styles.hintText}>
                            // DICA: {currentLevel.hint}
                        </Text>
                    </View>

                    <GameTerminal 
                        prefix={currentLevel.codePrefix}
                        suffix={currentLevel.codeSuffix}
                        value={userInput}
                        onChangeText={setUserInput}
                        isCorrect={isCorrect}
                    />

                    <View style={styles.footer}>
                        {isCorrect ? (
                            <TerminalButton 
                                title={levelIndex === levels.length - 1 ? "FINALIZAR_SISTEMA" : "PRÓXIMO_NÍVEL >>"} 
                                onPress={handleNextLevel} 
                            />
                        ) : (
                            <TerminalButton 
                                title="< VOLTAR" 
                                onPress={() => navigation.goBack()} 
                            />
                        )}
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    levelIndicator: {
        fontFamily: 'RobotoMono_700Bold',
        color: '#39FF14',
        fontSize: 16,
        textShadowColor: '#39FF14',
        textShadowRadius: 8,
    },
    questionContainer: {
        marginBottom: 30,
    },
    questionText: {
        fontFamily: 'RobotoMono_700Bold',
        color: '#aaffaa',
        fontSize: 16,
        marginBottom: 10,
    },
    hintText: {
        fontFamily: 'RobotoMono_400Regular',
        color: '#1a4d2e', 
        fontSize: 12,
        fontStyle: 'italic',
    },
    footer: {
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
    }
});
