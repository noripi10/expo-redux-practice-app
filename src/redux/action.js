import { ACTION_INCREMENT, ACTION_DECREMENT } from './types/actionType';

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
