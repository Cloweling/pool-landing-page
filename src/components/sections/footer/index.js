import React from 'react'

import { FOOTER } from '../../../constants'
import ThemeContext from '../../../contexts/themeContext'

import './styles.css'

const Footer = () => {
  const { lang } = React.useContext(ThemeContext)

  return (
    <footer className="footer">
      <h3 className="footer--description">{FOOTER.footer[lang]}</h3>
    </footer>
  )
}

export default Footer
