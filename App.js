import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SubMenu from './screens/SubMenu'
import estudar from './screens/estudar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="estudar"
        screenOptions={{ headerShown: false }} // remove cabeçalho
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SubMenu" component={SubMenu} />
        <Stack.Screen name="estudar" component={estudar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
