import React from 'react'
import { NavLink } from 'react-router-dom';

import './Header.css'
import '../App/App.css'

const Header = () => {
  return (
    <nav>
      <NavLink className="text-decoration-none logo" to="/">
        <h1 className="logo cursor-pointer">Quiz ? App</h1>
      </NavLink>
    </nav>
  )
}

export default Header