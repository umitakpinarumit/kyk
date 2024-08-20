import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import theme from './Theme'; // Tema dosyanızı import edin

function RewardScreen({ route, navigation }) {
  const [enteredCode, setEnteredCode] = useState('');
  const [currentPoints, setCurrentPoints] = useState(route.params?.points || 0);

  const rewardCodes = {
    'CODE123': 50,
    'SAVE20': 20,
    'BONUS100': 100,
  };

  const claimReward = (requiredPoints) => {
    if (currentPoints >= requiredPoints) {
      alert('Ödül kazanıldı!');
    } else {
      alert('Yeterli puan yok.');
    }
  };

  const applyCode = () => {
    if (rewardCodes[enteredCode]) {
      const addedPoints = rewardCodes[enteredCode];
      setCurrentPoints(currentPoints + addedPoints);
      alert(`${enteredCode} kodu başarıyla uygulandı! ${addedPoints} puan eklendi.`);
    } else {
      alert('Geçersiz kod.');
    }
    setEnteredCode(''); // Kod girme alanını temizle
  };

  return (
    <View style={theme.container}>
      <Text style={theme.header}>Ödüller</Text>
      <Text style={theme.points}>Toplanan Puan: {currentPoints}</Text>

      <TouchableOpacity 
        style={theme.button}
        onPress={() => claimReward(40)}
      >
        <Text style={theme.buttonText}>Ödülü Topla (40 Puan)</Text>
      </TouchableOpacity>

      <TextInput
        style={theme.input}
        placeholder="Kodunuzu girin"
        value={enteredCode}
        onChangeText={setEnteredCode}
      />
      <TouchableOpacity 
        style={theme.button}
        onPress={applyCode}
      >
        <Text style={theme.buttonText}>Kodu Uygula</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RewardScreen;
