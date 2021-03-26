import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CounterScreen } from './src/screen';
import { Provider } from 'react-redux';
import store, { persister } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persister}>
				<CounterScreen />
			</PersistGate>
		</Provider>
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
