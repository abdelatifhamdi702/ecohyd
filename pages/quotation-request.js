import React from 'react'
import ContactForm from '../components/Contact/RequestQuotationForm'
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
        bannerTitle={t('quotation-request')}
        pageName={t('quotation-request')}
        bgImageCss="br-bg-5"
      />

      <section className="contact-wrap ptb-100">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default ContactUs
