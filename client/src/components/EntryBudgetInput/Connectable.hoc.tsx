import { connect } from 'react-redux';
import { TRootState } from '../../store';
import { setEntryBudget } from '../../state/entryBudget';

const mapStateToProps = (state: TRootState) => ({
  entryBudget: state.entryBudget
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