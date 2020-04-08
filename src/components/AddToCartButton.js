import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'


function AddToCartButton({ itemId, onAddToCart }) {
  const isAdded = useSelector(({ cart: { items } }) => (
    items.findIndex( (item) => item.id === itemId) !== -1
  ))

  if (isAdded) {
    return (
      <button
        type="button"
        className="btn btn-outline-primary disabled ml-2"
      >In Cart</button>
    )
  }

  return (
    <button
      type="button"
      className="btn btn-primary ml-2"
      onClick={ onAddToCart }
    >Add to Cart</button>
  )
}

AddToCartButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default AddToCartButton
