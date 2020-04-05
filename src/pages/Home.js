import React from 'react'
import BookList from '../components/BookList'
import withBookStoreService from '../hocs/withBookstoreService'


function HomePage({ bookstoreService }) {
  const books = bookstoreService.getBooks()

  return (
    <div>
      <h1>Books</h1>
      <BookList books={ books } />
    </div>
  )
}

export default withBookStoreService(HomePage)
