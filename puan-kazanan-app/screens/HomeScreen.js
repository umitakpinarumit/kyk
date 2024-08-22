import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import theme from './Theme';

function HomeScreen({ navigation, route }) {
  const points = route.params?.points || 0;
  const userId = route.params?.userId || 'defaultUser';

  return (
    <View style={theme.container}>
      <Image 
        source={require('../assets/adaptive-icon.png')} 
        style={styles.image}
      />
      <Text style={theme.header}>KYK Puan Sistemi</Text>

      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Product', { points })}
      >
        <Text style={theme.buttonText}>Ürünleri Görüntüle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Reward', { points })}
      >
        <Text style={theme.buttonText}>Ödülleri Görüntüle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={theme.button}
        onPress={() => navigation.navigate('Points', { points })}
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

const styles = StyleSheet.create({
  image: {
    width: 100, // Fotoğraf genişliği
    height: 100, // Fotoğraf yüksekliği
    resizeMode: 'contain', // Fotoğrafın tüm alanı kaplamasını sağlar
    marginBottom: 20, // Fotoğraf ile başlık arasındaki boşluk
  },
});

export default HomeScreen;
