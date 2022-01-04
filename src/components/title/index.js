import React from 'react'

import './styles.css'

export default function Title({ title } = {}) {
  return (
    <div className="title__container">
      <h2 className="title__label">{title}</h2>
      <div className="title__line"></div>
    </div>
  )
}
