import React, { Component, ComponentType, MouseEvent } from 'react';
import { Connectable, TConnectableProps } from './Connectable.hoc';
import { compose } from 'redux';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface IOwnProps {

}

type TProps = IOwnProps & TConnectableProps;

class ExpensesList extends Component<TProps> {
  public render() {
    return (
      <List>
        {this.props.expenses.map(entity => {
          return (
            <ListItem key={entity.id}>
              <ListItemText primary={entity.title} secondary={entity.amount}/>
              <ListItemSecondaryAction>
                <IconButton data-expense-id={entity.id} aria-label="Delete" onClick={this.onButtonClick}>
                  <DeleteIcon/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    )
  }

  private onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { dataset } = event.currentTarget;
    const expenseId = parseInt(dataset.expenseId as string, 10);

    this.props.deleteExpense({ id: expenseId });
    window.console.log(event.currentTarget.dataset);
  }
}

export default compose(
  Connectable
)(ExpensesList) as ComponentType<IOwnProps>;