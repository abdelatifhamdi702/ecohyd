import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// navbar
import Navbar from './Navbar'
import NavbarTwo from './NavbarTwo'
import NavbarThree from './NavbarThree'

// footer
import Footer from './Footer'

const Layout = ({ children }) => {
  const router = useRouter()

  const { pathname } = router

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="EURL EcoHyd est une entreprise algérienne de disribution rayonnage. Fournitures, Poses & Maintenance de Rayonnages Lourds & Semi Lourds. EURL EcoHyd is an algerian shelving distribution company. Supplies, Installation & Maintenance of Heavy & Semi-Heavy Shelving."
        />
        <meta
          name="keywords"
          content="Eurl, Ecohyd, Eurl Ecohyd, Entreprise, Company, Algeria, Algérie, Laghouat, DZ, rayonnage, Tout Travaux De Rayonnage, Installation Réseau Incendie, Maintenance Des Sites Industriels, All Shelving Work, Fire Network Installation, Maintenance Of Industrial Sites, All Painting and Plastering Work, Tous Travaux de Peinture et Placoplatre"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.eurl-ecohyd.com" />
        <title>Eurl Ecohyd</title>
      </Head>

      {pathname === '/index-3' ? (
        <NavbarThree />
      ) : pathname === '/index-2' ? (
        <NavbarTwo />
      ) : (
        <Navbar />
      )}

      {children}

      {pathname === '/index-3' ? (
        <Footer />
      ) : pathname === '/index-2' ? (
        <Footer />
      ) : pathname === '/destination' ? (
        <Footer />
      ) : pathname === '/destination-details' ? (
        <Footer />
      ) : (
        <Footer />
      )}
    </>
  )
}

export default Layout
