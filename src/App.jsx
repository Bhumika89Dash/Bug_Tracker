import './App.css'
import LandingPage from './components/LandingPage'
import DevDashboard from './components/DevDashboard.jsx'
import Navbar from './components/LandingPage/Navbar'
import Stars from './components/Stars'
import BugCursor from './components/LandingPage/BugCursor/BugPointer.jsx'

function App() {
  return (
    <>
    <BugCursor/>
      {/* Stars as a fixed full-page background */}
      <Stars className="fixed top-0 left-0 w-full h-full z-0" />

   
   
      <div className="relative z-10">
        <LandingPage />
      </div>
    </>
  )
}

export default App
