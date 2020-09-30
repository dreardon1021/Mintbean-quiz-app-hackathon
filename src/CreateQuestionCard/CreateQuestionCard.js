import React, { Component } from 'react'
import { Button } from '@material-ui/core'

import './CreateQuestionCard.css'

class CreateQuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      question: '',
      correctAnswer: '',
      incorrectAnswers: []
    }
  }

  componentDidMount() {
   let stateObj = this.props === {} ? {
    type: '',
    question: '',
    correctAnswer: '',
    incorrectAnswers: []
    } : this.props

    console.log(this.props)

    this.setState(stateObj)
  }

  render() {
    let answerFields;
    if(this.state.type === 'multiple') {
      answerFields = (
        <div className="answers-container">
          <div className="correct-container">
            <label for="correct-answer">Correct Answer:</label>
            <input value={this.state.correctAnswer} placeholder="Correct Answer" />
          </div>
          <div className="incorrect-container">
            <label for="incorrect-answers">Incorrect Answers:</label>
            <input value={this.state.incorrectAnswers[0]} placeholder="Incorrect Answer 1" />
            <input value={this.state.incorrectAnswers[1]} placeholder="Incorrect Answer 2" />
            <input value={this.state.incorrectAnswers[2]} placeholder="Incorrect Answer 3" />
          </div>
        </div>
      )
    } else if (this.state.type === 'boolean') {
      answerFields = (
      <div className="answers-container">
        <label for="correct-answer-boolean">Correct Answer:</label>
        <select value={this.state.correctAnswer} name="types">
          <option value="multiple">True</option>
          <option value="boolean">False</option>
        </select>
        <label for="incorrect-answer-boolean">Correct Answer:</label>
        <select value={this.state.incorrectAnswers} name="types">
          <option value="multiple">True</option>
          <option value="boolean">False</option>
        </select>
      </div>
      )
    } else if (this.state.type === 'ordered') {
        //add this when ready
    }


    return(
      <article className="question-card" key={this.props.question}>
        <form>
          <div className="type-container">
            <label for="type">Question Type:</label>
            <select value={this.state.type} name="types">
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True or False</option>
              <option value="ordered">Ordered</option>
            </select>
          </div>
          <textarea value={this.state.question} placeholder="Question"></textarea>
          {answerFields}
        </form>
      </article>
    )
  }
}

export default CreateQuestionCard
