import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'shelving',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const TermsCondition = () => {
  const { t } = useTranslation('shelving')
  return (
    <>
      <PageBannerTwo
        bannerTitle={t('navbar:shelving')}
        pageName={t('navbar:shelving')}
        bgImageCss="br-bg-4"
      />
      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="pp-content-wrap">
                <div className="pp-content">
                  <p style={{ fontSize: '20px' }}>{t('title')}</p>
                  <br />
                  <b>1 - {t('rayonnageLéger')}</b>
                  <br />
                  <img
                    src="/images/Images/rayonnageLéger.png"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />

                  <b>2 - {t('RayonnageMi-Lourd')}</b>
                  <br />
                  <img
                    src="/images/Images/RayonnageMi-Lourd5.jpg"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />

                  <b>3 - {t('RayonnageLourd')}</b>
                  <br />
                  <img
                    src="/images/Images/RayonnageLourd.jpg"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />

                  <b>4 - {t('RayonnageMi-LourdàdeuxNiveaux')}</b>
                  <br />
                  <img
                    src="/images/Images/RayonnageMi-LourdàdeuxNiveaux.jpg"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />

                  <b>5 - {t('rayonnageparaccumulationclassique')}</b>
                  <br />
                  <img
                    src="/images/Images/rayonnageparaccumulationclassique3.jpg"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />

                  <b>6 - {t('rayonnageparaccumulationavecnavette')}</b>
                  <br />
                  <img
                    src="/images/Images/rayonnageparaccumulationavecnavette3.jpg"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsCondition
