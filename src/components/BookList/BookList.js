import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withBookStoreService from '../../hocs/withBookstoreService'
import BookListItem from '../BookListItem'
import './BookList.css'


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  componentDidMount() {
    const service = this.props.bookstoreService
    const books = service.getBooks()
    this.props.booksLoaded(books)
  }

  render() {
    const { books } = this.props

    return (
      <ul className="book-list">
        { books.map( book => (
          <li key={book.id}><BookListItem book={ book } /></li>
        )) }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books
})

const mapDispatchToProps = (dispatch) => ({
  booksLoaded: newBooks => {
    dispatch({
      type: 'FETCH_BOOKS_SUCCESS',
      payload: newBooks
    })
  }
})


export default withBookStoreService(connect(mapStateToProps, mapDispatchToProps)(BookList))
