import React from 'react'
import { connect } from 'react-redux'
import './Cart.css'


function Cart({ items }) {

  const renderRow = (item, index) => {
    const { bookId, title, count, total } = item

    return (
      <tr key={bookId}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <th>
          <button type="button" className="btn btn-warning">Delete</button>
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
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
