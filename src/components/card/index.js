import * as React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={title} />
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Card
