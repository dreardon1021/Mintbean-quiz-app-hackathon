import React from 'react'
import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <nav>
      <NavLink>
        <h1 className="Logo">Quiz ? App</h1>
      </NavLink>
    </nav>
  )
}

export default Header