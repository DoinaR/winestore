import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from '../components/CartColumns'
import CartItem from '../components/CartItem'
import CartTotals from '../components/CartTotals'

const CartPage = () => {
  const { cart, clearCart } = useCartContext()
  if (cart.length < 1) {
    return (
      <main className='cart-page-empty'>
        <div className='empty'>
          <h4 style={{ textTransform: 'inherit' }}>Cosul tau este gol</h4>
          <Link to='/vinuri' className='btn'>
            Umple cosul
          </Link>
        </div>
      </main>
    )
  }
  return (
    <section className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr style={{ border: '.1px solid #d0d0c8' }} />
      <div className='link-container'>
        <Link to='/vinuri' className='link-btn'>
          {' '}
          Continua cumparaturile
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          Sterge cosul de cumparaturi
        </button>
      </div>
      <CartTotals />
    </section>
  )
}

export default CartPage
