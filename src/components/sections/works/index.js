import React from 'react'
import Carousel from '../../carousel'
import Title from '../../title'

import './styles.css'

export default function Works() {
  return (
    <section className="works">
      <Title title="Trabajos" id="id-works" />
      <Carousel />
    </section>
  )
}
