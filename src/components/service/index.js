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
        <Title text="Services" />
        <div>
          {SERVICES.map(({ title, description, img }) => {
            return <Card key={title} title={title} description={description} img={img} />
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
