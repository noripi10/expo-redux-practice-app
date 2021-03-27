import {
  ACTION_ADD_TODO,
  ACTION_UPDATE_TODO,
  ACTION_DELETE_TODO,
  ACTION_RESET_TODO,
} from '../types/actionType';
import { INITIAL_STATUS } from '../initialState';

export const todoReducer = (state = INITIAL_STATUS.todoList, action) => {
  switch (action.type) {
    case ACTION_ADD_TODO:
      return {
        ...state,
        inComplete: [...state.inComplete, action.payload],
      };
    case ACTION_UPDATE_TODO:
      const updatedTodo = state.inComplete.map((v) => {
        if (v.ID === action.payload.ID) {
          return action.payload;
        }
        return v;
      });
      return {
        ...state,
        inComplete: updatedTodo,
      };
    case ACTION_DELETE_TODO:
      const deletedTodo = state.inComplete.filter(
        (v) => v.ID !== action.payload.ID
      );
      return {
        ...state,
        inComplete: deletedTodo,
      };
    case ACTION_RESET_TODO:
      return INITIAL_STATUS.todoList;
    default:
      return state;
  }
};
