import * as React from 'react'

import { FOOTER } from '../../../constants'
import ThemeContext from '../../../contexts/themeContext'

import photo from '../../../images/contact/photo.jpeg'
import PhoneSVG from '../../../images/contact/phone.svg'
import WhatsappSVG from '../../../images/contact/whatsapp.svg'
import FacebookSVG from '../../../images/contact/facebook.svg'
import InstagramSVG from '../../../images/contact/instagram.svg'

import './styles.css'

const Contact = () => {
  const { lang } = React.useContext(ThemeContext)

  return (
    <section id="id-contact" className="contact">
      <div className="contact__container">
        <div className="container__photo">
          <img src={photo} alt="Nombre" />
        </div>
        <div className="container__info">
          <p className="description__name">ALEJANDRO CARDENAS</p>
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
      <blockquote className="container__quote">{`"${FOOTER.description[lang]}"`}</blockquote>
    </section>
  )
}

export default Contact
