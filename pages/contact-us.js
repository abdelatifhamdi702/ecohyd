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
                    rue el makam, Laghouat <br /> {t('algeria')} <br />
                    <br />
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
                    {t('phone')} 1 :{' '}
                    <a href="tel:+213550962370">+213.550.962.370</a>
                    <br />
                    {t('phone')} 2 :{' '}
                    <a href="tel:+213657890944">+213.657.890.944</a>
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
                  <br />
                </div>
              </div>
            </div>
          </div>

          <ContactForm />

          <div className="row">
            <div className="col-lg-12">
              <div className="comp_map style2">
                <iframe
                  width="600"
                  height="400"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=33.799666%2C%202.860816+(EURL%20ECOHYD)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
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
