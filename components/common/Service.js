import Link from 'next/link'
import { useTranslation } from 'react-i18next'
const Service = () => {
  const { t } = useTranslation('aboutus')
  return (
    <>
      <section className="service-wrap pt-100 pb-100">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>{t('allour')}</span>
                <h2>{t('services')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/shelving">
                    <a>
                      <img src="/images/service/service1.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/shelving">
                      <a>{t('p1')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/fire-network">
                    <a>
                      <img src="/images/service/service2.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/fire-network">
                      <a>{t('p2')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="/maintenance-of-industrial-sites">
                    <a>
                      <img src="/images/service/service3.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/maintenance-of-industrial-sites">
                      <a>{t('p3')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
