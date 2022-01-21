import React from 'react'
import './styles.css'
import { FOOTER } from '../../../constants'

const Footer = () => {
  const { es } = FOOTER

  return (
    <footer className="footer">
      <h3 className="footer--description">{es}</h3>
    </footer>
  )
}

export default Footer
