// Theme.js
const theme = {
    // Genel Konteyner Stili
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#ffffff', // Arka plan rengi
    },
    // Başlık Stili
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgb(37, 150, 190)', // Başlık rengi
      marginBottom: 20,
    },
    // Buton Stili
    button: {
      backgroundColor: 'rgb(37, 150, 190)', // Buton rengi
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    // Buton Üzerindeki Metin Stili
    buttonText: {
      color: '#ffffff', // Buton metin rengi
      fontSize: 16,
      textAlign: 'center',
    },
    // Giriş ve Kayıt Stili
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius: 5,
      width: '100%',
    },
    // Ekran Başlığı Stili
    screenTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgb(37, 150, 190)', // Ekran başlığı rengi
      marginBottom: 20,
    },
    // Ürünler Listesi Stili
    productItem: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      width: '100%',
    },
    // Ürün Başlığı Stili
    productTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    // Ürün Açıklaması Stili
    productDescription: {
      fontSize: 16,
      color: '#666',
    },
    // Hata Mesajı Stili
    errorMessage: {
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
    },
  };
  
  export default theme;
  