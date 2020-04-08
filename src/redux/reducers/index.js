import booksReducer from './books'
import cartReducer from './cart'


const rootReducer = (state, action) => ({
  books: booksReducer(state, action),
  cart: cartReducer(state, action)
})

export default rootReducer
