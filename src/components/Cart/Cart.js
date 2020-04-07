import React from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import { removeBookFromCart, descreaseItemCount, increaseItemCount } from '../../redux/actions/cart'


function Cart({ items, removeItem, increase, decrease }) {

  const renderRow = (item, index) => {
    const { id, title, count, total } = item

    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>
          {count}
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm ml-1"
            onClick={ () => increase(id) }
          >+</button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm ml-1"
            onClick={ () => decrease(id) }
          >-</button>
        </td>
        <td>${total}</td>
        <th>
          <button
            type="button"
            className="btn btn-warning"
            onClick={ () => removeItem(id) }
          >Delete</button>
        </th>
      </tr>
    )
  }

  const total = items.reduce((acc, val) => acc += val.total, 0)

  return (
    <div className="cart">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state.cart
const mapDispatchToProps = {
  removeItem: removeBookFromCart,
  decrease: descreaseItemCount,
  increase: increaseItemCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
