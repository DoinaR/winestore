import React from 'react'
import { useProductsContext } from '../context/products_context'
import { getUniqueValues } from '../helpers'
import { DisplayFlavours, DisplayOccasions } from './DisplayFlavours'

const Filters = ({ setIsOpen }) => {
  const {
    filters: { brand, color, flavours, pairing, occasions },
    updateFilters,
    clearFilters,
    all_products,
  } = useProductsContext()

  const brands = getUniqueValues(all_products, 'brand')
  const colors = getUniqueValues(all_products, 'color')
  const flavour = getUniqueValues(all_products, 'flavours')
  const pairings = getUniqueValues(all_products, 'pairing')
  const occasion = getUniqueValues(all_products, 'occasions')

  return (
    <section className='section-filter'>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()} className='filter-form'>
          {/* enf search input */}
          {/* brand */}
          <h3 className='filter-title'>Filtre</h3>
          <div className='filter-brand'>
            <h5>brand</h5>
            <select name='brand' value={brand} onChange={updateFilters}>
              {brands.map((b, index) => {
                return (
                  <option key={index} value={b}>
                    {b}
                  </option>
                )
              })}
            </select>
          </div>
          {/* end of brand */}
          {/* color */}
          <div>
            <h5>culoare</h5>
            <div className='form-control'>
              {colors.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='color'
                    className={`${
                      color === c.toLowerCase()
                        ? 'filter-btn filters-active'
                        : 'filter-btn'
                    }`}
                  >
                    <DisplayFlavours color={c} />
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of color */}

          {/* flavour */}
          <div>
            <h5>aroma</h5>
            <div className='form-control'>
              {flavour.map((f, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='flavours'
                    onClick={updateFilters}
                    className={`${
                      flavours === f.toLowerCase()
                        ? 'filter-btn filters-active'
                        : 'filter-btn'
                    }`}
                  >
                    <DisplayFlavours flavour1={f} />
                    {f}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of flavour */}
          {/* pairing */}
          <div>
            <h5>pairing</h5>
            <div className='form-control'>
              {pairings.map((p, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='pairing'
                    onClick={updateFilters}
                    className={`${
                      pairing === p.toLowerCase()
                        ? 'filter-btn filters-active'
                        : 'filter-btn'
                    }`}
                  >
                    <DisplayOccasions pairing={p} />
                    {p}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of pairing */}
          {/* occasion */}

          <div>
            <h5>ocazii</h5>
            <div className='form-control'>
              {occasion.map((o, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='occasions'
                    onClick={updateFilters}
                    className={`${
                      occasions === o.toLowerCase()
                        ? 'filter-btn filters-active'
                        : 'filter-btn'
                    }`}
                  >
                    <DisplayOccasions occasions={o} />
                    {o}
                  </button>
                )
              })}
            </div>
          </div>

          {/* end of occasion */}
        </form>
        <div className='filter-btn-container'>
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='btn'
          >
            Aplica filtre
          </button>
          <button type='button' onClick={clearFilters} className='btn clear'>
            Sterge filtre
          </button>
        </div>
      </div>
    </section>
  )
}

export default Filters
