import {
  ACTION_INCREMENT,
  ACTION_DECREMENT,
  ACTION_COUNTER_RESET,
  ACTION_ADD_TODO,
  ACTION_UPDATE_TODO,
  ACTION_DELETE_TODO,
  ACTION_RESET_TODO,
} from './types/actionType';

export const actionIncrement = () => {
  return {
    type: ACTION_INCREMENT,
  };
};
export const actionDecrement = () => {
  return {
    type: ACTION_DECREMENT,
  };
};
export const actionReset = () => {
  return {
    type: ACTION_COUNTER_RESET,
  };
};

export const actionAddTodo = (todo) => {
  return {
    type: ACTION_ADD_TODO,
    payload: todo,
  };
};
export const actionUpdateTodo = (todo) => {
  return {
    type: ACTION_UPDATE_TODO,
    payload: todo,
  };
};
export const actionDeleteTodo = (todo) => {
  return {
    type: ACTION_DELETE_TODO,
    payload: todo,
  };
};
export const actionResetTodo = () => {
  return {
    type: ACTION_RESET_TODO,
  };
};
