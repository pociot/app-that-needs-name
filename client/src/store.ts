import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import expenses from './state/expenses'
import entryBudget from './state/entryBudget';

const reducers = combineReducers({
  expenses,
  entryBudget
});

export type TRootState = ReturnType<typeof reducers>

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;