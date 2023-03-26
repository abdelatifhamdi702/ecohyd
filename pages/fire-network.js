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
        'fire-network',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const TermsCondition = () => {
  const { t } = useTranslation('fire-network')
  return (
    <>
      <PageBannerTwo
        bannerTitle={t('navbar:fire-network')}
        pageName={t('navbar:fire-network')}
        bgImageCss="br-bg-3"
      />
      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="pp-content-wrap">
                <div className="pp-content">
                  <p style={{ fontSize: '20px' }}>
                    <b>{t('title1')}</b>
                  </p>
                  <br />
                  <p style={{ fontSize: '20px' }}>{t('text1')}</p>
                  <br />
                  <p style={{ fontSize: '20px' }}>
                    <b>{t('title2')}</b>
                  </p>
                  <br />
                  <p style={{ fontSize: '20px' }}>{t('text2')}</p>
                  <br />
                  <img
                    src="/images/service/service2.jpg"
                    style={{
                      width: '550px',
                      height: '350px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  />
                  <br />
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
