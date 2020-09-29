import React, { Component } from 'react'

import '../App/App.css'
import './Quiz.css'

import QuestionForm from '../QuestionForm/QuestionForm'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: this.props.quiz,
      name: this.props.quiz.name,
      questions: this.props.quiz.questions,
      currentQuestion: this.props.quiz.questions[0],
      currentIndex: 0,
      numberCorrect: 0,
      numberIncorrect: 0,
      answeredQuestions: []
    }
  }

  nextQuestion(currentIndex) {
    this.setState({currentIndex: currentIndex + 1})
  }

  render() {

    return(
      <section className="quiz-container">
        <h2 className="quiz-name">{this.state.name}</h2>
        <div className="questions-answers-container">
          <p className="quiz-question">{this.state.currentQuestion.question}</p>
          <QuestionForm
            question={this.state.currentQuestion}
            nextQuestion={this.nextQuestion}
            currentIndex={this.state.currentIndex}
            quizQuestions={this.state.questions}
          />
        </div>
      </section>
    )
  }
}

export default Quiz