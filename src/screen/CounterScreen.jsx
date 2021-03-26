import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { Counter } from '../component/Counter';
import { actionIncrement } from '../redux/action';

const CounterScreen = (props) => {
	return (
		<View style={styles.container}>
			<Button
				title="親コンポーネント　+ボタン"
				onPress={() => props.dispatch(actionIncrement())}
			/>

			<Text>この下から子コンポーネント</Text>
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

const mapStateToProps = (state) => {
	const { counter } = state;
	return { counter };
};

export default connect(mapStateToProps)(CounterScreen);
