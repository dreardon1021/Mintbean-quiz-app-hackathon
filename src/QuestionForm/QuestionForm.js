import React, { Component } from 'react';

import '../App/App.css'
import './QuestionForm.css'

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleAnswers: [],
    }
  }

  componentDidMount() {
    console.log(this.props.question)
    // this.setState({possibleAnswers: [...this.props.question.incorrect_answers, this.props.question.correct_answer]})
  }

  render() {
    return(
      <h3>test</h3>
    )
  }
}

export default QuestionForm