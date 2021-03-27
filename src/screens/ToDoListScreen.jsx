import React from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { actionAddTodo, actionResetTodo } from '../redux/action';

const ToDoListScreen = ({ todoList, dispatch }) => {
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
            dispatch(
              actionAddTodo({ ID: Math.random().toString(), todo: todoText })
            );
            setTodoText('');
          }}
        >
          <Text>追加</Text>
        </TouchableOpacity>
        {/* <Button title="reset" onPress={() => dispatch(actionResetTodo())} /> */}
      </View>
      <View style={styles.inCompleteContainer}>
        <FlatList
          data={todoList.inComplete || []}
          renderItem={({ item }) => {
            return (
              <View style={styles.renderItemContainer}>
                <Text>{item.todo}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.ID}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>
      <View style={styles.completeContainer}></View>
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
});

const mapStateToProps = (state) => {
  const { todoList } = state;
  return { todoList };
};
export default connect(mapStateToProps)(ToDoListScreen);
