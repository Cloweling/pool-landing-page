import React from 'react'

export default function CarouselElement({ before, after } = {}) {
  // return <div>before, after</div>
  return (
    <div className="swiper__container-element">
      <div className="swiper__container-image">
        <p className="swiper__label-before">Antes</p>
        <img src={before} alt="" />
      </div>
      <div className="swiper__container-image">
        <p className="swiper__label-after">Después</p>
        <img src={after} alt="" />
      </div>
    </div>
  )
}
