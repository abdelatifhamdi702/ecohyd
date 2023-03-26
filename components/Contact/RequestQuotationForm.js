import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { useTranslation } from 'react-i18next'
const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully send and will back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  companyname: '',
  activity: '',
  phone: '',
  myemail: '',
  address: '',
  wilaya: '',
  type: '',
  surface: '',
  protection: '',
  height: '',
  material: '',
  time: '',
}

const ContactForm = () => {
  const { t } = useTranslation()
  const [contact, setContact] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact((prevState) => ({ ...prevState, [name]: value }))
    // console.log(contact)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const {
        companyname,
        activity,
        phone,
        myemail,
        address,
        wilaya,
        type,
        surface,
        protection,
        height,
        material,
        time,
      } = contact
      const payload = {
        companyname,
        activity,
        phone,
        myemail,
        address,
        wilaya,
        type,
        surface,
        protection,
        height,
        material,
        time,
      }
      const response = await axios.post(url, payload)
      console.log(response)
      setContact(INITIAL_STATE)
      alertContent()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row pb-100">
      <div className="col-lg-12">
        <div className="contact-form">
          <div className="section-title style1 text-center mb-30">
            <span>{t('navbar:quotation-request')}</span>
            <h2>{t('contactus:getintouch')}</h2>
          </div>

          {/*<form className="form-wrap" onSubmit={handleSubmit}>*/}
          <form
            action="https://formsubmit.co/eurl.ecohyd@gmail.com"
            method="POST"
            role="form"
            className="form-wrap"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput1')}
                  </label>
                  <input
                    type="text"
                    name="Nom / Raison Social"
                    className="form-control"
                    value={contact.companyname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput2')}
                  </label>
                  <input
                    type="text"
                    name="Activité de l'Entreprise"
                    className="form-control"
                    value={contact.activity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput3')}
                  </label>
                  <input
                    type="text"
                    name="Numéro Téléphone"
                    className="form-control"
                    value={contact.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput4')}
                  </label>
                  <input
                    type="text"
                    name="Email"
                    className="form-control"
                    value={contact.myemail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput5')}
                  </label>
                  <input
                    type="text"
                    name="Adresse"
                    className="form-control"
                    value={contact.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>Wilaya</label>
                  <input
                    type="text"
                    name="Wilaya"
                    className="form-control"
                    value={contact.wilaya}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput6')}
                  </label>
                  <input
                    type="text"
                    name="Type de Rayonnage"
                    className="form-control"
                    value={contact.type}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput7')}
                  </label>
                  <input
                    type="text"
                    name="Surface"
                    className="form-control"
                    value={contact.surface}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput8')}
                  </label>
                  <input
                    type="text"
                    name="Accessoires de Protection"
                    className="form-control"
                    value={contact.protection}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput9')}
                  </label>
                  <input
                    type="text"
                    name="Hauteur"
                    className="form-control"
                    value={contact.height}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput10')}
                  </label>
                  <input
                    type="text"
                    name="Chariot de Manutention Utilisé"
                    className="form-control"
                    value={contact.material}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label style={{ marginBottom: '10px' }}>
                    {t('contactus:qinput11')}
                  </label>
                  <input
                    type="text"
                    name="Délai de Réalisation Prévues"
                    className="form-control"
                    value={contact.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <label style={{ marginBottom: '30px' }}></label>
                <button type="submit" className="btn v5">
                  {t('contactus:btn')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
