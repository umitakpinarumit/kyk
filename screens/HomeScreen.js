import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, FlatList, Image, Modal, Dimensions, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { BarCodeScanner } from 'expo-barcode-scanner';

function HomeScreen({ navigation, setIsLoggedIn, addPointsToUser }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrScannerActive, setQrScannerActive] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate('Login');
  };

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return;

    setScanned(true);
    addPointsToUser(10); // QR tarandığında 10 puan ekliyoruz
    Alert.alert('QR Kod Tarandı!', '10 puan kazandınız!', [
      {
        text: 'Tamam',
        onPress: () => {
          setScanned(false);
          setQrScannerActive(false); // QR tarayıcısını kapat
        },
      },
    ]);
  };

  const renderButton = (screen, title) => (
    <Animatable.View animation="pulse" duration={1500} iterationCount="infinite" key={screen} style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(screen)} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );

  const products = [
    { id: '1', title: 'Megafix', image: require('../assets/product1.jpg') },
    { id: '2', title: 'MegaFuga', image: require('../assets/product2.jpg') },
    { id: '3', title: 'MegaEpoxy', image: require('../assets/product3.jpg') },
    { id: '4', title: 'MegaIzo', image: require('../assets/product4.jpg') },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.image)} style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (hasPermission === null) {
    return <Text>İzin bekleniyor...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Kamera izni yok.</Text>;
  }

  return (
    <ImageBackground source={require('../assets/background-image.jpg')} style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>KYK Puan Sistemi</Text>
      </View>

      {!qrScannerActive ? (
        <>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            style={styles.productList}
          />
          <View style={styles.buttonsRow}>
            {renderButton('Points', 'Puanlar')}
            {renderButton('Profile', 'Profil')}
            <Animatable.View animation="pulse" duration={1500} iterationCount="infinite">
              <TouchableOpacity
                onPress={() => setQrScannerActive(true)} // QR tarayıcıyı aktif et
                style={styles.button}
              >
                <Text style={styles.buttonText}>QR Kod Tarayıcı</Text>
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="pulse" duration={1500} iterationCount="infinite">
              <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Çıkış</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject} // QR tarayıcıyı tam ekran yap
        />
      )}

      <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleCloseModal} style={styles.modalCloseButton}>
            <Text style={styles.closeButtonText}>✖</Text>
          </TouchableOpacity>
          {selectedImage && <Image source={selectedImage} style={styles.modalImage} resizeMode="contain" />}
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    color: '#2596be',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productList: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productTitle: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2596be',
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 100,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2596be',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#2596be',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
