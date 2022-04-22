import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const CartTotals = () => {
  const { total_amount, livrare } = useCartContext()
  const { user, loginWithRedirect } = useAuth0()
  return (
    <section className='cart-total-section'>
      <div>
        <article>
          <h5 style={{ fontSize: '14px', fontWeight: '700' }}>
            subtotal : <span>{total_amount} MDL</span>
          </h5>
          <h4 style={{ fontSize: '.8rem' }}>
            Livrare : <span>{livrare} MDL</span>
          </h4>
          <hr style={{ border: '.3px solid #d0d0c8' }} />
          <h4
            style={{
              marginTop: '2rem',
              textTransform: 'inherit',
              fontSize: '1.2rem',
            }}
          >
            {' '}
            Total spre plata : <span>{total_amount + livrare} MDL</span>
          </h4>
        </article>
        {user ? (
          <Link to='/checkout' className='btn checkout-btn'>
            Checkout
          </Link>
        ) : (
          <button
            type='button'
            className='btn checkout-btn'
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </section>
  )
}

export default CartTotals
