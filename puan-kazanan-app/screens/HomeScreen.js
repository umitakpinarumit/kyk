import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function HomeScreen({ navigation }) {
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      {/* Üstteki fotoğraf */}
      <Image 
        source={require('../assets/adaptive-icon.png')} 
        style={styles.image}
      />
      
      {/* Başlık */}
      <Text style={styles.title}>KYK Puan Sistemi</Text>

      {/* Butonlar */}
      <Button
        title="Ürünleri Görüntüle"
        onPress={() => navigation.navigate('Product')}
      />
      <Button
        title="Ödülleri Görüntüle"
        onPress={() => navigation.navigate('Reward')}
      />
      <Button
        title="Puanları Görüntüle"
        onPress={() => navigation.navigate('Points', { points })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff', // Arka plan rengini ekleyebilirsiniz
  },
  title: {
    fontSize: 30, // Başlık boyutu
    fontWeight: 'bold', // Kalın yazı
    marginVertical: 40, // Başlık ile butonlar arasında boşluk
  },
  image: {
    width: '80%', // Ekranın genişliğine uyacak şekilde
    height: 150, // Fotoğrafın yüksekliği
    resizeMode: 'cover', // Fotoğrafı kaplayacak şekilde
    marginBottom: 40, // Fotoğraf ile başlık arasında boşluk
  },
});

export default HomeScreen;
