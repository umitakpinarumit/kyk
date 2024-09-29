import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={theme.button} onPress={onPress}>
    <Text style={theme.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
