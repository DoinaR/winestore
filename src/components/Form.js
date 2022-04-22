import React, { useState, useEffect } from 'react'
import { send } from 'emailjs-com'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const sendMail = (e) => {
    e.preventDefault()
    send(
      'service_2ts3d3v',
      'template_sdcpjrh',
      { name, email, message },
      'user_JKe8kv5QrPxACH1mAcZn6'
    )
      .then((response) => {
        // console.log(response)
        console.log('SUCCESS', response)
        setName('')
        setEmail('')
        setMessage('')
        setStatus('SUCCESS')
      })
      .catch((err) => {
        console.log('Failed', err)
      })
  }
  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        renderAlert()
        setStatus('')
      }, 3000)
    }
  }, [status])

  const renderAlert = () => (
    <div>
      <h6 className='alert-mess'>
        Mesajul dumneavoastra a fost trimis cu succes
      </h6>
    </div>
  )

  return (
    <div className='alert'>
      {status && renderAlert()}
      <form>
        {status === '200' && <p>Mesajul Dvs. a fost trimis cu succes</p>}
        <h1>Contacteaza-ne</h1>
        <p>
          Ai o intrebare sau un comentariu? <br></br>Completeaza formularul
          pentru a ne trimite un mesaj.
        </p>
        <p className='form-text'>Nume</p>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className='form-text'>Email</p>
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className='form-text'>Message</p>
        <textarea
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
        />
        <div className='form-button'>
          <button
            type='button'
            className='submit-btn form-btn'
            onClick={sendMail}
          >
            Trimite
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
