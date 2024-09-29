import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import PointsScreen from './screens/PointsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs({ addPointsToUser, currentUser, handleLogout, setQrScannerActive }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'Points') {
            iconName = 'star-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'QRCode') {
            iconName = 'qr-code-outline'; // QR Kod Tarayıcı
          } else if (route.name === 'Logout') {
            iconName = 'log-out-outline'; // Çıkış
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab">
        {(props) => (
          <HomeScreen
            {...props}
            addPointsToUser={addPointsToUser}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Points">
        {(props) => (
          <PointsScreen
            {...props}
            points={currentUser?.points || 0}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => (
          <ProfileScreen
            {...props}
            currentUser={currentUser}
          />
        )}
      </Tab.Screen>
      {/* QR Kod Tarayıcı butonu */}
      <Tab.Screen
        name="QRCode"
        children={() => null} // Bu butonun sadece işlem yapması için
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Ekran yönlendirmesini engelle
            setQrScannerActive(true); // QR tarayıcıyı aktif et
          },
        }}
      />
      {/* Çıkış butonu */}
      <Tab.Screen
        name="Logout"
        children={() => null} // Bu butonun sadece işlem yapması için
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Ekran yönlendirmesini engelle
            handleLogout(); // Çıkış işlemi
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ points: 0 });
  const [qrScannerActive, setQrScannerActive] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const addPointsToUser = (points) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      points: prevUser.points + points,
    }));
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MyTabs
          addPointsToUser={addPointsToUser}
          currentUser={currentUser}
          handleLogout={handleLogout}
          setQrScannerActive={setQrScannerActive}
        />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                users={users}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentUser={setCurrentUser}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {(props) => (
              <RegisterScreen
                {...props}
                users={users}
                setUsers={setUsers}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
