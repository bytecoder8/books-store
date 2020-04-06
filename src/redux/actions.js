import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUEST, FETCH_BOOKS_FAILURE } from "./types";

const booksRequested = () => ({
  type: FETCH_BOOKS_REQUEST
})

const loadBooks = (newBooks) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks
})

const booksError = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error
})

export {
  booksRequested,
  loadBooks,
  booksError
}
