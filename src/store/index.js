import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/index';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware)
);
