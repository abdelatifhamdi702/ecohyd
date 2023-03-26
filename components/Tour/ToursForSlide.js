import React from 'react'
import Link from 'next/link'
const ToursForSlide = ({ id, title, imgURL }) => {
  return (
    <>
      <div className="col-xl-6 col-lg-12">
        <div className="feature-tour-card style2">
          <div className="row gx-0">
            <div className="col-md-12">
              <Link href="/shelving">
                <div
                  className="tour-details-item bg-f"
                  style={{ backgroundImage: `url(${imgURL})` }}
                ></div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              marginLeft: '15px',
              color: '#fff',
              marginTop: '-180px',
            }}
          >
            <Link href="/shelving">
              <a
                style={{
                  color: '#fff',
                  marginTop: '-180px',
                }}
              >
                {title}
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </>
  )
}

export default ToursForSlide
