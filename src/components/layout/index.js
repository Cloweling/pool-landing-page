import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'

import Header from '../header'
import Service from '../service'
import Intersection1 from '../Intersections/Intersection-1'
import Intersection2 from '../Intersections/Intersection-2'
import Ubication from '../ubication'
import Works from '../works'
import About from '../about'

import './index.css'
import Footer from '../footer'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <Header />
      <Service />
      <Intersection1 />
      <Works />
      <Intersection2 />
      <Ubication />
      <About />
      <Footer />
    </ThemeContext.Provider>
  )
}
