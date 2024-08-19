// RewardScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function RewardScreen({ route, navigation }) {
  const { points } = route.params || {}; // params nesnesinin mevcut olup olmadığını kontrol edin

  const claimReward = (requiredPoints) => {
    if (points >= requiredPoints) {
      alert('Reward claimed!');
    } else {
      alert('Not enough points.');
    }
  };

  if (points === undefined) {
    return (
      <View>
        <Text>Error: Points data is missing.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Ödüller</Text>
      <Text>Toplanan Puan: {points}</Text>
      <Button title="Ödülü Topla (40 Puan)" onPress={() => claimReward(40)} />
    </View>
  );
}

export default RewardScreen;
