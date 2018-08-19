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
  totalExpensesAmount: number;
}

const INITIAL_STATE: IState = {
  entryBudget: 5000,
  remainingBudget: 5000,
  expenses: [],
  totalExpensesAmount: 0
};

const duck = makeReduxDuck('entryBudget', INITIAL_STATE);

export const addExpense = duck.defineAction<{ title: string, amount: number }>(
  'ADD_EXPENSE',
  ({ entryBudget, expenses, totalExpensesAmount }, countingObject) => {
    const sum = totalExpensesAmount + countingObject.amount;
    return ({
      expenses: expenses.concat({
        id: Date.now(),
        title: countingObject.title,
        amount: countingObject.amount
      }),
      remainingBudget: entryBudget - sum,
      totalExpensesAmount: sum
    });

  }
);

export const deleteExpense = duck.defineAction<{ id: number }>(
  'DELETE_EXPENSE',
  ({ expenses, entryBudget, totalExpensesAmount }, countingObject) => {
    const sum = expenses.reduce((previousValue, next) =>
      next.id !== countingObject.id ? previousValue + next.amount: previousValue, 0);
    return ({
      expenses: expenses.filter(entity => entity.id !== countingObject.id),
      remainingBudget: entryBudget - sum,
      totalExpensesAmount: sum
    })
  }
);

export const setEntryBudget = duck.defineAction<{ entryBudget: number }>(
  'SET_ENTRY_BUDGET',
  ({ expenses, entryBudget, totalExpensesAmount }, countingObject) => {
    window.console.log('inside setEntryBudget');
    return ({
      entryBudget: countingObject.entryBudget,
      remainingBudget: countingObject.entryBudget - totalExpensesAmount
    })
  }
);

export default duck.getReducer();