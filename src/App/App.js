import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header'
import Homepage from '../Homepage/Homepage'
import QuizSelection from '../QuizSelection/QuizSelection'
import Quiz from '../Quiz/Quiz'
import CreateQuiz from '../CreateQuiz/CreateQuiz'

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
          <Route
            path="/quiz-selection/:quiz_id"
            component={({ match }) => {
              const { params } = match;
              return (<Quiz
                id={params.quiz_id}
                quiz={this.state.quizzes.find(quiz => params.quiz_id === quiz.name)}
              />)
            }}
          />
          <Route
            path="/create-quiz"
            exact
            component={
              CreateQuiz
            }
          />
        </Switch>
      </main>
    )
  }
}

export default App;
