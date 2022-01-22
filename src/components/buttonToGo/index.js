import * as React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import ThemeContext from '../../contexts/themeContext'

import './styles.css'
import ArrowUp from '../../images/other/arrow-up.svg'

const ButtonToGo = () => {
  const { scroll } = React.useContext(ThemeContext)

  return (
    <AnchorLink to="/#id-header" className={`button-to-go ${scroll < 300 ? 'button-hidden' : ''}`}>
      <ArrowUp />
    </AnchorLink>
  )
}

export default ButtonToGo
