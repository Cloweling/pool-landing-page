import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { Header } from '../header'
import Intersection1 from '../Intersections/Intersection-1'

import './index.css'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <Header />
      <Intersection1 />
    </ThemeContext.Provider>
  )
}
