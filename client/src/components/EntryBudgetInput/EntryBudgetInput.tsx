import React, { Component, ComponentType, FormEvent } from 'react';
import { compose } from 'redux';
import { Button, TextField } from '@material-ui/core';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { Connectable, TConnectableProps } from './Connectable.hoc';

interface IOwnProps {
}

type TProps = IOwnProps & TConnectableProps

interface IState {
  amount: number;
}

class EntryBudgetInput extends Component<TProps, IState> {
  public state = {
    amount: 5000
  };

  public render() {
    return (
      <form onSubmit={this.onSubmit}>
        <NumberFormat
          value={this.state.amount}
          onValueChange={this.onAmountChange}
          thousandSeparator={true}
          suffix=" PLN"
          customInput={TextField}
        />
        <Button
          type="submit"
        >
          Submit
        </Button>
      </form>
    )
  }

  private onAmountChange = (values: NumberFormatValues) => {
    const { value } = values;
    this.setState({
      amount: Number(value)
    })
  };

  private onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.setEntryBudget({ amount: this.state.amount })
  }
}

export default compose(
  Connectable
)(EntryBudgetInput) as ComponentType<IOwnProps>;