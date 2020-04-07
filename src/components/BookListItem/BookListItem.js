import React from 'react'
import PropTypes from 'prop-types'


function BookListItem({ book, onAddToCart }) {
  const { title, author } = book
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-subtitle mb-2 text-muted">{ author }</h6>
        <p className="card-text">
          Book Description
        </p>
        <button type="button" className="btn btn-outline-secondary">Add To Favorites</button>
        <button
          type="button"
          className="btn btn-primary ml-2"
          onClick={ onAddToCart }
        >Add to Cart</button>
      </div>
    </div>
  )
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func
}

BookListItem.defaultProps = {
  onAddToCart: () => {}
}


export default BookListItem
