import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import theme from './Theme'; // Tema dosyanızı import edin

function HomeScreen({ navigation }) {
  return (
    <View style={theme.container}>
      {/* Üstteki fotoğraf */}
      <Image 
        source={require('../assets/adaptive-icon.png')} 
        style={styles.image}
      />
      
      {/* Başlık */}
      <Text style={theme.header}>KYK Puan Sistemi</Text>

      {/* Butonlar */}
      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Product')}
      >
        <Text style={theme.buttonText}>Ürünleri Görüntüle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Reward')}
      >
        <Text style={theme.buttonText}>Ödülleri Görüntüle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Points', { points: 0 })}
      >
        <Text style={theme.buttonText}>Puanları Görüntüle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={theme.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
     
    
    </View>
  );
}

// Ekstra stil ayarları
const styles = StyleSheet.create({
  image: {
    width: 100, // Fotoğraf genişliği
    height: 100, // Fotoğraf yüksekliği
    resizeMode: 'contain', // Fotoğrafın tüm alanı kaplamasını sağlar
    marginBottom: 20, // Fotoğraf ile başlık arasındaki boşluk
  },
});

export default HomeScreen;
