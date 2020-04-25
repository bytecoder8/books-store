import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import withBookstoreService from '../../hocs/withBookstoreService'
import WishListItem from '../WishListItem'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import { removeItemFromWishList } from '../../redux/actions/wishlist'
import { addBookToCart } from '../../redux/actions/cart'
import useBooksLoader from '../../hooks/useBooksLoader'
import './WishList.css'


function WishList({ bookstoreService }) {

  const dispatch = useDispatch()

  const items = useSelector(({ wishlist: { items }, books: { items: books } }) => {
    return items.map(item => {
      const book = books.find(book => book.id === item)
      return book
    })
  })


  const { loading, error } = useBooksLoader(bookstoreService)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

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

export default withBookstoreService()(WishList) 
