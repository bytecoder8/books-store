import booksReducer from './books'
import cartReducer from './cart'
import wishlistReducer from './wishlist'


const rootReducer = (state, action) => ({
  books: booksReducer(state, action),
  cart: cartReducer(state, action),
  wishlist: wishlistReducer(state, action)
})

export default rootReducer
