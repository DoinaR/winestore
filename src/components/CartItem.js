import React from 'react'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'
import { FaTrashAlt } from 'react-icons/fa'

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }
  return (
    <article className='cart-item-container'>
      <div className='cart-item-title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='cart-item-name'>{name}</h5>
          <h5 className='cart-item-price-small'>{price} MDL</h5>
        </div>
      </div>
      <h5 className='cart-item-price'>{price} MDL</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='cart-item-subtotal'>{price * amount} MDL</h5>
      <button
        type='button'
        className='cart-item-remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrashAlt />
      </button>
    </article>
  )
}

export default CartItem
