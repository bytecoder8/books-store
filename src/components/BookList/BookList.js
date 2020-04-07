import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withBookStoreService from '../../hocs/withBookstoreService'
import { compose } from '../../utils'
import { fetchBooks } from '../../redux/actions/books'
import { addBookToCart } from '../../redux/actions/cart'
import BookListItem from '../BookListItem'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import './BookList.css'


function BookListRenderer({ books, onAddToCart }) {
  return (
    <ul className="book-list">
      { books.map( book => (
        <li key={book.id}>
          <BookListItem
            book={ book }
            onAddToCart={() => onAddToCart(book)} 
            />
        </li>
      )) }
    </ul>
  )
}

class BookListContainer extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    error: PropTypes.string,
    onAddToCart: PropTypes.func
  }

  static defaultProps = {
    onAddToCart: () => {}
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, error, loading, onAddToCart } = this.props

    if (loading) {
      return <Loader />
    }

    if (error) {
      return <ErrorMessage error={error} />
    }

    return <BookListRenderer books={books} onAddToCart={onAddToCart} />
  }
}

const mapStateToProps = state => state.books

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch), // returns a closure,
  onAddToCart: (book) => dispatch(addBookToCart(book))
})


export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
