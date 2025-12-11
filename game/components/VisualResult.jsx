import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';


export default function VisualResult({ type, isCorrect }) {
    
    const fadeAnim = useRef(new Animated.Value(0.2)).current;
    const navAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animação para o nível 5 (Animation)export default function VisualResult({ type, isCorrect }) {
    
    const fadeAnim = useRef(new Animated.Value(0.2)).current;
    const navAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animação para o nível 5 (Animation)
        if (type === 'animation' && isCorrect) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
                    Animated.timing(fadeAnim, { toValue: 0.2, duration: 800, useNativeDriver: true })
                ])
            ).start();
        } else {
            fadeAnim.setValue(0.2); 
        }

        // Animação para o nível 2 (Navigation)
        if (type === 'navigation' && isCorrect) {
            Animated.timing(navAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
        } else {
            navAnim.setValue(0);
        }
    }, [isCorrect, type]);

    const renderContent = () => {
        switch (type) {
            case 'view':
                return isCorrect ? <View style={styles.box} /> : <View style={styles.dashedBox} />;
            
            case 'navigation':
                const translateX = navAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100] 
                });
                return (
                    <View style={{overflow: 'hidden', width: 100}}>
                        <Animated.View style={[styles.navRow, { transform: [{ translateX }] }]}>
                            <View style={[styles.card, { backgroundColor: '#1a4d2e' }]}><Text style={styles.tinyText}>HOME</Text></View>
                            <View style={[styles.card, { backgroundColor: '#39FF14' }]}><Text style={[styles.tinyText, {color: '#000'}]}>PAGE 2</Text></View>
                        </Animated.View>
                    </View>
                );

            case 'style':
                return <View style={[styles.box, { backgroundColor: isCorrect ? '#39FF14' : 'transparent', borderWidth: 2, borderColor: '#39FF14' }]} />;

            case 'flex':
                return (
                    <View style={[styles.flexContainer, { alignItems: isCorrect ? 'center' : 'flex-start' }]}>
                        <View style={styles.tinyBox} />
                        <View style={styles.tinyBox} />
                        <View style={styles.tinyBox} />
                    </View>
                );

            case 'animation':
                return (
                    <Animated.View style={[styles.box, { opacity: isCorrect ? fadeAnim : 1 }]}>
                        <Text style={styles.tinyText}>{isCorrect ? 'ANIMATING' : 'STATIC'}</Text>
                    </Animated.View>
                );

            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1a4d2e',
        marginBottom: 20,
    },
    box: {
        width: 60,
        height: 60,
        backgroundColor: '#39FF14',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dashedBox: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: '#1a4d2e',
        borderStyle: 'dashed',
    },
    navRow: {
        flexDirection: 'row',
        width: 200, 
    },
    card: {
        width: 80,
        height: 100,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#39FF14',
    },
    flexContainer: {
        width: 150,
        height: 100,
        borderWidth: 1,
        borderColor: '#1a4d2e',
        justifyContent: 'space-around', 
        padding: 5,
    },
    tinyBox: {
        width: 20,
        height: 20,
        backgroundColor: '#39FF14',
        marginBottom: 5,
    },
    tinyText: {
        fontSize: 8,
        fontFamily: 'RobotoMono_700Bold',
        color: '#39FF14',
    }
});


        if (type === 'animation' && isCorrect) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
                    Animated.timing(fadeAnim, { toValue: 0.2, duration: 800, useNativeDriver: true })
                ])
            ).start();
        } else {
            fadeAnim.setValue(0.2); 
        }

        // Animação para o nível 2 (Navigation)
        if (type === 'navigation' && isCorrect) {
            Animated.timing(navAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
        } else {
            navAnim.setValue(0);
        }
    }, [isCorrect, type]);

    const renderContent = () => {
        switch (type) {
            case 'view':
                return isCorrect ? <View style={styles.box} /> : <View style={styles.dashedBox} />;
            
            case 'navigation':
                const translateX = navAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100] 
                });
                return (
                    <View style={{overflow: 'hidden', width: 100}}>
                        <Animated.View style={[styles.navRow, { transform: [{ translateX }] }]}>
                            <View style={[styles.card, { backgroundColor: '#1a4d2e' }]}><Text style={styles.tinyText}>HOME</Text></View>
                            <View style={[styles.card, { backgroundColor: '#39FF14' }]}><Text style={[styles.tinyText, {color: '#000'}]}>PAGE 2</Text></View>
                        </Animated.View>
                    </View>
                );

            case 'style':
                return <View style={[styles.box, { backgroundColor: isCorrect ? '#39FF14' : 'transparent', borderWidth: 2, borderColor: '#39FF14' }]} />;

            case 'flex':
                return (
                    <View style={[styles.flexContainer, { alignItems: isCorrect ? 'center' : 'flex-start' }]}>
                        <View style={styles.tinyBox} />
                        <View style={styles.tinyBox} />
                        <View style={styles.tinyBox} />
                    </View>
                );

            case 'animation':
                return (
                    <Animated.View style={[styles.box, { opacity: isCorrect ? fadeAnim : 1 }]}>
                        <Text style={styles.tinyText}>{isCorrect ? 'ANIMATING' : 'STATIC'}</Text>
                    </Animated.View>
                );

            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1a4d2e',
        marginBottom: 20,
    },
    box: {
        width: 60,
        height: 60,
        backgroundColor: '#39FF14',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dashedBox: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: '#1a4d2e',
        borderStyle: 'dashed',
    },
    navRow: {
        flexDirection: 'row',
        width: 200, 
    },
    card: {
        width: 80,
        height: 100,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#39FF14',
    },
    flexContainer: {
        width: 150,
        height: 100,
        borderWidth: 1,
        borderColor: '#1a4d2e',
        justifyContent: 'space-around', 
        padding: 5,
    },
    tinyBox: {
        width: 20,
        height: 20,
        backgroundColor: '#39FF14',
        marginBottom: 5,
    },
    tinyText: {
        fontSize: 8,
        fontFamily: 'RobotoMono_700Bold',
        color: '#39FF14',
    }
});

