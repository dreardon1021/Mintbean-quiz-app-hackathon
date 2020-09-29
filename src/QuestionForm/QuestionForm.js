import React, { Component } from 'react';
import { Button } from '@material-ui/core'

import '../App/App.css';
import './QuestionForm.css';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleAnswers: [...this.props.question.incorrect_answers, this.props.question.correct_answer],
      question: this.props.question,
      selectedAnswer: '',
      quizQuestions: this.props.quizQuestions
    }
  }

  componentDidMount() {
    this.setState({possibleAnswers: this.shuffleAnswers(this.state.possibleAnswers)})
  }

  shuffleAnswers(array) {
    var i = 0, j = 0, temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  selectAnswer(e) {
    this.setState({selectedAnswer: e.target.value})
  }

  submitAnswer(e) {
    e.preventDefault()
    let answer = {
      question: this.state.question,
      userAnswer: this.state.selectedAnswer,
      correctAnswer: this.state.question.correct_answer
    }

    this.props.submitResults(answer)
  }

  render() {
    let form;

    if (this.state.question.type === 'multiple') {
      form = (
        <form className="multiple-form">
          {this.state.possibleAnswers.map(answer => {
            return (
              <div key={answer} className="potential-answer">
                <input onChange={(e) => this.selectAnswer(e)} type="radio" name={answer} value={answer} checked={this.state.selectedAnswer === answer}></input>
                <label>{answer}</label>
              </div>
            )
          })}
          <Button onClick={(e) => this.submitAnswer(e)} type="submit" className="submit-answer-btn" variant="contained" color="primary">Submit</Button>
        </form>
      )
    } else if (this.state.question.type === 'boolean') {

    } else {

    }







    return(
      form
    )
  }
}

export default QuestionForm