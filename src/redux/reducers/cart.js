import { ADD_BOOK_TO_CART } from '../types'


const initialState = {
  items: [
    // {
    //   bookId: 1,
    //   title: 'Book Name',
    //   count: 2,
    //   total: 10*2
    // }
  ]
}

const createOrUpdateItem = (book, item = {}) => {
  const { bookId = book.id, title = book.title, count = 0, total = 0 } = item

  return {
    bookId,
    title,
    count: count + 1,
    total: total + book.price
  }
}

const updateItems = (items, item, index) => {
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


const cartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_BOOK_TO_CART:
      const { items } = state
      const book = payload

      const index = items.findIndex(item => item.bookId === book.id)
      const item = createOrUpdateItem(book, items[index])
      return {
        items: updateItems(items, item, index)
      }
    default:
      return state
  }
}

export default cartReducer
