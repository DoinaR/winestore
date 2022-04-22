import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { CartProvider } from './context/cart_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-8f69yeac.us.auth0.com
//fQvbP7QwrhDdAskAgtUPcfCk2rWmrNeT

ReactDOM.render(
  <Auth0Provider
    domain='dev-pu8wyk-g.us.auth0.com'
    clientId='7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
