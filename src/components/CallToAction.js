import React from 'react'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <section className='call-container'>
      <div className='section-center call-to-action'>
        <div className='image-background'>
          <div className='image-container1'>
            <h3>
              Vinuri <br></br> best seller
            </h3>
            <Link to='/vinuri/bestseller'>
              <FaGreaterThan />
            </Link>
          </div>
        </div>
        <div className='image-background'>
          <div className='image-container2'>
            <h3>
              Gaseste <br></br>vinul potrivit
            </h3>
            <Link to='vinuri/'>
              <FaGreaterThan />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
