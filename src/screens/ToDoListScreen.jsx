import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  InteractionManager,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionAddTodo,
  actionDeleteTodo,
  actionResetTodo,
} from '../redux/action';
import { RenderItem } from '../component/RenderItem';

const ToDoListScreen = ({
  todoList,
  actionAddTodo,
  actionDeleteTodo,
  actionResetTodo,
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [todoText, setTodoText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <Text>Todoを入力して下さい</Text>
          <TextInput
            style={styles.input}
            value={todoText}
            onChangeText={(text) => setTodoText(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            actionAddTodo({ ID: Math.random().toString(), todo: todoText });
            setTodoText('');
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
        {/* <Button title="reset" onPress={() => dispatch(actionResetTodo())} /> */}
      </View>
      <View style={styles.inCompleteContainer}>
        <FlatList
          data={todoList.inComplete || []}
          renderItem={({ item }) => (
            <RenderItem item={item} deleteTodo={actionDeleteTodo} />
          )}
          keyExtractor={(item) => item.ID}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>
      <View style={styles.completeContainer}></View>
      <Animated.View
        style={[
          styles.resetButtonContainer,
          {
            width: animation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [70, 100, 70],
              extrapolate: 'clamp',
            }),
            height: animation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [70, 100, 70],
              extrapolate: 'clamp',
            }),
            borderRadius: animation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [35, 50, 35],
            }),
          },
        ]}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            animation.setValue(0);
            Animated.timing(animation, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: false,
            }).start();
            InteractionManager.runAfterInteractions(() => {
              actionResetTodo();
            });
          }}
        >
          <Animated.Text
            style={{
              color: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['#000', 'red', '#000'],
                extrapolate: 'clamp',
              }),
            }}
          >
            Reset
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const WINDOW = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: WINDOW.width * 0.7,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 3,
    margin: 5,
    padding: 16,
    width: 70,
    height: 50,
    // alignSelf: 'flex-end',
  },
  inCompleteContainer: {
    flex: 4,
    backgroundColor: 'lightblue',
  },
  completeContainer: {
    flex: 4,
    backgroundColor: 'lightyellow',
  },
  renderItemContainer: {
    height: 45,
    padding: 8,
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#000',
  },
  resetButtonContainer: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 35,
    margin: 5,
  },
});

const mapStateToProps = (state) => {
  const { todoList } = state;
  return { todoList };
};

const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    { actionAddTodo, actionDeleteTodo, actionResetTodo },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionToProps)(ToDoListScreen);
