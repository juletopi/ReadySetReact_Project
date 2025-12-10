import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}';

const GlitchText = ({ prefix, length = 6, interval = 1000 }) => {
    const [text, setText] = useState('');

    const generateText = () => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += RANDOM_CHARS.charAt(Math.floor(Math.random() * RANDOM_CHARS.length));
        }
        setText(result);
    };

    useEffect(() => {
        generateText();
        const timer = setInterval(generateText, interval + Math.random() * 500);
        return () => clearInterval(timer);
    }, []);

    return (
        <Pressable onPress={generateText}>
            <Text style={styles.hudText}>
                {prefix}
                <Text style={styles.variableText}>{text}</Text>
            </Text>
        </Pressable>
    );
};

export default function CornerHUD() {
    return (
        <View style={styles.overlay} pointerEvents="box-none">
            <View style={styles.topLeft}>
                <GlitchText prefix="SYS_ID: " length={4} interval={2000} />
                <Text style={styles.staticText}>----------------</Text>
                <GlitchText prefix="MEM_ADDR: 0x" length={4} interval={150} />
            </View>

            <View style={styles.topRight}>
                <GlitchText prefix="NET_LNK <" length={3} interval={3000} />
                <Text style={styles.staticText}>----------------</Text>
                <GlitchText prefix="PING: " length={2} interval={800} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 20,
        justifyContent: 'space-between',
        paddingVertical: 45,
        paddingHorizontal: 15,
    },
    topLeft: {
        position: 'absolute',
        top: 45,
        left: 15,
        alignItems: 'flex-start',
    },
    topRight: {
        position: 'absolute',
        top: 45,
        right: 15,
        alignItems: 'flex-end',
    },
    bottomLeft: {
        position: 'absolute',
        bottom: 30,
        left: 15,
        alignItems: 'flex-start',
    },
    bottomRight: {
        position: 'absolute',
        bottom: 30,
        right: 15,
        alignItems: 'flex-end',
    },
    hudText: {
        fontFamily: 'monospace',
        color: '#39FF14',
        fontSize: 10,
        opacity: 0.8,
        marginVertical: 1,
        textShadowColor: '#39FF14',
        textShadowRadius: 2,
    },
    variableText: {
        color: '#aaffaa',
    },
    staticText: {
        fontFamily: 'monospace',
        color: '#1a4d2e',
        fontSize: 10,
        letterSpacing: -1,
    },
});
