import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import WishListPage from './pages/WishListPage'


function App() {
  return (
    <div className="App container">
      <Navbar />
      <Switch>
        <Route path="/" exact={ true } component={ HomePage } />
        <Route path="/wishlist" component={ WishListPage } />
        <Route path="/cart" component={ CartPage } />
      </Switch>
    </div>
  );
}

export default App
