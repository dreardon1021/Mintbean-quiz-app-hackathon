import React from 'react';

import QuizSelectionCard from '../QuizSelectionCard/QuizSelectionCard';

import '../App/App.css';
import './QuizSelection.css';

const QuizSelection = ({ quizzes }) => {
  return (
    <section className="quiz-selection-container">
      {quizzes.map(quiz => {
      return (
        <QuizSelectionCard quiz={quiz} />
      )
    })}
    </section>
  )
}

export default QuizSelection