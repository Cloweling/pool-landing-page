import React from 'react'
import Carousel from '../../carousel'
import Title from '../../title'

import ThemeContext from '../../../contexts/themeContext'

import { WORKS } from '../../../constants'

import './styles.css'

export default function Works() {
  const { lang } = React.useContext(ThemeContext)

  return (
    <section className="works">
      <Title title={WORKS.title[lang]} id="id-works" />
      <Carousel />
    </section>
  )
}
