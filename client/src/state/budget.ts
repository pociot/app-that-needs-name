import { makeReduxDuck } from './_utils';

export interface IExpense {
  id: number;
  title: string;
  amount: number;
}

interface IState {
  entryBudget: number;
  remainingBudget: number;
  expenses: IExpense[];
}

const INITIAL_STATE: IState = {
  entryBudget: 5000,
  remainingBudget: 0,
  expenses: []
};

const duck = makeReduxDuck('entryBudget', INITIAL_STATE);

export const addExpense = duck.defineAction<{ title: string, amount: number }>(
  'ADD_EXPENSE',
  ({ entryBudget, expenses }, countingObject) => {
    const sum = expenses.reduce((previousValue, next) => previousValue + next.amount, 0) + countingObject.amount;
    return ({
      expenses: expenses.concat({
        id: Date.now(),
        title: countingObject.title,
        amount: countingObject.amount
      }),
      remainingBudget: entryBudget - sum
    });

  }
);

export const deleteExpense = duck.defineAction<{ id: number }>(
  'DELETE_EXPENSE',
  ({ expenses, entryBudget }, countingObject) => {
    const sum = expenses.reduce((previousValue, next) => previousValue + next.amount, 0);
    return ({
      expenses: expenses.filter(entity => entity.id !== countingObject.id),
      remainingBudget: entryBudget - sum
    })
  }
);

export const setEntryBudget = duck.defineAction<{ entryBudget: number }>(
  'SET_ENTRY_BUDGET',
  ({ expenses, entryBudget }, countingObject) => {
    const sum = expenses.reduce((previousValue, next) => previousValue + next.amount, 0);
    return ({
      entryBudget: countingObject.entryBudget,
      remainingBudget: entryBudget - sum
    })
  }
);

export default duck.getReducer();