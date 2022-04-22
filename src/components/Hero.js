import React from 'react'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-center'>
          <div className='hero-overlay'>
            <h1 className='hero-title'>
              Vinul pe care <br></br>
              îl cauți. <br></br> Il aducem <br></br>mai aproape
            </h1>
            <Link to='/vinuri' className='btn hero-btn'>
              Cumpara acum
              <FaGreaterThan className='hero-icon' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
