import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function GameTerminal({ prefix, suffix, value, onChangeText, isCorrect }) {
    return (
        <View style={[styles.terminalContainer, isCorrect && styles.successBorder]}>
            <Text style={styles.terminalLabel}>TERMINAL_INPUT:</Text>
            <View style={styles.codeRow}>
                <Text style={styles.codeText}>{prefix}</Text>
                
                <TextInput
                    style={[
                        styles.input, 
                        { width: Math.max(40, value.length * 10 + 10) } 
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="_"
                    placeholderTextColor="#1a4d2e"
                    editable={!isCorrect} 
                />
                
                <Text style={styles.codeText}>{suffix}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    terminalContainer: {
        backgroundColor: '#05100a',
        borderWidth: 2,
        borderColor: '#1a4d2e',
        padding: 15,
        width: '100%',
        borderRadius: 4,
    },
    successBorder: {
        borderColor: '#39FF14',
        backgroundColor: 'rgba(57, 255, 20, 0.1)',
    },
    terminalLabel: {
        fontFamily: 'RobotoMono_700Bold',
        color: '#1a4d2e',
        fontSize: 10,
        marginBottom: 8,
    },
    codeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    codeText: {
        fontFamily: 'RobotoMono_400Regular',
        color: '#aaffaa',
        fontSize: 16,
    },
    input: {
        fontFamily: 'RobotoMono_700Bold',
        color: '#39FF14',
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#39FF14',
        marginHorizontal: 4,
        textAlign: 'center',
        padding: 0,
        height: 24,
    }
});

