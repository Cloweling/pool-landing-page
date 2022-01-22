import React from 'react'
import PropTypes from 'prop-types'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import './styles.css'

const ButtonAnchor = ({ value, to }) => {
  return (
    <AnchorLink to={to} className="button-anchor">
      {value}
    </AnchorLink>
  )
}

ButtonAnchor.propTypes = {
  value: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default ButtonAnchor
