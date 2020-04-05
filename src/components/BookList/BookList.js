import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookListItem from '../BookListItem'


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return (
      <ul>
        { books.map( book => (
          <li key={book.id}><BookListItem book={ book } /></li>
        )) }
      </ul>
    )
  }
}


export default BookList

