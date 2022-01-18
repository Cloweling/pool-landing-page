import * as React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Title = ({ text }) => {
  return <h2 className="text">{text}</h2>
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
