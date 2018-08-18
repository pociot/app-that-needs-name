import { connect } from 'react-redux';
import { TRootState } from '../../store';
import { deleteExpense } from '../../state/expenses';

const mapStateToProps = (state: TRootState) => ({
  expenses: state.expenses
});

const mapDispatchToProps = {
  deleteExpense
};

export type TConnectableProps =
    & ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps

export const Connectable = connect(
    mapStateToProps,
    mapDispatchToProps
);