import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background';

export default function IniciarSistema() {
	return (
		<Background>
			<View style={styles.container}>
				<Text style={styles.title}>INICIAR SISTEMA</Text>
				<Text style={styles.text}>Aqui vai o conteúdo da tela de inicialização do sistema.</Text>
			</View>
		</Background>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontFamily: 'monospace',
		color: '#39FF14',
		fontSize: 18,
		marginBottom: 16,
		textShadowColor: '#00ff99',
		textShadowRadius: 8,
		letterSpacing: 1,
	},
	text: {
		fontFamily: 'monospace',
		color: '#aaffaa',
		fontSize: 12,
		textAlign: 'center',
	},
});
