import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AmountButtons from './AmountButtons'

import { useCartContext } from '../context/cart_context'

const AddtoCart = ({ product, id, image }) => {
  const { addToCart } = useCartContext()
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1)
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }
  return (
    <div className='add-to-cart'>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Link
        to='/cosul-meu'
        className='btn add-btn'
        onClick={() => addToCart(id, amount, product, image)}
      >
        Adauga in cos
      </Link>
    </div>
  )
}

export default AddtoCart
