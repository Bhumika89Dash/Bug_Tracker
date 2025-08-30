import React from 'react'
import Navbar from './LandingPage/Navbar'
import Hero from './LandingPage/Hero'
import Features from './LandingPage/Features'
import HowItWorks from './LandingPage/HowItWorks'
import TargetUsers from './LandingPage/TargetUsers'
import Testimonials from './LandingPage/Testimonials'
import SignupCTA from './LandingPage/SignupCTA'
import Footer from './LandingPage/Footer'
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <TargetUsers />
        <Testimonials />
        <SignupCTA />
        <Footer />
    </div>
  )
}

export default LandingPage