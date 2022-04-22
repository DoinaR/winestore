import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import Modal from '../components/Modal'
import { useProductsContext } from '../context/products_context'
import {
  DisplayFlavours,
  DisplayOccasions,
} from '../components/DisplayFlavours'

const ShopPage = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)

  const {
    filters: { text, brand, color, flavours, pairing, occasions },
    updateFilters,
    clearFilters,
  } = useProductsContext()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <section className='shop-page'>
      <form onSubmit={(e) => e.preventDefault()} className='filter-form'>
        <div className='form-control'>
          <input
            type='text'
            name='text'
            placeholder='search'
            className='search-input'
            value={text}
            onChange={updateFilters}
          />
        </div>
      </form>
      <h3>Shop for wine</h3>
      <div className='filter-container'>
        <div className='filter-header'>
          <img
            className='filter-img'
            src='/filter-img.png'
            alt='filter'
            onClick={() => setIsOpen(true)}
          />

          <div className='filter-icons-shop'>
            {brand !== 'all' && brand}
            <DisplayFlavours color={color} flavour1={flavours} />
            <DisplayOccasions pairing={pairing} occasions={occasions} />

            {color || flavours || pairing || occasions || !brand ? (
              <button
                className='clear-filters'
                onClick={() => {
                  clearFilters()
                  // setIsOpen(false)
                }}
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Sort />
      <ProductList width={width} />
    </section>
  )
}

export default ShopPage
