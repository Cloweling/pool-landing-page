import React from 'react'

import logo from '../../images/logo/logo.png'
import './styles.css'

export default function Logo() {
  return (
    <div className="header__container-logo">
      <img src={logo} alt="Pitu's Poolman Logo" className="logo" />
    </div>
  )
}
