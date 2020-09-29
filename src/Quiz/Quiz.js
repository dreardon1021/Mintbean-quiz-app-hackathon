import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

import '../App/App.css'
import './Quiz.css'

import QuestionForm from '../QuestionForm/QuestionForm'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      quiz: this.props.quiz,
      name: this.props.quiz.name,
      questions: this.props.quiz.questions,
      currentQuestion: this.props.quiz.questions[0],
      numberCorrect: 0,
      numberIncorrect: 0,
      answeredQuestions: [],
    }
  }

  submitResults(userAnswer) {
    if (userAnswer.userAnswer === userAnswer.correctAnswer) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        numberCorrect: this.state.numberCorrect + 1,
        numberIncorrect: this.state.numberIncorrect,
        answeredQuestions: this.state.answeredQuestions.concat({[this.state.currentIndex]: userAnswer}),
        isLoaded: false
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        numberCorrect: this.state.numberCorrect,
        numberIncorrect: this.state.numberIncorrect + 1,
        answeredQuestions: this.state.answeredQuestions.concat({[this.state.currentIndex]: userAnswer}),
        isLoaded: false,
      })
    }

    this.getNextQuestion()
  }

  getNextQuestion() {
    setTimeout(() => this.setState({currentQuestion: this.state.questions[this.state.currentIndex]}), 2000)
  }

  render() {
    let quiz = this.state.currentIndex !== this.state.questions.length ?
    (
      <section className="quiz-container">
        <h2 className="quiz-name">{this.state.name}</h2>
        <div className="questions-answers-container">
          <p className="quiz-question">{this.state.currentQuestion.question}</p>
          <QuestionForm
            question={this.state.currentQuestion}
            submitResults ={this.submitResults.bind(this)}
            quizQuestions={this.state.questions}
          />
        </div>
      </section>
    ) : (
    <section className="quiz-container">
      <div className="quiz-results">
        <h2 className="quiz-name">{this.state.name}</h2>
        <h3>{`Quiz results ${this.state.numberCorrect} / ${this.state.currentIndex} -> ${(this.state.numberCorrect / this.state.currentIndex) * 100}%`}</h3>
      </div>
      <NavLink className="text-decoration-none" to="/"><Button type="submit" variant="contained" color="primary">Home</Button></NavLink>
      <article className="question-results-container">
        {this.state.answeredQuestions.map(question => {
          let keys = Object.keys(question)

          return (
            <div className="individual-question-result">
              <h5>{question[keys[0]].question}</h5>
              {question[keys[0]].userAnswer === question[keys[0]].correctAnswer ? (
                    <p className="correct-text">{`You answered correctly with ${question[keys[0]].correctAnswer}`}</p>
                  ) : (
                    <p className="incorrect-text">{`You answered incorrectly with ${question[keys[0]].userAnswer}. The correct answer is ${question[keys[0]].correctAnswer}`}</p>
                  )
              }
            </div>
          )
        })}
      </article>
    </section>)


    return(
      quiz
    )
  }
}

export default Quiz