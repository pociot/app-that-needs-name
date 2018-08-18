import * as React from 'react';
import './App.css';

import logo from '../../logo.svg';
import CashInput from '../ExpenseInput';
import ExpenseList from '../ExpensesList';

class App extends React.Component<{}> {

  public render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <CashInput/>
          <ExpenseList />
        </div>
    );
  }
}

export default App;
