import {makeReduxDuck} from './_utils';

export interface IExpense {
  id: number;
  title: string;
  amount: number;
}

interface IState {
  entities: IExpense[]
}

const INITIAL_STATE: IState = {
  entities: []
};

type TPartialExpense = Pick<IExpense, 'title' | 'amount'>

const duck = makeReduxDuck('expenses', INITIAL_STATE);

export const addExpense = duck.defineAction<TPartialExpense>(
    'ADD_EXPENSE',
    ({ entities }, expense) => ({
      entities: entities.concat({
        id: Date.now(),
        ...expense
      })
    })
);

export const deleteExpense = duck.defineAction<{ id: number }>(
  'DELETE_EXPENSE',
  ({ entities }, { id }) => ({
    entities: entities.filter(entity => entity.id !== id)
  })
);

export default duck.getReducer();