import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import PointsScreen from './screens/PointsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ points: 0 });

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
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home">
              {(props) => (
                <HomeScreen
                  {...props}
                  setIsLoggedIn={setIsLoggedIn}
                  addPointsToUser={addPointsToUser} // QR tarayıcıdan puan ekleme işlemi
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Points">
              {(props) => (
                <PointsScreen
                  {...props}
                  points={currentUser?.points || 0} // Puanları PointsScreen'e gönderiyoruz
                  setPoints={(newPoints) => setCurrentUser({ ...currentUser, points: newPoints })} // PointsScreen'de puanları güncellemek için
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Profile">
              {(props) => (
                <ProfileScreen
                  {...props}
                  currentUser={currentUser}
                />
              )}
            </Stack.Screen>
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
