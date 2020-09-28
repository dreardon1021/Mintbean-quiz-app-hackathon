import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import Homepage from '../Homepage/Homepage'
import QuizSelection from '../QuizSelection/QuizSelection'

import defaultQuizzes from '../default-quizzes'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [...defaultQuizzes]
    }
  }

  render() {
    return(
      <main>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={
            Homepage
            }
          />
          <Route
            path="/quiz-selection"
            exact
            render = {(routeValues) =>
              <QuizSelection quizzes={this.state.quizzes} {...routeValues}/>
              }
            />
          <Route path="/create-quiz" exact component={
            Homepage
          }/>
        </Switch>
      </main>
    )
  }
}

export default App;
