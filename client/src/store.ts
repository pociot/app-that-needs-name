import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import expenses from './state/expenses'

const reducers = combineReducers({
  expenses
});

export type TRootState = ReturnType<typeof reducers>

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;