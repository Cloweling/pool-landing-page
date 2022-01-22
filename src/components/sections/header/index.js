import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
// import { ThemeContext } from '../../contexts/themeContext'
import { ELEMENT_NAV } from '../../../constants/index'

import './styles.css'
import Logo from '../../logo'
import Switch from '../../switch'
import ButtonAchor from '../../buttonAnchor'
import Menu from '../../../images/header/menu.svg'

const Header = () => {
  // const { lang } = React.useContext(ThemeContext)

  return (
    <header id="id-header" className="header">
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
          <div className="header__menu">
            <Menu className="menu__buger" />
          </div>
        </nav>

        <div className="header__container-titles">
          <h1 className="header__title">PITU&apos;S POOLMAN</h1>
          <div className="header__container-description">
            <p>
              Los <strong>mejores</strong> para limpiar tus piscinas! No más colores raros y objetos indeseados,
              solamente una gran y relajante <strong>agua azul</strong>.
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
