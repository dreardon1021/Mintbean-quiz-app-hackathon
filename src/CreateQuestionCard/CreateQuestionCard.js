import React, { Component } from 'react'

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

  render() {


    return(
      <article key={this.props.question}>
        <form>
          <input type="text" placeholder="type" />
        </form>
      </article>
    )
  }
}

export default CreateQuestionCard
