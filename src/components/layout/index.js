import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import Header from '../header'
import Service from '../service'

import './index.css'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <Header />
      <Service />
    </ThemeContext.Provider>
  )
}
