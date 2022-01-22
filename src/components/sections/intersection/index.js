import * as React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Intersection = ({ children }) => {
  return <section className="intersection--container">{children}</section>
}

Intersection.propTypes = { children: PropTypes.node.isRequired }

export default Intersection
