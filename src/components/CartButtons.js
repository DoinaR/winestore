import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { FiUserMinus, FiUserPlus } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useAuth0 } from '@auth0/auth0-react'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <div className='cart-wrapper'>
      <div className='cart-btn-wrapper'>
        <button type='button' className='nav-icons' onClick={closeSidebar}>
          <BsHeart />
        </button>
        <Link
          to='/cosul-meu'
          className='nav-icons cart-btn'
          onClick={closeSidebar}
        >
          {' '}
          <span className='cart-container'>
            <GiShoppingCart style={{ fontSize: '25px' }} />
            <span className='cart-value'>{total_items}</span>
          </span>
        </Link>

        {user ? (
          <button
            type='button'
            className='nav-icons auth-btn'
            onClick={() => {
              clearCart()
              logout({ returnTo: window.location.origin })
            }}
          >
            {' '}
            {/* Logout */}
            <FiUserMinus style={{ marginLeft: '5px' }} />
          </button>
        ) : (
          <button
            type='button'
            className='nav-icons auth-btn'
            onClick={loginWithRedirect}
          >
            {' '}
            {/* Login */}
            <FiUserPlus style={{ marginLeft: '5px' }} />
          </button>
        )}
      </div>
    </div>
  )
}

export default CartButtons
