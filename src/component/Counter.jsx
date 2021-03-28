import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrement, actionDecrement } from '../redux/action';

export const Counter = () => {
  // action dispatchの定義
  const dispatch = useDispatch();
  // state(store)のreducerごとに登録したツリー構造から抜粋
  const counter = useSelector((state) => state.counter);
  const { preCount, curCount } = counter;

  return (
    <View style={styles.container}>
      <Text style={styles.curCount}>{curCount}</Text>
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
      <Text style={styles.preCount}>{preCount}</Text>
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
  curCount: {
    fontSize: 80,
  },
  preCount: {
    fontSize: 45,
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
