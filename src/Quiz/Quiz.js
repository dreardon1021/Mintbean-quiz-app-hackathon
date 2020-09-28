import React, { Component } from 'react'

import '../App/App.css'
import './Quiz.css'

class Quiz extends Component {
  constructor({ id, quizzes }) {
    super({ id, quizzes });
    this.state = {
      questions: [],
      numberCorrect: 0,
      numberIncorrect: 0,
    }
  }

  componentDidMount() {
    this.setState({questions: this.quizzes.find(quiz => quiz.name === this.id)})
  }

  render() {
    return(
      <h2>quiz</h2>
    )
  }

}

export default Quiz