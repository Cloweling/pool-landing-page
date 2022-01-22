import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
// import { ThemeContext } from '../../contexts/themeContext'
import { ELEMENT_NAV } from '../../../constants/index'

import './styles.css'
import ButtonAchor from '../../buttonAnchor'
import Logo from '../../logo'
import Switch from '../../switch'

const Header = () => {
  // const { lang } = React.useContext(ThemeContext)

  return (
    <header className="header">
      <div className="header__left">
        <nav className="header__nav">
          <Logo />

          <div className="nav__container-links">
            <ul className="nav__links-list">
              {ELEMENT_NAV.map((el) => {
                return (
                  <li key={el.es}>
                    <AnchorLink to={el.to} className="nav__link">
                      {el.es}
                    </AnchorLink>
                  </li>
                )
              })}
            </ul>
          </div>

          <Switch />
        </nav>

        <div className="header__container-titles">
          <h1 className="header__title">PITU&apos;S POOLMAN</h1>
          <div className="header__container-description">
            <p>
              Los <span>mejores</span> para limpiar tus piscinas! No más colores raros y objetos indeseados, solamente
              una gran y relajante <span>agua azul</span>.
            </p>
          </div>
        </div>

        <div>
          <ButtonAchor value="Contactar" to="/#id-contact" />
        </div>
      </div>

      <div className="header__right"></div>
    </header>
  )
}

export default Header
