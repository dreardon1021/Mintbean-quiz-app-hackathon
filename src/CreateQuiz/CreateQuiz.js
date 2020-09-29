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
      editingQuiz: false
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
    return(
      <section className="create-quiz-container">
        <aside className="quiz-list-info">
          <div className="quiz-aside-container">
            <h3 className="quiz-aside-header">Current Quiz</h3>
          </div>
        </aside>
      </section>
    )
  }
}

export default CreateQuiz

