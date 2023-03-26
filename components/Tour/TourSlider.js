import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ToursForSlide from '../Tour/ToursForSlide'
import { useTranslation } from 'react-i18next'

import { useRouter } from 'next/router'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

const options = {
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1500,
  loop: true,
  autoHeight: false,
  pagination: {
    type: 'progressbar',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
}

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay])

const TourSlider = () => {
  const { t } = useTranslation('index')
  var router = useRouter()
  const { locale } = router
  useEffect(() => {}, [router])
  return (
    <>
      <div className="page-wrapper">
        <div className="tour-slider-v2 pb-50">
          <Swiper {...options}>
            <SwiperSlide>
              <ToursForSlide
                id={'1'}
                key={'1'}
                title={t('rayonnageLéger')}
                imgURL={'/images/Images/rayonnageLéger.png'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ToursForSlide
                id={'2'}
                key={'2'}
                title={t('RayonnageMi-Lourd')}
                imgURL={'/images/Images/RayonnageMi-Lourd5.jpg'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ToursForSlide
                id={'3'}
                key={'3'}
                title={t('RayonnageLourd')}
                imgURL={'/images/Images/RayonnageLourd.jpg'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ToursForSlide
                id={'4'}
                key={'4'}
                title={t('RayonnageMi-LourdàdeuxNiveaux')}
                imgURL={'/images/Images/RayonnageMi-LourdàdeuxNiveaux.jpg'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ToursForSlide
                id={'5'}
                key={'5'}
                title={t('rayonnageparaccumulationclassique')}
                imgURL={'/images/Images/rayonnageparaccumulationclassique3.jpg'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ToursForSlide
                id={'6'}
                key={'6'}
                title={t('rayonnageparaccumulationavecnavette')}
                imgURL={
                  '/images/Images/rayonnageparaccumulationavecnavette5.jpg'
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="tour-progress-v2"></div>
      </div>
    </>
  )
}

export default TourSlider
