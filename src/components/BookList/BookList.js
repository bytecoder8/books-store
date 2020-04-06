import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withBookStoreService from '../../hocs/withBookstoreService'
import { compose } from '../../utils'
import { fetchBooks } from '../../redux/actions'
import BookListItem from '../BookListItem'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import './BookList.css'


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  componentDidMount() {
    this.props.fetchBooks()
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

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch) // returns a closure
})


export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
