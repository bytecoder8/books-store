import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../types'


const initialState = {
  loading: false,
  books: [],
  error: ''
}

const bookReducer = ( state = initialState, action ) => {
  const { type, payload } = action
  
  switch (type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true, error: '' }
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: payload, loading: false, error: '' }
    default:
      return state
  }
}

export default bookReducer
