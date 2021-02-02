import { createStore } from 'redux';
import { reducers } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	persistStore,
	persistReducer,
	persistCombineReducers,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// whitelist or blacklist
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whiteList: ['counter'],
};

// persistReducerでラップしてあげることで永続化する
const persistedReducer = persistReducer(persistConfig, reducers);

// ラップしたものをstoreとして扱う
const store = createStore(persistedReducer, composeWithDevTools());

export const persister = persistStore(store);
export default store;
