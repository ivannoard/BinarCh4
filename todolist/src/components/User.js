import React from 'react'
import logo from '../images/logo.jpg'

const User = () => {
  return (
    <div className='user'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Code Explained</p>
        <a href="#">logout</a>
      </div>
    </div>
  )
}

export default User