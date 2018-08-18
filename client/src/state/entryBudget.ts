import { makeReduxDuck } from './_utils';

interface IState {
  amount: number;
}

const INITIAL_STATE: IState = {
  amount: 0
};

const duck = makeReduxDuck('entryBudget', INITIAL_STATE);

export const setEntryBudget = duck.defineAction<{ amount: number }>(
  'SET_ENTRY_BUDGET',
  ({ amount }, newAmount) => ({
    amount: newAmount.amount
  })
);

export default duck.getReducer();