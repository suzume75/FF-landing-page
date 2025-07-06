import './App.css'
import React from 'react'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Menu from './menu.jsx'
import SpecialOfferBanner from './SpecialOffer-banner.jsx'
import ServicesSection from './servicesSection.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Menu />
    <SpecialOfferBanner />
    <ServicesSection />
    </>
  )
}

export default App
