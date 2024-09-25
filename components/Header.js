import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const Header = () => (
  <View style={styles.headerContainer}>
    <Image source={require('../assets/logo.png')} style={styles.logo} />
    <Text style={theme.header}>KYK Puan Sistemi</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Header;
