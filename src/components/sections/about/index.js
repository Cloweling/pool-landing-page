import * as React from 'react'

import photo from '../../../images/about/photo.jpg'
import PhoneSVG from '../../../images/about/phone.svg'
import WhatsappSVG from '../../../images/about/whatsapp.svg'
import FacebookSVG from '../../../images/about/facebook.svg'
import InstagramSVG from '../../../images/about/instagram.svg'
import './styles.css'

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="container__photo">
          <img src={photo} alt="Nombre" />
        </div>
        <div className="container__info">
          <p className="description__name">GERARDO PAZ</p>
          <div className="info__social">
            <a href="https://wa.me/18182175661?text=Hi" target="_blank" rel="noreferrer">
              <WhatsappSVG />
            </a>
            <a href="tel:+18182175661">
              <PhoneSVG />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FacebookSVG />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <InstagramSVG />
            </a>
          </div>
        </div>
      </div>
      <blockquote className="container__quote">&quot;You can count on us&quot;</blockquote>
    </section>
  )
}

export default About
