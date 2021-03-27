import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CounterScreen, ToDoListScreen } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="counter">
			<Stack.Screen name="counter" component={CounterScreen} />
			<Stack.Screen name="todo" component={ToDoListScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
