import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function ProductScreen({ navigation, route }) {
  const [points, setPoints] = useState(route.params?.points || 0);

  const buyProduct = () => {
    setPoints(points + 4); // Her ürün için 4 puan eklenir.
  };

  return (
    <ImageBackground 
      source={require('../assets/background-image2.jpg')} // Arka plan resmi
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Ürünler</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={buyProduct}
        >
          <Text style={styles.buttonText}>Ürün Satın Al</Text>
        </TouchableOpacity>
        <Text style={styles.points}>Puanlarım: {points}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Reward', { points })}
        >
          <Text style={styles.buttonText}>Ödüle Git</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2596be',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2596be',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2596be',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default ProductScreen;
