import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import budget from './state/budget';

const reducers = combineReducers({
  budget
});

export type TRootState = ReturnType<typeof reducers>

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;