import React from 'react'
import { useProductsContext } from '../context/products_context'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <section className='featured-section'>
      <div className=' featured-title'>
        <h4>vinuri recomandate</h4>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          const id = product.sys.id
          const image = product.fields.images.fields.file.url

          return <Product key={id} {...product.fields} image={image} id={id} />
        })}
      </div>
    </section>
  )
}

export default FeaturedProducts
