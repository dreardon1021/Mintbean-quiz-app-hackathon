import React from 'react'

import '../App/App.css'
import './QuizSelection.css'

const QuizSelection = ({ quizzes }) => {
  return (
    <section>
      {quizzes.map(quiz => {
      return (
        <h2>{quiz.name}</h2>
      )
    })}
    </section>
    
  )
}

export default QuizSelection