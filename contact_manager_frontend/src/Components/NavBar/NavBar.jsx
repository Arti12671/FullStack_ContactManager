import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
          <div className="container">
            <Link to={'/'} className='navbar-brand'>
              <i className='fa fa-mobile me-2 text-warning'></i>
              Contact <span className="text-warning">Manager</span>
            </Link>
          </div>
        </nav>
    </div>
  )
}

export default NavBar