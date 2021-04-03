import React, { useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionDecrement, actionIncrement, actionReset } from '../redux/action';
import { Counter } from '../component/Counter';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

const window = Dimensions.get('window');

const CounterScreen = (props) => {
  const {
    actionIncrement,
    actionDecrement,
    actionReset,
    counter,
    navigation,
  } = props;

  const [dimensions, setDimensions] = useState({ ...window });
  const { isLock, setUser } = useContext(AppContext);
  const { width, height } = useWindowDimensions();

  const dimensionChangeHandler = ({ window }) => {
    setDimensions({ ...window });
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'カウンター',
      headerRight: () => (
        <Button title="サインアウト" onPress={() => setUser({})} />
      ),
    });

    Dimensions.addEventListener('change', dimensionChangeHandler);

    return () => {
      Dimensions.removeEventListener('change', dimensionChangeHandler);
    };
  }, []);

  useEffect(() => {
    if (isLock === true) {
      navigation.navigate('lock');
    }
  }, [isLock]);

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

      <Text>useWindowDimensions</Text>
      <Text>{`W:${width} H:${height}`}</Text>
      <Text>Dimensions API</Text>
      <Text>{`W:${dimensions.width} H:${dimensions.height}`}</Text>
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
