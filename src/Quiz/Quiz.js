import React, { Component } from 'react'

import '../App/App.css'
import './Quiz.css'

import QuestionForm from '../QuestionForm/QuestionForm'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      questions: [],
      currentQuestion: {},
      currentIndex: 0,
      numberCorrect: 0,
      numberIncorrect: 0,
    }
  }

  componentDidMount() {
    let currentQuiz = this.props.quizzes.find(quiz => quiz.name === this.props.id)
    this.setState({name: currentQuiz.name, questions: currentQuiz.questions})
  }

  nextQuestion() {
    let nextIteration = this.state.currentIndex += 1
    this.setState({currentIndex: nextIteration, currentQuestion: this.state.questions[nextIteration]})
  }

  render() {
    let question = this.state.questions === undefined ? {question: 'dummy', type: 'multiple'} : this.state.questions[this.state.currentIndex]
    let questionText = question === undefined ? '' : question.question

    return(
      <section className="quiz-container">
        <h2 className="quiz-name">{this.state.name}</h2>
        <div className="questions-answers-container">
          <p className="quiz-question">{questionText}</p>
          <QuestionForm question={question}/>
        </div>
      </section>
    )
  }
}

export default Quiz