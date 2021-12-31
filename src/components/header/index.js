import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'

import './styles.css'
import Button from '../button'
import Logo from '../logo'
import Switch from '../switch'

const LINKS = ['UBICACIÓN', 'TRABAJOS', 'SERVICIOS']

export const Header = () => {
  const { lang } = React.useContext(ThemeContext)

  return (
    <>
      <header className="header">
        <div className="header__left">
          <nav className="header__nav">
            <Logo />

            <div className="nav__container-links">
              <ul className="nav__links-list">
                {LINKS.map((link) => {
                  return (
                    <li key={link}>
                      <a href="#">{link}</a>
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
            <Button />
          </div>
        </div>

        <div className="header__right"></div>
      </header>
    </>
  )
  // return (
  //   <>
  //     <p className="text text__lang text--orange">Language: {`${lang}`}</p>
  //   </>
  // )
}
