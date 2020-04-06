import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withBookStoreService from '../../hocs/withBookstoreService'
import { compose } from '../../utils'
import { booksRequested, loadBooks, booksError } from '../../redux/actions'
import BookListItem from '../BookListItem'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import './BookList.css'


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    const { bookstoreService,
      booksRequested,
      loadBooks,
      booksError } = this.props

    booksRequested()
    bookstoreService.getBooks()
      .then(books => loadBooks(books))
      .catch(error => booksError(error))
  }

  render() {
    const { books, error, loading } = this.props

    if (loading) {
      return <Loader />
    }

    if (error) {
      return <ErrorMessage error={error} />
    }

    return (
      <ul className="book-list">
        { books.map( book => (
          <li key={book.id}><BookListItem book={ book } /></li>
        )) }
      </ul>
    )
  }
}

const mapStateToProps = state => (state.books)

const mapDispatchToProps = {
  booksRequested,
  loadBooks,
  booksError
}


export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
