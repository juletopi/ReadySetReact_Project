import React, { useEffect, useRef } from 'react';
import { Text, Pressable, StyleSheet, Animated, View } from 'react-native';

export default function TerminalButton({ title, onPress }) {
    const cursorOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(cursorOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(cursorOpacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed && styles.containerPressed,
            ]}
        >
            {({ pressed }) => (
                <View style={styles.contentRow}>
                    <Text style={[styles.text, pressed && styles.textPressed]}>
                        {`> ${title}`}
                    </Text>

                    {!pressed && (
                        <Animated.Text style={[styles.cursor, { opacity: cursorOpacity }]}>
                            _
                        </Animated.Text>
                    )}
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#69eb40',
        backgroundColor: 'rgba(1, 37, 17, 0.8)',
        paddingVertical: 14,
        paddingHorizontal: 24,
        marginVertical: 10,
        marginHorizontal: 20,
        width: '85%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowColor: '#69eb40',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    containerPressed: {
        backgroundColor: '#69eb40',
        borderColor: '#69eb40',
        transform: [{ scale: 0.98 }],
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'monospace',
        color: '#69eb40',
        fontSize: 16,
        letterSpacing: 1.5,
        textShadowColor: '#69eb40',
        textShadowRadius: 6,
        fontWeight: 'bold',
    },
    textPressed: {
        color: '#000',
        textShadowRadius: 0,
    },
    cursor: {
        fontFamily: 'monospace',
        color: '#69eb40',
        fontSize: 18,
        marginLeft: 5,
        fontWeight: '900',
        textShadowColor: '#69eb40',
        textShadowRadius: 6,
    },
});
