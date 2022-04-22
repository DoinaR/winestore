import React from 'react'
import { useProductsContext } from '../context/products_context'

const Sort = () => {
  const { filtered_products, sort, updateSort } = useProductsContext()
  return (
    <div className='sort'>
      <p>
        {filtered_products.length}{' '}
        {filtered_products.length === 1 ? 'produs gasit' : 'produse gasite'}
      </p>

      <form>
        <label htmlFor='sort' className='sort-label'>
          sorteaza dupa
        </label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='sort-input'
        >
          <option value='price-lowest'>pret (crescator)</option>
          <option value='price-highest'>pret (descrescator)</option>
          <option value='name-a'>nume (a-z)</option>
          <option value='name-z'>nume (z-a)</option>
        </select>
      </form>
      {/* <hr /> */}
    </div>
  )
}

export default Sort
