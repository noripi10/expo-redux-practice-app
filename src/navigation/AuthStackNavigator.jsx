import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
