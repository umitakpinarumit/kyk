import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from './Theme';

function PointsScreen({ route }) {
  const { points } = route.params;

  return (
    <View style={theme.container}>
      <Text style={theme.header}>Puanlarım</Text>
      <Text style={styles.points}>Toplam Puan: {points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  points: {
    fontSize: 18,
    marginTop: 10,
    color: theme.textPrimary.color,
  },
});

export default PointsScreen;
