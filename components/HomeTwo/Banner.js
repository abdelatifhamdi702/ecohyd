import React, { useEffect, useState } from 'react'
import TourSlider from '../Tour/TourSlider'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const Banner = () => {
  const { t } = useTranslation('index')
  var router = useRouter()
  const { locale } = router
  useEffect(() => {}, [locale])
  return (
    <>
      <div className="hero-wrap style2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="hero-content style2 text-left">
                <h1>
                  {t('bannertitle1')}
                  <br />
                  <span>{t('bannertitle2')}</span>
                </h1>
                <TourSlider />

                {/*<div className="filter-tours-wrap style2">
                  <div className="filter-box">
                    <div className="form-group">
                      <input type="search" id="keyWord" />
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter" id="destinationSelect">
                        {destinations.map((item, index) => (
                          <option value={item.id}>{item.title}</option>
                        ))}
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter" id="disSelect">
                        {disabilities.map((item, index) => (
                          <option key={item.id} value={item.code}>
                            {item.type}
                          </option>
                        ))}
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <button onClick={search} className="search-btn">
                      {t('bannerbtn')} <i className="ri-search-line"></i>
                    </button>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
