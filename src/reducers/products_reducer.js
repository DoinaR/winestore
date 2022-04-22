import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SHOW_TEXT,
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

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.fields.featured === true
    )

    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: featured_products,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    }
  }

  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort(
        (a, b) => a.fields.price - b.fields.price
      )
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort(
        (a, b) => b.fields.price - a.fields.price
      )
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.fields.name.localeCompare(b.fields.name, 'fr', {
          ignorePunctuation: true,
        })
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.fields.name.localeCompare(a.fields.name)
      })
    }
    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    // console.log(name, value)
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, brand, color, flavours, pairing, occasions } = state.filters

    let tempProducts = [...all_products]
    // filtering
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return (
          product.fields.name.toLowerCase().includes(text) ||
          product.fields.name.toLowerCase().startsWith(text)
        )
      })
    }
    //  brand
    if (brand !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.fields.brand === brand
      )
    }
    // color
    if (color) {
      tempProducts = tempProducts.filter((product) => {
        return product.fields.color === color
      })
    }
    //  flavour
    if (flavours) {
      tempProducts = tempProducts.filter((product) =>
        product.fields.flavours.find((f) => f === flavours)
      )
    }
    // occasion
    if (occasions) {
      tempProducts = tempProducts.filter(
        (product) => product.fields.occasions === occasions
      )
    }
    // pairing
    if (pairing) {
      tempProducts = tempProducts.filter(
        (product) => product.fields.pairing === pairing
      )
    }

    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: '',
        brand: 'all',
        color: '',
        flavours: '',
        pairing: '',
        occasions: '',
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
