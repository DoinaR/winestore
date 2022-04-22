import React, { useEffect, useLayoutEffect } from 'react'
import { useProductsContext } from '../context/products_context'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'
import default_img from '../assets/wine/default_img.png'
import AddtoCart from '../components/AddtoCart'

import SimilarProducts from '../components/SimilarProducts'
import Flavour from '../components/Flavour'
import Occasions from '../components/Occasions'

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useProductsContext()

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  const product = products.find((product) => product.sys.id === id)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {
    name,
    brand,
    price,
    color,
    desctiption,
    grapes,
    year,
    occasions,
    pairing,
    region,
    flavour1,
    flavour2,
  } = product.fields

  const image = product.fields.images.fields.file.url

  return (
    <article className='single_product_article'>
      <div className='single_product_year'>
        <span style={{ padding: '10px' }}>{year} </span>
        <span style={{ borderLeft: '4px solid #ED0083', padding: '0 10px' }}>
          {region}
        </span>
      </div>

      <section className='section single_product'>
        <div className='single_product_info'>
          <h2>{grapes}</h2>
          <h1>
            {name} | {brand}
          </h1>
          <p>{desctiption}</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>{price} MDL</p>
        </div>
        <img
          src={image || default_img}
          alt={name}
          className='single_product_image'
          style={{ height: '300px' }}
        />
      </section>

      <div className='single-page-icons'>
        <Flavour color={color} flavour1={flavour1} flavour2={flavour2} />
        <Occasions pairing={pairing} occasions={occasions} />
      </div>

      <div>
        <AddtoCart product={product.fields} id={product.sys.id} image={image} />
      </div>
      <SimilarProducts product={product} />
    </article>
  )
}

export default SingleProduct
