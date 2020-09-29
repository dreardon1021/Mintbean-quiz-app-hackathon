import React, { Component } from 'react';
import { Button } from '@material-ui/core'

import '../App/App.css';
import './QuestionForm.css';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleAnswers: [...this.props.question.incorrect_answers, this.props.question.correct_answer],
      question: this.props.question
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

  render() {
    let form;

    if (this.state.question.type === 'multiple') {
      form = (
        <form class="multiple-form">
          {this.state.possibleAnswers.map(answer => {
            return (
              <div className="potential-answer">
                <input type="radio" name={answer} value={answer}></input>
                <label for={answer}>{answer}</label>
              </div>
            )
          })}
          <Button type="submit" className="submit-answer-btn text-decoration-none" variant="contained" color="primary">Submit</Button>
        </form>
      )
    } else if (this.state.question.type === 'boolean') {

    }

    return(
      form
    )
  }
}

export default QuestionForm