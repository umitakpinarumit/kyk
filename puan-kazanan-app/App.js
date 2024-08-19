import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RewardScreen from './screens/RewardScreen';
import PointsScreen from './screens/PointsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Reward" component={RewardScreen} />
        <Stack.Screen name="Points" component={PointsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
