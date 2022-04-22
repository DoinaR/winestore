import React from 'react'

const CartColumns = () => {
  return (
    <div className='cart-columns'>
      <div className='cart-columns-content'>
        <h5>articol</h5>
        <h5>pret</h5>
        <h5>cantitate</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr style={{ border: '.1px solid #d0d0c8' }} />
    </div>
  )
}

export default CartColumns
