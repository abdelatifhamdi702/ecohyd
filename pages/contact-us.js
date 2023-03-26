import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import PageBannerTwo from '../components/common/PageBannerTwo'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'contactus',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const ContactUs = () => {
  const { t } = useTranslation('navbar')
  return (
    <>
      <PageBannerTwo
        bannerTitle={t('contactUs')}
        pageName={t('contactUs')}
        bgImageCss="br-bg-2"
      />

      <section className="contact-wrap ptb-100">
        <div className="container">
          <div className="row pb-70">
            <div className="col-lg-4">
              <div className="contact-address">
                <div className="contact-icon">
                  <i className="ri-map-pin-fill"></i>
                </div>
                <div className="contact-info">
                  <h5>{t('address')}</h5>
                  <p className="mb-0">
                    rue el makam, Laghouat <br /> {t('algeria')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-address">
                <div className="contact-icon">
                  <i className="ri-map-pin-fill"></i>
                </div>
                <div className="contact-info">
                  <h5>Contact</h5>
                  <p className="mb-0">
                    {t('phone')}:{' '}
                    <a href="tel:+213550962370">+213.550.962.370</a>
                  </p>

                  <p className="mb-0">
                    Email:{' '}
                    <a href="mailto:eurl.ecohyd@gmail.com">
                      eurl.ecohyd@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-address">
                <div className="contact-icon">
                  <i className="ri-map-pin-fill"></i>
                </div>
                <div className="contact-info">
                  <h5 style={{ marginBottom: '25px' }}>{t('followUs')}</h5>
                  <ul className="social-profile v1">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100090966223820&mibextid=LQQJ4d"
                      >
                        <i className="ri-facebook-fill"></i>{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />

          <div className="row">
            <div className="col-lg-12">
              <div className="comp_map style2">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=03 rue Bisson 75020, Paris&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
