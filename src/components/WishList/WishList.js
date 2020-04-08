import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WishListItem from '../WishListItem'
import './WishList.css'
import { removeItemFromWishList } from '../../redux/actions/wishlist'
import { addBookToCart } from '../../redux/actions/cart'


function WishList() {

  const items = useSelector(({ wishlist: { items }, books: { items: books } }) => {
    return items.map(item => {
      const book = books.find(book => book.id === item)
      return book
    })
  })

  const dispatch = useDispatch()

  return (
    <ul className="wish-list">
      { items.map( item => (
        <li key={item.id}>
          <WishListItem
            item={ item }
            onAddToCart={() => dispatch(addBookToCart(item.id))}
            onRemove={ () => dispatch(removeItemFromWishList(item.id)) }
          />
        </li>
      )) }
    </ul>
  )
}

export default WishList
