import { connect } from 'react-redux';
import { TRootState } from '../../store';
import { setEntryBudget } from '../../state/budget';

const mapStateToProps = (state: TRootState) => ({
  entryBudget: state.budget
});

const mapDispatchToProps = {
  setEntryBudget
};

export type TConnectableProps =
    & ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps

export const Connectable = connect(
    mapStateToProps,
    mapDispatchToProps
);