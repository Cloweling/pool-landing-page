import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'

import Works from '../sections/works'
import About from '../sections/about'
import Footer from '../sections/footer'
import Header from '../sections/header'
import Service from '../sections/service'
import Ubication from '../sections/ubication'
import Intersection from '../sections/intersection'

import './index.css'
import intersection1 from '../../images/intersertion/intersection-1.jpg'
import intersection2 from '../../images/intersertion/intersection-2.jpg'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <Header />
      <Service />
      <Intersection>
        <img src={intersection1} alt="Pitu's Poolman Intersecion" className="intersection--image" />
      </Intersection>
      <Works />
      <Intersection>
        <img src={intersection2} alt="Pitu's Poolman Intersecion" className="intersection--image" />
      </Intersection>
      <Ubication />
      <About />
      <Footer />
    </ThemeContext.Provider>
  )
}
