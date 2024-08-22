import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import theme from './Theme'; // Tema dosyanızı import edin
import users from '../data/users.json'; // Kullanıcı verilerini import edin

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      alert('Giriş başarılı!');
      navigation.navigate('Home', { userId: user.userId, points: user.points });
    } else {
      alert('Geçersiz e-posta veya şifre.');
    }
  };

  return (
    <View style={theme.container}>
      <Text style={theme.header}>Giriş Yap</Text>
      <TextInput
        style={theme.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={theme.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity 
        style={theme.button}
        onPress={handleLogin}
      >
        <Text style={theme.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
