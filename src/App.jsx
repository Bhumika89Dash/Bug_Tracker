import './App.css'
import DevDashboard from './components/DevDashboard'
import Navbar from './components/LandingPage/Navbar'
import Stars from './components/Stars'

function App() {
  return (
    <>
      {/* Stars as a fixed full-page background */}
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

   
   
      <div className="relative z-10">
        <DevDashboard />
      </div>
    </>
  )
}

export default App
