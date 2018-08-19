import React, { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { Connectable, TConnectableProps } from './Connectable.hoc';
import { Paper, Typography } from '@material-ui/core';

interface IOwnProps {
}

type TProps = IOwnProps & TConnectableProps;

class RemainingBudget extends Component<TProps> {
  public render() {
    return (
      <Paper  elevation={1}>
        <Typography variant="headline" component="h3">
          {this.props.remainingBudget}
        </Typography>
      </Paper>
    )
  }
}

export default compose(
  Connectable
)(RemainingBudget) as ComponentType<IOwnProps>;