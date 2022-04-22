import React from 'react'
import store from '../assets/store.jpeg'
import { address } from '../data'
import Form from '../components/Form'

const StoresPage = () => {
  return (
    <main className='contact-container'>
      <div className='contact-info '>
        <h2>Magazine & Informatii</h2>
        <p>
          Scopul nostru este de a oferi o experienta de cumparare distractiva,
          educativa si <br></br>non-intimidanta pentru toti iubitorii de vinuri.
        </p>
      </div>
      <div className='c-hours '>
        <table>
          <caption>Orar zilnic</caption>
          <tbody>
            <tr>
              <td>Luni – Sambata</td>
              <td>9:00 – 20:00</td>
            </tr>
            <tr>
              <td>Duminica</td>
              <td>9:00 – 18:00</td>
            </tr>
          </tbody>
        </table>
      </div>{' '}
      <section className='contact-stores'>
        <img src={store} alt='' className='store-image' />
        {/* <div className='alert'>
          <p>Mesajul Dvs. a fost trimis cu succes</p>
        </div> */}
        <div className='contact-form'>
          <Form />
        </div>
      </section>
      <section className='address-container'>
        <h5>chisinau</h5>
        {address.map(({ sector, adrese, id }) => {
          return (
            <div key={id} className='address'>
              <h6>{sector}</h6>
              {adrese.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </div>
          )
        })}
        <div className='orase'>
          <h5>Balti</h5>
          <p>str. Stefan cel Mare 6/1</p>

          <h5>Edinet</h5>
          <p>str. Independentei 98</p>

          <h5>Calarasi</h5>
          <p>str. Mihai Eminescu 32a</p>
        </div>
      </section>
    </main>
  )
}

export default StoresPage
