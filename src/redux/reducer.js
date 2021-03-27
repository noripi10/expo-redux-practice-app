import { combineReducers } from 'redux';
import { counterReducer } from './reducers/counter';
import { todoReducer } from './reducers/todo';

// reducerは1つに集約する
// storeは、combineしたkeyごとにcollection（ツリー構造）化される
// このkeyがredux-persistのconfigで扱うwhitelist or blacklist
export const reducers = combineReducers({
  counter: counterReducer,
  todoList: todoReducer,
});
