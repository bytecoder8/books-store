import React from 'react'
import { connect } from 'react-redux'


function CartCounter({ count }) {
  return (
    <span className="cartCounter">
      Cart ({ count })
    </span>
  )
}

const mapStateToProps = state => {
  const count = state.cart.items.reduce((acc, val) => acc += val.count, 0)
  return { count }
}

export default connect(mapStateToProps)(CartCounter)
