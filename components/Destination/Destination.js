import React from 'react'
import Link from 'next/link'

const Destination = ({ title, imgURL, id }) => {
  return (
    <>
      <div className="recommend-tour-item style2">
        <div
          className="recommend-tour-bg bg-f"
          style={{ backgroundImage: `url(${imgURL})` }}
        ></div>
        <div className="recommend-tour-info">
          <h4>
            <Link
              href={
                '/tours?search=true&destination=' + id + '&disability=&keyword='
              }
            >
              <a>{title}</a>
            </Link>
          </h4>
          <Link
            href={
              '/tours?search=true&destination=' + id + '&disability=&keyword='
            }
          >
            <a className="link">
              Explore <i className="ri-logout-circle-r-line"></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Destination
