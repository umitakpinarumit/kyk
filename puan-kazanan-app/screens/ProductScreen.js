import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from './Theme';

function ProductScreen({ navigation, route }) {
  const [points, setPoints] = useState(route.params?.points || 0);

  const buyProduct = () => {
    setPoints(points + 4); // Her ürün için 4 puan eklenir.
  };

  return (
    <View style={theme.container}>
      <Text style={theme.header}>Ürünler</Text>
      <TouchableOpacity 
        style={theme.button}
        onPress={buyProduct}
      >
        <Text style={theme.buttonText}>Ürün Satın Al</Text>
      </TouchableOpacity>
      <Text style={styles.points}>Puanlarım: {points}</Text>
      <TouchableOpacity 
        style={theme.button}
        onPress={() => navigation.navigate('Reward', { points })}
      >
        <Text style={theme.buttonText}>Ödüle Git</Text>
      </TouchableOpacity>
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

export default ProductScreen;
