import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { Header } from '../header'
import Intersection1 from '../Intersections/Intersection-1'
import Intersection2 from '../Intersections/Intersection-2'
import Ubication from '../ubication'
import Works from '../works'

import './index.css'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <Header />
      <Intersection1 />
      <Works />
      <Intersection2 />
      <Ubication />
    </ThemeContext.Provider>
  )
}
