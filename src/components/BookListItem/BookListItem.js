import React from 'react'
import PropTypes from 'prop-types'


function BookListItem({ book }) {
  const { title, author } = book
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-subtitle mb-2 text-muted">{ author }</h6>
        <p className="card-text">
          Book Description
        </p>
        <a href="/" className="card-link">Add To Favorites</a>
        <a href="/" className="card-link">Add To Cart</a>
      </div>
    </div>
  )
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookListItem
