import * as React from 'react'

import Title from '../../title'
import Card from '../../card'

import ThemeContext from '../../../contexts/themeContext'

import './style.css'
import { SERVICES } from '../../../constants'
import bg from '../../../images/service/background.jpeg'

const Service = () => {
  const { lang } = React.useContext(ThemeContext)

  return (
    <section className="service">
      <div className="service__container">
        <Title title={SERVICES.title[lang]} id="id-services" />
        <div className="service__cards">
          {SERVICES.services.map(({ title, description, Img }, index) => {
            return <Card key={index} title={title[lang]} description={description[lang]} Img={Img} />
          })}
        </div>
      </div>
      <div className="service__background">
        <img className="background__img" src={bg} alt="Services Pool" />
      </div>
    </section>
  )
}

export default Service
