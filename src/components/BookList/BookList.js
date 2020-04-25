import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withBookstoreService from '../../hocs/withBookstoreService'
import { compose } from '../../utils'
import { fetchBooks } from '../../redux/actions/books'
import useBooksLoader from '../../hooks/useBooksLoader'
import { addBookToCart } from '../../redux/actions/cart'
import { addItemToWishList } from '../../redux/actions/wishlist'
import BookListItem from '../BookListItem'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import './BookList.css'


function BookListRenderer({ books, onAddToCart, onAddToWishList }) {
  return (
    <ul className="book-list">
      { books.map( book => (
        <li key={book.id}>
          <BookListItem
            book={ book }
            onAddToCart={() => onAddToCart(book.id)}
            onAddToWishList={() => onAddToWishList(book.id)}
            />
        </li>
      )) }
    </ul>
  )
}


function BookListContainer({ bookstoreService, onAddToCart, onAddToWishList }) {
  const { loading, error, items } = useBooksLoader(bookstoreService)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return <BookListRenderer
            books={items}
            onAddToCart={onAddToCart}
            onAddToWishList={onAddToWishList}
          />
}

BookListContainer.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  error: PropTypes.string,
  onAddToCart: PropTypes.func
}

BookListContainer.defaultProps = {
  onAddToCart: () => {},
  onAddToWishList: () => {}
}


const mapStateToProps = state => state.books

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch), // returns a closure,
  onAddToCart: (bookId) => dispatch(addBookToCart(bookId)),
  onAddToWishList: (bookId) => dispatch(addItemToWishList(bookId))
})


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
