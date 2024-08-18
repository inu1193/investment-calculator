import React from 'react'
import logo from '../assets/investment-logo.png'

const Header = () => {
  return (
    <header id='header'>
    <img src={logo} alt='investment-logo'/>
    <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header