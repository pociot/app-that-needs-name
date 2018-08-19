import { connect } from 'react-redux';
import { TRootState } from '../../store';

const mapStateToProps = (state: TRootState) => ({
  remainingBudget: state.budget.remainingBudget
});

const mapDispatchToProps = {
};

export type TConnectableProps =
    & ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps

export const Connectable = connect(
    mapStateToProps,
    mapDispatchToProps
);