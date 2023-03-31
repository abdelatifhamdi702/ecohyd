import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <footer className="footer-wrap style1 bg-heath">
        <div className="container">
          <div className="footer-top pt-100 pb-70">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">EURL EcoHyd</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/about-us">
                        <a>{t('navbar:aboutUs')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a>{t('navbar:contactUs')}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">
                    {t('footer:services')}
                  </h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/shelving">
                        <a>{t('navbar:shelving')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/fire-network">
                        <a>{t('navbar:fire-network')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/maintenance-of-industrial-sites">
                        <a>{t('navbar:maintenance-of-industrial-sites')}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">
                    {t('footer:information')}
                  </h4>
                  <ul className="footer-menu">
                    <Link href="/quotation-request">
                      <li>
                        <a>{t('navbar:quotation-request')}</a>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="footer-widget">
                  <h4 className="footer-widget-title">{t('footer:paySec')}</h4>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100090966223820&mibextid=LQQJ4d"
                    >
                      <i className="ri-facebook-fill"></i> Facebook
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">{t('footer:dist')} :</h4>
                  <ul className="payment-option">
                    <li>
                      <img src="/images/rsz_metal_structure.png" alt="Image" />
                    </li>
                    <li>
                      <img
                        src="/images/logo-stym-final-e1520782163493.png"
                        alt="Image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-4"></div>
              <div className="col-lg-6 col-md-8">
                <div className="copyright-text">
                  <p>
                    Copyright <span className="las la-copyright"></span> 2023
                    EURL EcoHyd. {t('footer:rights')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
