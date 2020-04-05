import { BOOKS_FETCHED } from "./types";

const loadBooks = () => ({
  type: BOOKS_FETCHED,
  payload: []
})

export {
  loadBooks
}
