import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { NAVBAR_ICONS } from '../../constants/index'

import ThemeContext from '../../contexts/themeContext'

import './styles.css'

const Navbar = () => {
  const { lang } = React.useContext(ThemeContext)
  const [plan, setPlan] = React.useState('startup')

  return (
    <nav className="navbar-mobile">
      <RadioGroup value={plan} onChange={setPlan} className="navbar__radioGroup">
        {NAVBAR_ICONS.map(({ id, title, to, Img }) => (
          <RadioGroup.Option value={id} className="navbar__image" key={Img}>
            {({ checked }) => (
              <a href={to} className={`navbar__link ${checked ? 'navbar__link--activate' : ''}`}>
                {Img()}
                <span className="navbar__description">{title[lang]}</span>
              </a>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </nav>
  )
}

export default Navbar
