import * as React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options ={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Felipe Dinnouti