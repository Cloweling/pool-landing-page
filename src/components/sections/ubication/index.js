import React from 'react'

import Map from '../map/index'
import Title from '../../title'

import  { LOCATION } from '../../../constants'
import ThemeContext from '../../../contexts/themeContext'

import './styles.css'

const DESCRIPTION = '16830 Kingsbury St APT 210 CA 91344 GRANADA HILLS'

const Ubication = () => {
  const { lang } = React.useContext(ThemeContext)

  return (
    <section className="ubication">
      <Title title={LOCATION.title[lang]} id="id-ubication" />
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
