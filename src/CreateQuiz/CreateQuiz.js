import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import defaultQuizzes from '../default-quizzes'

import CreateQuestionCard from '../CreateQuestionCard/CreateQuestionCard'

import '../App/App.css';
import './CreateQuiz.css';

class CreateQuiz extends Component {
  constructor() {
    super();
    this.state = {
      quizList: null,
      quizOnEdit: {},
      editingQuizSelected: false,
      newQuizSelected: false,
      newQuiz: {
        name: '',
        url: '',
        numOfQuestions: 0,
        questions: []
      }
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

  createNewQuiz() {
    this.setState({newQuizSelected: true, editingQuizSelected: false})
  }

  editExistingQuiz(e) {
    let quizToEdit = this.state.quizList.find(quiz => e.currentTarget.value === quiz.name)
    this.setState({editingQuizSelected: true, newQuizSelected: false, quizOnEdit: quizToEdit})
  }

  updateNewQuizForm(e) {
    if (e.target.name === 'name') {
      this.setState({newQuiz: {name: e.target.value, url: this.state.newQuiz.url, numOfQuestions: this.state.newQuiz.numOfQuestions, questions: []}})
    } else if (e.target.name === 'url') {
      this.setState({newQuiz: {name: this.state.newQuiz.name, url: e.target.value, numOfQuestions: this.state.newQuiz.numOfQuestions, questions: []}})
    } else if (e.target.name === 'numOfQuestions') {
      this.setState({newQuiz: {name: this.state.newQuiz.name, url: this.state.newQuiz.url, numOfQuestions: e.target.value, questions: []}})
    }
  }

  submitNewQuizParamaeters(e) {
    e.preventDefault()

    let newQuiz = {
      name: this.state.newQuiz.name,
      url: this.state.newQuiz.url,
      numOfQuestions: Array.from({length: this.state.newQuiz.numOfQuestions}, (_, i) => i + 1),
      questions: []
    }

    this.setState(
      {
        quizOnEdit: newQuiz,
        newQuizSelected: false,
        editingQuizSelected: true,
        newQuiz: {
          name: '',
          url: '',
          numOfQuestions: '',
          questions: []
        }
      },
    )
  }

  render() {
    //conditional render quizlist for error when null
    let quizList = this.state.quizList === null ? null : (
      <div className="quiz-list-container">
        {this.state.quizList.map(quiz => {
          return (
            <Button onClick={(e) => this.editExistingQuiz(e, "value")} key={quiz.name} className="quiz-list-name-button" value={quiz.name} variant="contained" color="primary">{quiz.name}</Button>
          )
        })}
        <Button onClick={() => this.createNewQuiz()} className="quiz-list-name-button" variant="contained" color="secondary">New Quiz </Button>
      </div>
    )

    //conditional render content
    let content;
    if (this.state.newQuizSelected === false && this.state.editingQuizSelected === false) {
      content = (
        <section className="create-edit-cards-container">
          <p className="no-content-text">Please select New Quiz or an existing quiz to edit</p>
        </section>
      )
    } else if (this.state.newQuizSelected === true && this.state.editingQuizSelected === false) {
      content = (
        <section className="create-edit-cards-container">
          <form className="new-quiz-form">
            <h2>New Quiz</h2>
            <input onChange={(e) => this.updateNewQuizForm(e)} name="name" value={this.state.newQuiz.name} type="text" className="new-quiz-input" placeholder="Quiz Name" />
            <input onChange={(e) => this.updateNewQuizForm(e)} name="url" value={this.state.newQuiz.url} type="text" className="new-quiz-input" placeholder="Quiz Image URL" />
            <input onChange={(e) => this.updateNewQuizForm(e)} name="numOfQuestions" value={this.state.newQuiz.numOfQuestions} type="number" className="new-quiz-input" placeholder="Number of Questions" />
            <Button onClick={(e) => this.submitNewQuizParamaeters(e)} className="new-quiz-submit-button" type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </section>
      )
    } else if (this.state.newQuizSelected === false && this.state.editingQuizSelected === true) {
      content = (
        <section className="create-edit-cards-container">
          {this.state.quizOnEdit.questions.length === 0 ? (
            this.state.quizOnEdit.numOfQuestions.map(question => {
              return <CreateQuestionCard />
            })
            ) : (
              this.state.quizOnEdit.questions.map(question => {
                return <CreateQuestionCard
                  key={question.question}
                  type={question.type}
                  question={question.question}
                  correctAnswer={question.correct_answer}
                  incorrectAnswers={question.incorrect_answers}
                  />
              })
            )
          }
        </section>
      )
    }

    //return structure
    return(
      <section className="create-quiz-container">
        <aside className="quiz-list-info">
          <div className="quiz-aside-container">
            <h3 className="quiz-aside-header">Quiz List</h3>
            {quizList}
          </div>
        </aside>
        {content}
      </section>
    )
  }
}

export default CreateQuiz

