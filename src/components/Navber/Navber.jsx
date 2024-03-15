import React from 'react'
import './Navber.css'

const Navber = () => {
  return (
    <nav className='navber'>
      <a className='title' href="/">
        <p>Urmi</p>
      </a>
      <div className='menu'>
        <ul className='menuItems'>
        <li><a href="#about"> About</a></li>
          <li><a href="#experience"> Experience</a></li>
          <li><a href="#contact"> Contact </a></li>
          
        </ul>
      </div>
     
    </nav>
  )
}

export default Navber

