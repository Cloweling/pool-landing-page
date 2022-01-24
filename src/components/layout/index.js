import * as React from 'react'
import ThemeContext from '../../contexts/themeContext'
import useScrollPosition from '../../hooks/useScrollPosition'

import Works from '../sections/works'
import ButtonToGo from '../buttonToGo'
import Header from '../sections/header'
import Footer from '../sections/footer'
import Service from '../sections/service'
import Contact from '../sections/contact'
import Ubication from '../sections/ubication'
import Intersection from '../sections/intersection'

import './index.css'
import intersection1 from '../../images/intersertion/intersection-1.jpg'
import intersection2 from '../../images/intersertion/intersection-2.jpg'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  const [scroll, setScroll] = React.useState(0)

  useScrollPosition(({ currentPosition }) => {
    setScroll(currentPosition.y)
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme, scroll }}>
      <div className="root__container">
        {/* <Header /> */}
        <Service />
        <Intersection>
          <img src={intersection1} alt="Pitu's Poolman Intersecion" className="intersection--image" />
        </Intersection>
        <Works />
        <Intersection>
          <img src={intersection2} alt="Pitu's Poolman Intersecion" className="intersection--image" />
        </Intersection>
        <Ubication />
        <Contact />
        <Footer />
        <ButtonToGo />
      </div>
    </ThemeContext.Provider>
  )
}
