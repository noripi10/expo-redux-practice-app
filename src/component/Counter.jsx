import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrement, actionDecrement } from '../redux/action';

export const Counter = () => {
	// action dispatchの定義
	const dispatch = useDispatch();
	// state(store)のreducerごとに登録したツリー構造から抜粋
	const counter = useSelector((state) => state.counter);
	const { count } = counter;

	return (
		<View style={styles.container}>
			<Text style={styles.count}>{count}</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => dispatch(actionDecrement())} //actionを作成してstoreへdispatch
					style={[styles.button, { backgroundColor: 'red' }]}
				>
					<Text>マイナス</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(actionIncrement())}
					style={[styles.button, { backgroundColor: 'blue' }]}
				>
					<Text>プラス</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	count: {
		fontSize: 80,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		margin: 5,
		borderRadius: 5,
		width: 100,
		height: 50,
	},
});
