import React, { useEffect } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionDecrement, actionIncrement, actionReset } from '../redux/action';
import { Counter } from '../component/Counter';

const CounterScreen = (props) => {
  const {
    actionIncrement,
    actionDecrement,
    actionReset,
    counter,
    navigation,
  } = props;

  useEffect(() => {
    const { curCount } = counter;
    if (curCount > 9) {
      navigation.navigate('todo');
      actionReset();
    }
  }, [counter]);

  return (
    <View style={styles.container}>
      <Button
        title="親コンポーネント　+ボタン"
        onPress={() => actionIncrement()}
      />
      <Button
        title="親コンポーネント　-ボタン"
        onPress={() => actionDecrement()}
      />
      <Button
        title="親コンポーネント　リセット"
        onPress={() => actionReset()}
      />
      <Text>この下から子コンポーネント</Text>
      <Counter />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('todo')}
      >
        <Text>TodoListScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  const { counter } = state;
  return { counter };
};

const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    { actionDecrement, actionIncrement, actionReset },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(CounterScreen);
