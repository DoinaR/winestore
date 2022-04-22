import React from 'react'
import { useProductsContext } from '../context/products_context'
import Product from '../components/Product'

const Bestseller = () => {
  const { products } = useProductsContext()

  const bestseller = products.filter((item) => item.fields.bestseller === true)

  return (
    <section className='bestseller-container'>
      <div className='bestseller-bg'>
        <h3>
          <span>#Bestseller</span> <br /> cele mai frumoase amintiri
        </h3>
      </div>
      <div className='bestseller-title'>
        <h4>Vinuri Bestseller</h4>
      </div>
      <div className='bestseller-card'>
        {bestseller.map((product) => {
          const id = product.sys.id
          const image = product.fields.images.fields.file.url
          return <Product key={id} {...product.fields} image={image} id={id} />
        })}
      </div>
    </section>
  )
}

export default Bestseller
