import React from 'react';
import { View, Text } from 'react-native';

function PointsScreen({ route }) {
  const { points } = route.params;

  return (
    <View>
      <Text>  Puanlarım: {points}</Text>
    </View>
  );
}

export default PointsScreen;
