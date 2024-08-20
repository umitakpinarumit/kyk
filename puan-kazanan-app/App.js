import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RewardScreen from './screens/RewardScreen';
import PointsScreen from './screens/PointsScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Reward" component={RewardScreen} />
        <Stack.Screen name="Points" component={PointsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
