import { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from '../types'


export const addItemToWishList = (bookId) => ({
  type: ADD_ITEM_TO_WISHLIST,
  payload: bookId
})

export const removeItemFromWishList = (bookId) => ({
  type: REMOVE_ITEM_FROM_WISHLIST,
  payload: bookId
})
