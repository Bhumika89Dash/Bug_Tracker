import './App.css'
import Header from './components/landing-page/Header'
import Hero from './components/landing-page/Hero'
import Features from './components/landing-page/Features'
import HowItWorks from './components/landing-page/HowItWorks'
import Testimonials from './components/landing-page/Testimonial'
import CallToAction from './components/landing-page/CallToAction'
import Footer from './components/landing-page/Footer'

function App() {
  return (
    <>
       <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
    </>
  )
}

export default App
