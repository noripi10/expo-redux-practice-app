import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Counter } from '../component/Counter';

export const CounterScreen = ({}) => {
	return (
		<View style={styles.container}>
			<Counter />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
