import * as React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Intersection = ({ children }) => {
  return <div className="intersection--container">{children}</div>
}

Intersection.propTypes = { children: PropTypes.node.isRequired }

export default Intersection
