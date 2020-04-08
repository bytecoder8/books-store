import React from 'react'
import PropTypes from 'prop-types'
import AddToCartButton from '../AddToCartButton'


function WishListItem({ item, onRemove, onAddToCart }) {

  const { id, title, author } = item

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-subtitle mb-2 text-muted">{ author }</h6>
        <p className="card-text">
          Book Description
        </p>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm ml-2"
          onClick={ onRemove }
        >Remove</button>
        <AddToCartButton itemId={ id } onAddToCart={ onAddToCart } />
      </div>
    </div>
  )
}

WishListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
  onAddToCart: PropTypes.func
}

WishListItem.defaultProps = {
  onRemove: () => {},
  onAddToCart: () => {}
}

export default WishListItem
