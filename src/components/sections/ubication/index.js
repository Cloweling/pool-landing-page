import React from 'react'

import Map from '../map/index'
import Title from '../../title'

import './styles.css'

const DESCRIPTION = 'Alejandro Cardenas 16830 Kingsbury St APT 210 CA 91344 Granada Hills'

const Ubication = () => {
  return (
    <section className="ubication">
      <Title title="Ubicación" />
      <div className="ubication--information">
        <div className="ubication--container-description">
          <h3 className="ubication--description">{DESCRIPTION}</h3>
        </div>
        <div className="ubication--container-map">
          <Map />
        </div>
      </div>
    </section>
  )
}

export default Ubication
