import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'
import { initialState as booksInitialState } from '../redux/reducers/books'


let persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

store.subscribe(() => {
  const { cart, wishlist, books } = store.getState()

  let bookIdArr = []
  cart.items.forEach(item => bookIdArr.push(item.id))
  wishlist.items.forEach(id => bookIdArr.push(id))
  // remove duplicates
  bookIdArr = bookIdArr.filter((book, index) => bookIdArr.indexOf(book) === index)

  const savedBooks = books.items.filter( book => bookIdArr.indexOf(book.id) !== -1 )

  saveToLocalStorage({
    cart,
    wishlist,
    books: { ...booksInitialState, items: savedBooks } 
  })
})

export default store
