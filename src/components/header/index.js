import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'

import './index.css'

export const Header = () => {
  const { lang } = React.useContext(ThemeContext)
  return (
    <>
      <p className="text text__lang text--orange">Language: {`${lang}`}</p>
    </>
  )
}
