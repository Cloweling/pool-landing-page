import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'
import before1 from '../../images/carousel-images/before-1.jpg'
import after1 from '../../images/carousel-images/after-1.jpg'
import before2 from '../../images/carousel-images/before-2.jpeg'
import after2 from '../../images/carousel-images/after-2.jpeg'
import before3 from '../../images/carousel-images/before-3.jpeg'
import after3 from '../../images/carousel-images/after-3.jpeg'
import before4 from '../../images/carousel-images/before-4.jpeg'
import after4 from '../../images/carousel-images/after-4.jpeg'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper'
import CarouselElement from './CarouselElement'

SwiperCore.use([Pagination, Navigation])

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <CarouselElement before={before1} after={after1} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselElement before={before2} after={after2} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselElement before={before3} after={after3} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselElement before={before4} after={after4} />
      </SwiperSlide>
    </Swiper>
  )
}
