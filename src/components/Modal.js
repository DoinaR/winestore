import React from 'react'
import { IoClose } from 'react-icons/io5'
import Filters from './Filters'

const Modal = ({ setIsOpen }) => {
  return (
    <section className='modal-section'>
      <div
        className='darkBG'
        style={{ dataBackdrop: 'static' }}
        // onClick={() => setIsOpen(false)}
      >
        <Filters setIsOpen={setIsOpen} />
      </div>
      <button
        type='button'
        className='close-modal-btn'
        onClick={() => setIsOpen(false)}
      >
        <IoClose />
      </button>
    </section>
  )
}

export default Modal
