import React from 'react'
import Logo from '../assets/FATEC_ZONA_LESTE.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img class="logo" src={Logo} alt="Logo fatec zona leste" srcset="" />
        <h1>Exericio 1 - React</h1>
    </header>
  )
}

export default Header