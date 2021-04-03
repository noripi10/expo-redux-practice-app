import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CounterScreen, LockScreen, ToDoListScreen } from '../screens';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="counter">
      <Stack.Screen name="counter" component={CounterScreen} />
      <Stack.Screen name="todo" component={ToDoListScreen} />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName="app"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="app" component={AppStackNavigator} />
      <Stack.Screen name="lock" component={LockScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
