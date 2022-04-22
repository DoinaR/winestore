import React, { useState } from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import Loading from './Loading'
import Error from './Error'
import Flavour from './Flavour'

const ProductList = ({ width }) => {
  const {
    filtered_products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext()

  const [pageNumber, setPageNumber] = useState(0)
  const productsPerPage = 5
  const pagesVisited = pageNumber * productsPerPage

  const pageCount = Math.ceil(filtered_products.length / productsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  if (filtered_products.length < 1) {
    return (
      <h4
        style={{
          textTransform: 'initial',
          fontWeight: '700',
          textAlign: 'center',
          padding: '35px',
        }}
      >
        Ne pare rau, nici un produs nu corespunde cautarii dvs...{' '}
      </h4>
    )
  }
  return (
    <section className='products-section'>
      {filtered_products
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((product) => {
          const id = product.sys.id
          const image = product.fields.images.fields.file.url
          const {
            name,
            brand,
            price,
            grapes,
            desctiption,
            color,
            flavour1,
            flavour2,
          } = product.fields

          return (
            <article key={id} className='products-container'>
              <img src={image} alt={name} className='products-img' />
              <div className='products-info'>
                <h2 className='featured-grapes'>{grapes}</h2>
                <h5>
                  {name} | {brand}
                </h5>
                {width > 600 && (
                  <p style={{ marginRight: '15px' }}>
                    {desctiption.substring(0, 180)}...
                  </p>
                )}

                <div className='products-grid'>
                  <Flavour
                    color={color}
                    flavour1={flavour1}
                    flavour2={flavour2}
                  />
                  <div>
                    <p style={{ fontSize: '1rem' }} className='products-price'>
                      {price} MDL
                    </p>
                  </div>
                </div>

                <Link to={`/vinuri/${id}`} className='btn products-btn'>
                  Detalii
                </Link>
              </div>
            </article>
          )
        })}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationContainer'}
        activeClassName={'paginationActive'}
      />
    </section>
  )
}

export default ProductList
