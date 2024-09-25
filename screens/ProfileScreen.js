import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function ProfileScreen({ route, navigation }) {
  const currentUser = route.params?.currentUser || { name: "Kullanıcı Adı", points: 0 }; // Kullanıcı bilgileri

  const handleLogout = () => {
    // Çıkış yapma işlemi
    navigation.navigate('Login');
  };

  return (
    <ImageBackground 
      source={require('../assets/background-image.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Hesap Ayarları</Text>
        <Text style={styles.userInfo}>Kullanıcı Adı: {currentUser.name}</Text>
        <Text style={styles.userInfo}>Kazandığınız Puanlar: {currentUser.points}</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => {/* Hesap ayarlarına gitme işlemi */}}
        >
          <Text style={styles.buttonText}>Hesap Ayarları</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Çıkış Yap</Text>
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
    color: '#2596be',
    textAlign: 'center',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2596be',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c', // Çıkış butonu için farklı bir renk
  },
});

export default ProfileScreen;
