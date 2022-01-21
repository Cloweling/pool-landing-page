import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'

import Works from '../sections/works'
import About from '../sections/about'
import Footer from '../sections/footer'
import Header from '../sections/header'
import Service from '../sections/service'
import Ubication from '../sections/ubication'
import Intersection2 from '../sections/intersections/intersection-2'
import Intersection1 from '../sections/intersections/intersection-1'

import './index.css'

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
