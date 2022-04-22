import React from 'react'
import { useProductsContext } from '../context/products_context'
import Product from './Product'

const SimilarProducts = ({ product }) => {
  const { products } = useProductsContext()

  const similar = products.filter(
    (item) =>
      item.fields.color === product.fields.color &&
      item.sys.id !== product.sys.id
  )

  return (
    <section className='section-center similar-container '>
      <div className='similar-products'>
        <h4>Produse similare</h4>
      </div>
      <hr /> <br />
      <div className='  similar '>
        {similar.slice(0, 3).map((product) => {
          const id = product.sys.id
          const image = product.fields.images.fields.file.url
          return <Product key={id} {...product.fields} image={image} id={id} />
        })}
      </div>
    </section>
  )
}

export default SimilarProducts
