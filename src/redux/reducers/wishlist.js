import { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from "../types"


const initialState = {
  items: [
    // id - bookId
  ]
}

const wishlistReducer = (globalState, action) => {

  if (globalState === undefined || globalState.wishlist === undefined) {
    return initialState
  }

  const { type, payload } = action

  const { wishlist: { items } } = globalState
  switch (type) {
    case ADD_ITEM_TO_WISHLIST:
      const newItem = +payload
      const index = items.indexOf(newItem)
      if (index === -1) {
        return {
          items: items.concat(newItem)
        }
      }
      return { items }
    case REMOVE_ITEM_FROM_WISHLIST:
      return {
        items: items.filter(item => item !== +payload)
      }
    default:
      return globalState.wishlist
  }
}

export default wishlistReducer
