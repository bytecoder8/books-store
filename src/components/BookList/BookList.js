import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withBookStoreService from '../../hocs/withBookstoreService'
import { compose } from '../../utils'
import { loadBooks } from '../../redux/actions'
import BookListItem from '../BookListItem'
import './BookList.css'


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  componentDidMount() {
    const service = this.props.bookstoreService
    const books = service.getBooks()
    this.props.loadBooks(books)
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

const mapStateToProps = ({ books }) => ({ books })

const mapDispatchToProps = {
  loadBooks
}


export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
