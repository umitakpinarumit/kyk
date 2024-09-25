import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

function PointsScreen({ navigation, route }) {
  const { points, setPoints } = route.params || { points: 0, setPoints: () => {} };
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(points);
  const [qrScannerActive, setQrScannerActive] = useState(false); // Tarayıcı aktif mi?

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return; // Eğer zaten tarandıysa, tekrar tarama yapılmasın

    setScanned(true);
    Alert.alert(
      'QR Kod Tarandı!',
      'Puan kazandınız! QR kodu başarıyla okudunuz.',
      [
        {
          text: 'Tamam',
          onPress: () => {
            const newPoints = currentPoints + 10;
            setCurrentPoints(newPoints);
            setPoints(newPoints); // Ana ekrandaki puanı güncellemek için
            setScanned(false); // Tarayıcıyı tekrar kullanılabilir yap
            setQrScannerActive(false); // Tarayıcıyı kapat
          },
        },
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>İzin bekleniyor...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Kamera izni yok.</Text>;
  }

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      {!qrScannerActive ? (
        <>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()} // Geri dönme işlevi
          >
            <Ionicons name="chevron-back" size={24} color="white" />
            <Text style={styles.backButtonText}>Geri</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Puanlarınız: {currentPoints}</Text>
          <Animatable.View
            animation="pulse"
            duration={1500}
            iterationCount="infinite"
            style={styles.scanButtonContainer}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setQrScannerActive(true);
                setScanned(false); // Tarayıcıyı aktif etmeden önce sıfırlama
              }}
            >
              <Text style={styles.buttonText}>QR Kod Tarayıcıyı Aç</Text>
            </TouchableOpacity>
          </Animatable.View>
        </>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2596be',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  scanButtonContainer: {
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 18,
    marginLeft: 5,
    color: 'white',
  },
});

export default PointsScreen;
