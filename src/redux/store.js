import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'


let persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

store.subscribe(() => {
  const { cart, wishlist } = store.getState()

  saveToLocalStorage({
    cart,
    wishlist
  })
})

export default store
