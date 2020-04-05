import React from 'react'
import PropTypes from 'prop-types'


function BookListItem({ book }) {
  const { title, author } = book
  return (
    <>
      <div>{ title }</div>
      <div>{ author }</div>
    </>
  )
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookListItem
