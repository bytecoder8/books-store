import React from 'react'
import PropTypes from 'prop-types'
import WishListButton from '../WishListButton'
import AddToCartButton from '../AddToCartButton'


function BookListItem({ book, onAddToCart, onAddToWishList }) {
  const { id, title, author } = book
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-subtitle mb-2 text-muted">{ author }</h6>
        <p className="card-text">
          Book Description
        </p>
        <WishListButton
          itemId={ id }
          onAddToWishList={ onAddToWishList }
        />
        <AddToCartButton
          itemId={ id }
          onAddToCart={ onAddToCart }
        />
      </div>
    </div>
  )
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func,
  onAddToWishList: PropTypes.func
}

BookListItem.defaultProps = {
  onAddToCart: () => {},
  onAddToWishList: () => {}
}


export default BookListItem
