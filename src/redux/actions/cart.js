import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART, DECREASE_CART_COUNT, INCREASE_CART_COUNT } from '../types'


export const addBookToCart = (bookId) => ({
  type: ADD_BOOK_TO_CART,
  payload: bookId
})


export const removeBookFromCart = (bookId) => ({
  type: REMOVE_BOOK_FROM_CART,
  payload: bookId
})

export const descreaseItemCount = (bookId) => ({
  type: DECREASE_CART_COUNT,
  payload: bookId
})

export const increaseItemCount = (bookId) => ({
  type: INCREASE_CART_COUNT,
  payload: bookId
})
