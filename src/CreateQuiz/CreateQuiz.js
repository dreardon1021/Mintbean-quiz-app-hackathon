import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import defaultQuizzes from '../default-quizzes'

import '../App/App.css';
import './CreateQuiz.css';

class CreateQuiz extends Component {
  constructor() {
    super();
    this.state = {
      quizList: null,
      editingQuiz: false,
      quizOnEdit: null
    }
  }

  componentDidMount() {
    let quizDataToStore = this.state.quizList === null ? [...defaultQuizzes] : [...this.state.quizList]
    let stringifiedData = JSON.stringify(quizDataToStore);
    localStorage.setItem('quizList', stringifiedData)
    let dataToRetrieve = localStorage.getItem('quizList')
    let parsedData = JSON.parse(dataToRetrieve)

    this.setState({quizList: parsedData})
  }

  render() {
    let currentQuiz = this.state.editingQuiz === false ?  null : (
      <div className="current-quiz-question-container">
        <p>test</p>
      </div>
    )

    let quizList = this.state.quizList === null ? null : (
      <div className="quiz-list-container">
        {this.state.quizList.map(quiz => {
          return (
            <Button className="quiz-list-name-button" variant="contained" color="primary">{quiz.name}</Button>
          )
        })}
      </div>
    )

    return(
      <section className="create-quiz-container">
        <aside className="quiz-list-info">
          <div className="quiz-aside-container">
            <h3 className="quiz-aside-header">Current Quiz</h3>
            {currentQuiz}
          </div>
          <div className="quiz-aside-container">
            <h3 className="quiz-aside-header">Quiz List</h3>
            {quizList}
          </div>
        </aside>
      </section>
    )
  }
}

export default CreateQuiz

