import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='error-wrapper   page-100'>
      <section>
        <h1 style={{ fontSize: '10rem' }}>404</h1>
        <h3 style={{ textTransform: 'inherit', marginBottom: '2rem' }}>
          Ne pare rau, pagina nu a fost gasita
        </h3>
        <Link to='/' className='btn'>
          Acasa
        </Link>
      </section>
    </main>
  )
}

export default ErrorPage
