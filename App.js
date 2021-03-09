
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import q1 from './screens/q1';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();



function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: true,
      headerStyle: {
            backgroundColor: '#1da9f7',
            elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
          },
    }}
 
     initialRouteName="Home">
      <Stack.Screen name="Home"  options={{ title: null }} component={Home} />    
      <Stack.Screen name="q1"    options={{ title: null }} component={q1} />      
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
