import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/User/Login'

const Stack = createStackNavigator();

function Routes() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default Routes;