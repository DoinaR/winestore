import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../data'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  const { user } = useAuth0()

  return (
    <>
      <div className='nav-colored'></div>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img
                src='https://winestore-online.com/Themes/Winestore/Assets/images/winestore-logo.svg'
                alt='winestore logo'
                className='logo'
              />
            </Link>
            <button type='button' className='nav-toggle' onClick={openSidebar}>
              <FaBars className='menu-btn' />
            </button>
          </div>
          <ul className='nav-links'>
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              )
            })}
            {user && (
              <li>
                <Link to='/checkout'>checkout</Link>
              </li>
            )}
          </ul>
          <div>
            <CartButtons />
          </div>
        </div>

        <hr />
      </nav>
      <hr />
    </>
  )
}

export default Navbar
