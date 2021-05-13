import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="bg-light">
        <div className="container header__nav justify-content-between ">
          <a className="navbar-brand header__title header__link" href="#">Kodeine Photo</a>
          <NavLink
            exact
            className="header__link"
            to="/photos"
            activeClassName="header__link--active"
          >
            Redux Project
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
