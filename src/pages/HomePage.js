import React from 'react'
import BookList from '../components/BookList'
import Cart from '../components/Cart'


function HomePage({ bookstoreService }) {
  return (
    <div>
      <h1>Books</h1>
      <BookList />
      <Cart />
    </div>
  )
}

export default HomePage
