import { FETCH_BOOKS_SUCCESS } from '../types'


const initialState = []

const bookReducer = ( state = initialState, action ) => {
  const { type, payload } = action
  
  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return payload
    default:
      return state
  }
}

export default bookReducer
