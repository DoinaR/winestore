import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import StoresPage from './pages/StoresPage'
import ErrorPage from './pages/ErrorPage'
import SingleProduct from './pages/SingleProduct'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Bestseller from './pages/Bestseller'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/vinuri' element={<ShopPage />} />
          <Route path='/vinuri/bestseller' element={<Bestseller />} />
          <Route exact path='/vinuri/:id' element={<SingleProduct />} />
          <Route exact path='/magazine' element={<StoresPage />} />
          <Route exact path='/cosul-meu' element={<CartPage />} />
          <Route
            exact
            path='/checkout'
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
