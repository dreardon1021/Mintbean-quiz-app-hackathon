import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import Homepage from '../Homepage/Homepage'

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
      <main>
        <Header />
        <Switch>
          <Route path="/" exact component={
            Homepage
          }/>
          <Route path="/create-quiz" exact component={
            Homepage
          }/>
          <Route path="/quiz-selection" exact component={
            Homepage
          }/>
        </Switch>
      </main>
    )
  }
}

export default App;
