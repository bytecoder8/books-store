import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


const links = [
  { to: '/', title: 'Home', exact: true },
  { to: '/cart', title: 'Cart' },
]


export default function Navbar(props) {
  const { serviceName, onServiceChange } = props

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" exact className="navbar-brand">BookStore</NavLink>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          { links.map( link => 
            <NavLink
              to={ link.to }
              exact={ link.exact }
              key={ link.to }
              className="nav-link"
            >{ link.title }</NavLink>
          )}
        </ul>

        <form className="form-inline ml-3">
          Current API: { serviceName }
          <button
            className="btn btn-sm btn-outline-success ml-1"
            type="button"
            onClick={ onServiceChange }
          >Switch</button>
        </form>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  serviceName: PropTypes.string,
  onServiceChange: PropTypes.func
}

Navbar.defaultProps = {
  serviceName: 'Unknown',
  toggleService: () => {}
}
