import React from 'react'
import { Link } from 'react-router-dom'
import Flavour from './Flavour'

const Product = ({
  name,
  brand,
  image,
  price,
  featuredGrapes,
  id,
  color,
  flavour1,
  flavour2,
}) => {
  return (
    <>
      <article className='featured-article'>
        <div className='product-container'>
          <div className='product-info'>
            <h2 className='featured-grapes'>{featuredGrapes}</h2>
            <Link to={`/vinuri/${id}`}>
              <h5>
                {name} | {brand}
              </h5>
            </Link>{' '}
            <p>{price} MDL</p>
            <div>
              <Flavour color={color} flavour1={flavour1} flavour2={flavour2} />
            </div>
          </div>
          <img
            src={image}
            alt={name}
            style={{ height: '200px' }}
            className='featured-img'
          />
        </div>
      </article>
      <div className='featured-underline'></div>
    </>
  )
}

export default Product
