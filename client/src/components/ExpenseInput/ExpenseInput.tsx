import React, { ChangeEvent, Component, ComponentType, FormEvent } from 'react';
import NumberFormat, {
  NumberFormatProps,
  NumberFormatValues} from 'react-number-format';
import { Button, TextField } from '@material-ui/core';
import { compose } from 'redux';
import { Connectable, TConnectableProps } from './Connectable.hoc';


interface IState {
  title: string;
  amount: number;
}

interface IOwnProps {}

type TProps = IOwnProps & TConnectableProps & NumberFormatProps

class ExpenseInput extends Component<TProps, IState> {
  public state = {
    title: '',
    amount: 1000,
  };

  public render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.title}
          onChange={this.onTitleChange}
          placeholder="Expense"
        />
        {'  '}
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

  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, amount } = this.state;
    this.props.addExpense({ title, amount });
    this.setState({
      title: '',
      amount: 1000
    })
  };

  private onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ title: value });
  };

  private onAmountChange = (values: NumberFormatValues) => {
    const { value } = values;
    this.setState({
      amount: Number(value)
    })
  }
}

export default compose(
  Connectable
)(ExpenseInput) as ComponentType<IOwnProps>;