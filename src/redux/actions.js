import { FETCH_BOOKS_SUCCESS } from "./types";

const loadBooks = (newBooks) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks
})

export {
  loadBooks
}
