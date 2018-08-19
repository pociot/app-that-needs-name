import React from 'react';
import './App.css';

import logo from '../../logo.svg';
import CashInput from '../ExpenseInput';
import ExpenseList from '../ExpensesList';
import { Grid } from '@material-ui/core';
import EntryBudgetInput from '../EntryBudgetInput/EntryBudgetInput';
import RemainingBudget from '../RemainingBudget/RemainingBudget';

class App extends React.Component<{}> {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid
          container={true}
          spacing={24}
        >
          <Grid item={true} xs={12}>
            <EntryBudgetInput/>
          </Grid>
          <Grid item={true} xs={6}>
            <CashInput/>
            <ExpenseList/>
          </Grid>
          <Grid item={true} xs={12}>
            <RemainingBudget />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
