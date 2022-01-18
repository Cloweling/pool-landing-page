import * as React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Title = ({ title }) => {
  return (
    <div className="title__container">
      <h2 className="title__label">{title}</h2>
      <div className="title__line"></div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title