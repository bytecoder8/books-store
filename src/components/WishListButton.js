import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'


function WishListButton({ itemId, onAddToWishList }) {
  const isAdded = useSelector(({ wishlist: { items } }) => (
    items.indexOf(itemId) !== -1
  ))

  if (isAdded) {
    return (
      <button
        type="button"
        className="btn btn-outline-secondary disabled"
      >In Wishlist</button>
    )
  }

  return (
    <button
      type="button"
      className="btn btn-outline-info"
      onClick={ onAddToWishList }
    >Wishlist</button>
  )
}

WishListButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  onAddToWishList: PropTypes.func.isRequired
}

export default WishListButton
