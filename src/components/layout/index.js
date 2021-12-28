import * as React from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { Header } from '../header'

import './index.css'

export const Layout = () => {
  const [theme, setTheme] = React.useState({
    lang: 'en',
  })

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
			<h1 className="title title__primary">Example</h1>
      <Header />
    </ThemeContext.Provider>
  )
}
