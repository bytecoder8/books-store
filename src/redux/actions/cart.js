import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART, DECREASE_CART_COUNT, INCREASE_CART_COUNT } from '../types'


export const addBookToCart = (book) => ({
  type: ADD_BOOK_TO_CART,
  payload: book
})


const findBook = (id, globalState) => {
  const { books: { books } } = globalState
  return books.find(book => book.id === id)
}

export const removeBookFromCart = (bookId) => ({
  type: REMOVE_BOOK_FROM_CART,
  payload: bookId
})

export const descreaseItemCount = (bookId) => (dispatch, getState) => {
  dispatch({
    type: DECREASE_CART_COUNT,
    payload: findBook(bookId, getState())
  })
}

export const increaseItemCount = (bookId) => (dispatch, getState) => {
  dispatch({
    type: INCREASE_CART_COUNT,
    payload: findBook(bookId, getState())
  })
}
