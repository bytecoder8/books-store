import { 
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  INCREASE_CART_COUNT,
  DECREASE_CART_COUNT 
} from '../types'


const initialState = {
  items: [
    // {
    //   id: 1, // book id
    //   title: 'Book Name',
    //   count: 2,
    //   total: 10*2
    // }
  ]
}

const createOrUpdateItem = (book, item = {}) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  }
}

const updateItems = (item, index) => items => {
  if (index === -1) {
    return items.concat(item)
  } else {
    return [
      ...items.slice(0, index),
      item,
      ...items.slice(index + 1)
    ]
  }
}

const removeItem = id => items => {
  return items.filter(item => item.id !== id)
}

const updateItemCount = (book, value) => items => {
  const index = items.findIndex(item => item.id === book.id)
  if (index >= 0) {
    const item = items[index]
    const { count, total } = item

    if (count + value === 0) {
      return removeItem(item.id)(items)
    }

    const updatedItem = {
      ...item,
      count: count + value,
      total: total + book.price * value
    }

    return updateItems(updatedItem, index)(items)
  }
  
  return items
}


const cartReducer = (state = initialState, action) => {
  const { type, payload } = action

  const { items } = state
  switch (type) {
    case ADD_BOOK_TO_CART:
      const book = payload

      const index = items.findIndex(item => item.id === book.id)
      const item = createOrUpdateItem(book, items[index])
      return {
        items: updateItems(item, index)(items)
      }
    case REMOVE_BOOK_FROM_CART:
      return {
        items: removeItem(payload)(items)
      }
    case INCREASE_CART_COUNT:
      return {
        items: updateItemCount(payload, 1)(items)
      }
    case DECREASE_CART_COUNT:
      return {
        items: updateItemCount(payload, -1)(items)
      }
    default:
      return state
  }
}

export default cartReducer
