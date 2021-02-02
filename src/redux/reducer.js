import { ACTION_INCREMENT, ACTION_DECREMENT } from './types/actionType';
import { combineReducers } from 'redux';

const INITIAL_STUTUS = {
	count: 0,
};

const counterReducer = (state = INITIAL_STUTUS, action) => {
	switch (action.type) {
		case ACTION_INCREMENT:
			return { ...state, count: state.count + 1 };
		case ACTION_DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

// reducerは1つに集約する
// storeは、combineしたkeyごとにcollection（ツリー構造）化される
// このkeyがreduc-persistのconfigで扱うwhitelist or blacklist
export const reducers = combineReducers({
	counter: counterReducer,
});
