import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CornerHUD from './CornerHUD';

export default function Background({ children }) {
    const flickerOpacity = useRef(new Animated.Value(0.05)).current;

    useEffect(() => {
        const flickerSequence = Animated.sequence([
            Animated.timing(flickerOpacity, { toValue: 0.12, duration: 120, useNativeDriver: true }),
            Animated.delay(100),
            Animated.timing(flickerOpacity, { toValue: 0.05, duration: 200, useNativeDriver: true }),
            Animated.timing(flickerOpacity, { toValue: 0.09, duration: 100, useNativeDriver: true }),
            Animated.delay(2000 + Math.random() * 3000),
        ]);

        Animated.loop(flickerSequence).start();
    }, []);

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#0f2e20', '#05100a']}
                style={StyleSheet.absoluteFill}
            />

            <View style={styles.scanlineOverlay} pointerEvents="none" />

            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        backgroundColor: '#39FF14',
                        opacity: flickerOpacity
                    }
                ]}
                pointerEvents="none"
            />

            <CornerHUD />

            <LinearGradient
                colors={["rgba(5, 16, 10, 0.9)", "transparent"]}
                style={styles.vignetteTop}
                pointerEvents="none"
            />
            <LinearGradient
                colors={["transparent", "rgba(5, 16, 10, 0.9)"]}
                style={styles.vignetteBottom}
                pointerEvents="none"
            />
            <LinearGradient
                colors={["rgba(5, 16, 10, 0.9)", "transparent"]}
                style={styles.vignetteLeft}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                pointerEvents="none"
            />
            <LinearGradient
                colors={["transparent", "rgba(5, 16, 10, 0.9)"]}
                style={styles.vignetteRight}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                pointerEvents="none"
            />

            <View style={styles.contentContainer}>
                {children}
            </View>
        </View>
    );
}

const vignetteThickness = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        fontFamily: 'RobotoMono_400Regular',
    },
    contentContainer: {
        flex: 1,
        zIndex: 10,
    },
    scanlineOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderWidth: 0,
    },
    vignetteTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: vignetteThickness,
    },
    vignetteBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: vignetteThickness,
    },
    vignetteLeft: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: vignetteThickness,
    },
    vignetteRight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: vignetteThickness,
    },
});
