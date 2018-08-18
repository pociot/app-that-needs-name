import React, {Component, ComponentType, FormEvent} from 'react';
import NumberFormat, {NumberFormatProps} from 'react-number-format';
import {TextField} from '@material-ui/core';
import {compose} from 'redux';
import {Connectable, TConnectableProps} from './Connectable.hoc';


interface IState {
  value: number;
}

type TProps = TConnectableProps & NumberFormatProps

class ExpenseInput extends Component<TProps, IState> {
  public state = {
    value: 1000
  };

  public render() {

    return (
        <form onSubmit={this.handleSubmit}>
          <NumberFormat
              value={this.state.value}
              onValueChange={this.onChangeFunction}
              thousandSeparator={true}
              suffix=" PLN"
              customInput={TextField}
          />
        </form>
    )
  }

  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addExpense({ title: 'some title', amount: this.state.value})
  };

  private onChangeFunction = (values: any) => {
    this.setState({
      value: values.value
    })
  }
}

export default compose(
    Connectable
)(ExpenseInput) as ComponentType<{}>;