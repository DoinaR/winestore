import React from 'react'
import StripeCheckout from '../components/StripeCheckout'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <div className='page'>
        <h4 className='checkout-page-title'>Checkout </h4>
        {cart.length < 1 ? (
          <div className='cart-page-empty empty'>
            <h2>Cosul tau este gol</h2>
            <br />
            <Link to='/vinuri' className='btn'>
              Umple cosul
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  )
}

export default CheckoutPage
