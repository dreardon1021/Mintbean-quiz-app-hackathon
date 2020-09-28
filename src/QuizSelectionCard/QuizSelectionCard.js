import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core'

import '../App/App.css';
import './QuizSelectionCard.css';

const QuizSelectionCard = ({ quiz }) => {
  return (
    <article className="quiz-card">
      <h3 className="quiz-card-name">{quiz.name}</h3>
      <img key={quiz.name} className="quiz-card-image" src={quiz.image} alt={quiz.name} />
      <p className="quiz-card-text">Quiz Length: {quiz.questions.length} questions</p>
      <NavLink className="text-decoration-none" to={`/quiz-selection/${quiz.name}`}><Button className="quiz-button text-decoration-none" variant="contained" color="primary">Select Quiz</Button></NavLink>
    </article>
  )
}

export default QuizSelectionCard