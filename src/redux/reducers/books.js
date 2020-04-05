import { BOOKS_FETCHED } from '../types'


const bookReducer = ( state = [], action ) => {
  switch (action.type) {
    case BOOKS_FETCHED:
      return {
        ...state, books: []
      }
    default:
      return state
  }
}

export default bookReducer
