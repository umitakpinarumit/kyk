import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function LoginScreen({ navigation, users, setIsLoggedIn, setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Lütfen e-posta ve şifrenizi girin.');
      return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user); // Mevcut kullanıcıyı sakla
      setIsLoggedIn(true); // Giriş yapıldı
      navigation.navigate('Home'); // HomeScreen'e yönlendir
    } else {
      alert('Geçersiz e-posta veya şifre.');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/background-image2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Giriş Yap</Text>
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Üye Ol</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 25,
    elevation: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#2596be',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#2596be',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#6c757d',
    marginBottom: 15,
  },
});

export default LoginScreen;
