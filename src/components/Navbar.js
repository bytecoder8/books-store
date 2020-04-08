import React from 'react'
import { NavLink } from 'react-router-dom'
import CartCounter from './CartCounter'


const links = [
  { to: '/', title: 'Home', exact: true },
  { to: '/wishlist', title: 'WishList'},
  { to: '/cart', title: <CartCounter /> },
]


export default function Navbar(props) {
  
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

      </div>
    </nav>
  )
}
