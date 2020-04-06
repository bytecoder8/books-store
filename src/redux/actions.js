import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUEST } from "./types";

const booksRequested = () => ({
  type: FETCH_BOOKS_REQUEST
})

const loadBooks = (newBooks) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks
})

export {
  booksRequested,
  loadBooks
}
