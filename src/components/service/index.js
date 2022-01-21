import * as React from 'react'

import Title from '../title'
import Card from '../card'

import './style.css'
import { SERVICES } from '../../constants'
import backround from '../../images/service-img/background.jpeg'

const Service = () => {
  return (
    <section className="service">
      <div className="service__container">
        <Title title="Services" />
        <div className="service__cards">
          {SERVICES.map(({ title, description, Img }) => {
            return <Card key={title} title={title} description={description} Img={Img} />
          })}
        </div>
      </div>
      <div className="service__background">
        <img className="background__img" src={backround} alt="Services Pool" />
      </div>
    </section>
  )
}

export default Service
