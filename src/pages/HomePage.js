import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import CallToAction from '../components/CallToAction'

const HomePage = () => {
  return (
    <main className='page-wrapper'>
      <div className='home-page-container'>
        <div>
          <Hero />
          <FeaturedProducts />
          <CallToAction />
        </div>
      </div>
    </main>
  )
}

export default HomePage
