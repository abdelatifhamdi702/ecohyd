import React from 'react';
import Link from 'next/link';

const RecommendTour = () => {
  return (
    <>
      <section className='recommend-tour-area bg-minsk ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title text-center style2 mb-40'>
                <span>Our All</span>
                <h2>Recommended Destinations</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='rec-wrap'>
                <div className='recommend-tour-item style1'>
                  <div className='recommend-tour-bg bg-f rec-bg-1'></div>
                  <div className='recommend-tour-info'>
                    <h4>
                    <Link href='/destination'>
                      <a>Australia</a>
                      </Link>
                    </h4>
                    <p>27+ Place</p>
                    <Link href='/destination'>
                    <a className='link'>
                      Explore <i className='ri-logout-circle-r-line'></i>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style1'>
                  <div className='recommend-tour-bg bg-f rec-bg-2'></div>
                  <div className='recommend-tour-info'>
                    <h4>
                    <Link href='/destination'>
                      <a>Newzealand</a>
                      </Link>
                    </h4>
                    <p>15+ Place</p>
                    <Link href='/destination'>
                    <a className='link'>
                      Explore <i className='ri-logout-circle-r-line'></i>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style1'>
                  <div className='recommend-tour-bg bg-f rec-bg-3'></div>
                  <div className='recommend-tour-info'>
                    <h4>
                    <Link href='/destination'>
                      <a >Egypt</a>
                      </Link>
                    </h4>
                    <p>20+ Place</p>
                    <Link href='/destination'>
                    <a className='link'>
                      Explore <i className='ri-logout-circle-r-line'></i>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style1'>
                  <div className='recommend-tour-bg bg-f rec-bg-4'></div>
                  <div className='recommend-tour-info'>
                    <h4>
                    <Link href='/destination'>
                      <a>Africa</a>
                      </Link>
                    </h4>
                    <p>27+ Place</p>
                    <Link href='/destination'>
                    <a className='link'>
                      Explore <i className='ri-logout-circle-r-line'></i>
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendTour;
