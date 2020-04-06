import { REQUEST, SUCCESS, FAILURE, FETCH_BOOKS } from '../types'


const initialState = {
  loading: false,
  books: [],
  error: ''
}

const bookReducer = ( state = initialState, action ) => {
  const { type, payload } = action
  
  switch (type) {
    case FETCH_BOOKS + REQUEST:
      return { ...state, loading: true, error: '' }
    case FETCH_BOOKS + SUCCESS:
      return { ...state, books: payload, loading: false, error: '' }
    case FETCH_BOOKS + FAILURE:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}

export default bookReducer
