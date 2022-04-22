import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import client from '../Contentful'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    brand: 'all',
    color: '',
    flavours: '',
    pairing: '',
    occasions: '',
  },
}
const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await client.getEntries({
        content_type: 'wineProject',
      })
      const products = response.items
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
      dispatch({ type: LOAD_PRODUCTS, payload: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [state.products, state.sort, state.filters])

  const updateSort = (e) => {
    // const name = e.target.name
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'color') {
      value = e.target.textContent
    }

    if (name === 'flavours') {
      value = e.target.textContent
    }
    if (name === 'pairing') {
      value = e.target.textContent
    }

    if (name === 'occasions') {
      value = e.target.textContent
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchProducts,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
