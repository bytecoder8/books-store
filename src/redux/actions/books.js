import { REQUEST, SUCCESS, FAILURE, FETCH_BOOKS } from '../types'


const booksRequested = () => ({
  type: FETCH_BOOKS + REQUEST
})

const loadBooks = (newBooks) => ({
  type: FETCH_BOOKS + SUCCESS,
  payload: newBooks
})

const booksError = (error) => ({
  type: FETCH_BOOKS + FAILURE,
  payload: error
})

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())

  bookstoreService.getBooks()
    .then(books => dispatch(loadBooks(books)))
    .catch(error => dispatch(booksError(error)))
}

export {
  fetchBooks
}
