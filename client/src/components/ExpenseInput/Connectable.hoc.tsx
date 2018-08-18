import { connect } from 'react-redux';
import { TRootState } from '../../store';

import { addExpense, deleteExpense } from '../../state/budget';

const mapStateToProps = (state: TRootState) => ({
  expenses: state.budget
});

const mapDispatchToProps = {
  addExpense, deleteExpense
};

export type TConnectableProps =
    & ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps

export const Connectable = connect(
    mapStateToProps,
    mapDispatchToProps
);