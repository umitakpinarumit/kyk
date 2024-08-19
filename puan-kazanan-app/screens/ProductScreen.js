import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function ProductScreen({ navigation }) {
  const [points, setPoints] = useState(0);

  const buyProduct = () => {
    setPoints(points + 4); // Her ürün için 4 puan eklenir.
  };

  return (
    <View>
      <Text>Ürünler</Text>
      <Button title="Ürün Satın Al" onPress={buyProduct} />
      <Text>Puanlarım: {points}</Text>
      <Button
        title="Ödüle Git"
        onPress={() => navigation.navigate('Reward', { points })}
      />
    </View>
  );
}

export default ProductScreen;
