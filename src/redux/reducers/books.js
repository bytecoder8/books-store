import { REQUEST, SUCCESS, FAILURE, FETCH_BOOKS } from '../types'


const initialState = {
  loading: false,
  items: [],
  error: ''
}

const bookReducer = ( globalState, action ) => {

  if (globalState === undefined || globalState.books === undefined) {
    return initialState
  }

  const { type, payload } = action
  
  switch (type) {
    case FETCH_BOOKS + REQUEST:
      return { ...globalState.books, loading: true, error: '' }
    case FETCH_BOOKS + SUCCESS:
      return { items: payload, loading: false, error: '' }
    case FETCH_BOOKS + FAILURE:
      return { ...globalState.books, error: payload, loading: false }
    default:
      return globalState.books
  }
}

export default bookReducer
