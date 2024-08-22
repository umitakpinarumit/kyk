import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import theme from './Theme'; // Tema dosyanızı import edin
import codes from '../data/codes.json'; // Kod verilerini import edin
import rewards from '../data/rewards.json'; // Ödül verilerini import edin

function RewardScreen({ route }) {
  const [enteredCode, setEnteredCode] = useState('');
  const [currentPoints, setCurrentPoints] = useState(route.params?.points || 0);

  const applyCode = () => {
    const code = codes.find(c => c.code === enteredCode && !c.isRedeemed);
    if (code) {
      setCurrentPoints(currentPoints + code.points);
      alert(`${enteredCode} kodu başarıyla uygulandı! ${code.points} puan eklendi.`);
      code.isRedeemed = true;
    } else {
      alert('Geçersiz veya kullanılmış kod.');
    }
    setEnteredCode('');
  };

  const claimReward = (requiredPoints, rewardName) => {
    if (currentPoints >= requiredPoints) {
      alert(`${rewardName} ödülü kazanıldı!`);
      setCurrentPoints(currentPoints - requiredPoints);
    } else {
      alert('Yeterli puan yok.');
    }
  };

  return (
    <View style={theme.container}>
      <Text style={theme.header}>Ödüller</Text>
      <Text style={theme.points}>Toplanan Puan: {currentPoints}</Text>

      {rewards.map(reward => (
        <TouchableOpacity 
          key={reward.rewardId}
          style={theme.button}
          onPress={() => claimReward(reward.requiredPoints, reward.name)}
        >
          <Text style={theme.buttonText}>{reward.name} ({reward.requiredPoints} Puan)</Text>
        </TouchableOpacity>
      ))}

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
