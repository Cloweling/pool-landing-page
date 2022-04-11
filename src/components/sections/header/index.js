import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import ThemeContext from '../../../contexts/themeContext'
import { ELEMENT_NAV, HEADER } from '../../../constants/index'

import './styles.css'
import Logo from '../../logo'
import Switch from '../../switch'
import ButtonAchor from '../../buttonAnchor'
import Navbar from '../../navbar'

const Header = () => {
  const { lang } = React.useContext(ThemeContext)

  return (
    <header id="id-header" className="header">
      <div className="header__left">
        <nav className="header__nav">
          <Logo />
          <div className="nav__container-links">
            <ul className="nav__links-list">
              {ELEMENT_NAV.map((el) => {
                return (
                  <li key={el[lang]}>
                    <AnchorLink to={el.to} className="nav__link">
                      {el[lang]}
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
            <p>{HEADER.description[lang]}</p>
          </div>
        </div>

        <div>
          <ButtonAchor value={HEADER.cta[lang]} to="/#id-contact" />
        </div>
      </div>

      <Navbar />
    </header>
  )
}

export default Header
