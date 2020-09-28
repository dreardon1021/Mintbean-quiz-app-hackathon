import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuiz: []
    }
  }

  render() {
    return(
      <body>
        <Switch>
          <Route path="/" exact component={
            Header
          }/>
        </Switch>
      </body>
    )
  }
}

export default App;
