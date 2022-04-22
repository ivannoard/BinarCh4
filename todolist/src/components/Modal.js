import React, { useRef } from 'react'

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef()

  const handleModal = (e) => {
    if (e.targer === modalRef.current) {
      setShowModal(false)
    }
  }
  return (
    showModal &&
    <div className='modal' ref={modalRef} onClick={(e) => handleModal}>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Modal