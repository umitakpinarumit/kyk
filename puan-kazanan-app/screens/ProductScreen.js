import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from './Theme'; // Tema dosyanızı import edin

function ProductScreen({ navigation }) {
  const [points, setPoints] = useState(0);

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
      <Text style={theme.points}>Puanlarım: {points}</Text>
      <TouchableOpacity 
        style={theme.button}
        onPress={() => navigation.navigate('Reward', { points })}
      >
        <Text style={theme.buttonText}>Ödüle Git</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductScreen;
