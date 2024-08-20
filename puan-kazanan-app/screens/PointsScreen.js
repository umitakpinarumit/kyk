import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from './Theme'; // Tema dosyanızı import edin

function PointsScreen({ route }) {
  const { points } = route.params;

  return (
    <View style={theme.container}>
      <Text style={theme.header}>Puanlarım</Text>
      <Text style={theme.points}>Toplam Puan: {points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  points: {
    fontSize: 18,
    marginTop: 10,
    color: theme.textPrimary.color, // Tema renklerini kullanın
  },
});

export default PointsScreen;
