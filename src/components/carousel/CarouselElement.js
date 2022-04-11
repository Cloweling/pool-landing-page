import React from 'react'
import PropTypes from 'prop-types'

const CarouselElement = ({ before, after, textBefore, textAfter } = {}) => {
  return (
    <div className="swiper__container-element">
      <div className="swiper__container-image">
        <p className="swiper__label-before">{textBefore}</p>
        <img src={before} alt="" />
      </div>
      <div className="swiper__container-image">
        <p className="swiper__label-after">{textAfter}</p>
        <img src={after} alt="" />
      </div>
    </div>
  )
}

CarouselElement.propTypes = {
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  textBefore: PropTypes.string.isRequired,
  textAfter: PropTypes.string.isRequired,
}

export default CarouselElement
