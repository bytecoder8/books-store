import { ADD_BOOK_TO_CART } from '../types'


export const addBookToCart = (book) => ({
  type: ADD_BOOK_TO_CART,
  payload: book
})
