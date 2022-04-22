import React from 'react'

import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='social-container'>
        {/* <h4 className='footer-text'>Urmareste-ne</h4> */}
        <div className='social-icons'>
          <a
            href='https://www.instagram.com/vincuvin.shop/?hl=en'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>

          <a
            href='https://twitter.com/vincuvin_shop'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter />
          </a>
          <a
            href='https://www.facebook.com/vincuvin.shop/'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookSquare />
          </a>

          <h5>&copy; {new Date().getFullYear()} Wine store holding LLC</h5>
          <p>All Rights Reserved.</p>
          <p style={{ textDecoration: 'underline' }}>Termeni si conditii</p>
        </div>
      </div>
      <div className='subscribe'>
        {/* <h4 className='footer-text'>Fii informat</h4> */}
        <p>
          Fii la curent cu programele despre degustari si ofertele speciale cu
          buletinul nostru informativ săptămânal.
        </p>

        <input
          type='email'
          name='email'
          placeholder='Your email address '
          className='footer-input'
        />
        <button type='submit' className='submit-btn'>
          Aboneaza
        </button>
      </div>
    </footer>
  )
}

export default Footer
