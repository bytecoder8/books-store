import React from 'react'
import BookList from '../components/BookList'


function HomePage({ bookstoreService }) {
  return (
    <div>
      <h1>Books</h1>
      <BookList />
    </div>
  )
}

export default HomePage
