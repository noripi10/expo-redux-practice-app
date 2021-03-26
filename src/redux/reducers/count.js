import { ACTION_INCREMENT, ACTION_DECREMENT } from '../types/actionType';
import { INITIAL_STATUS } from '../initialState';

export const counterReducer = (state = INITIAL_STATUS.counter, action) => {
	switch (action.type) {
		case ACTION_INCREMENT:
			return {
				...state,
				preCount: state.curCount,
				curCount: state.curCount + 1,
			};
		case ACTION_DECREMENT:
			return {
				...state,
				preCount: state.curCount,
				curCount: state.curCount - 1,
			};
		default:
			return state;
	}
};
