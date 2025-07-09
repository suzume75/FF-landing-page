import './App.css'
import React from 'react'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Menu from './menu.jsx'
import SpecialOfferBanner from './SpecialOffer-banner.jsx'
import ServicesSection from './servicesSection.jsx'
import AboutUs from './aboutUs.jsx'
import CustomerReviews from './customerReviews.jsx'
import ContactUs from './contactUs.jsx'
import Footer from './footer.jsx'

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
