import React from 'react'
import { BookstoreServiceConsumer } from '../bookstoreServiceContext'


const withBookstoreService = () => (WrappedComponent) => {
  return (props) => (
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => (
          <WrappedComponent {...props} bookstoreService={bookstoreService} />
        )
      }
    </BookstoreServiceConsumer>
  )
}

export default withBookstoreService
