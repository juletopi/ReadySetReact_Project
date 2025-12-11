import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import Background from '../components/Background'; 
import TerminalButton from '../components/TerminalButton';
import VisualResult from './components/VisualResult';
import GameTerminal from './components/GameTerminal';
import { levels } from './data/levels';

// lógica do gerenciador de jogo aqui
