import * as React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Card = ({ title, description, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{description}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
}

export default Card