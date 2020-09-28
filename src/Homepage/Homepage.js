import React from 'react'
import Button from "@material-ui/core/Button";
import { NavLink } from 'react-router-dom'

import '../App/App.css'
import './Homepage.css'

const Homepage = () => {
  return(
    <section className="homepage-container">
      <p className="homepage-text">This is an application that allows you to create your own quizzes and take some provided quizzes. On completion of a quiz, you will recieve your score and any correct answers if you chose incorrect.</p>
      <div className="homepage-buttons-container">
        <NavLink className="text-decoration-none" to="/create-quiz"><Button className="blue-button" variant="contained" color="primary">Create Quiz</Button></NavLink>
        <NavLink className="text-decoration-none" to="/quiz-selection"><Button className="blue-button" variant="contained" color="primary">Take Quiz</Button></NavLink>
      </div>
    </section>
  )
}

export default Homepage