import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../data'
import { useProductsContext } from '../context/products_context'
import CartButtons from './CartButtons'
import { useAuth0 } from '@auth0/auth0-react'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { user } = useAuth0()

  return (
    <div className='sidebar-container'>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img
            src='https://winestore-online.com/Themes/Winestore/Assets/images/winestore-logo.svg'
            alt='winestore'
            className='logo'
          />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          {user && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <div className='sidebar-icons'>
          <CartButtons />
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
