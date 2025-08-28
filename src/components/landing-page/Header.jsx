
import { useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#1c3144]/95 backdrop-blur-md shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#d00000] to-[#3f88c5] rounded-xl flex items-center justify-center shadow-lg">
              <i className="bi bi-bug text-white text-lg"></i>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#a2aebb] bg-clip-text text-transparent">
              BugTrackPro
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {["Home", "Features", "Pricing", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-[#a2aebb] hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#d00000] to-[#3f88c5] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
              <div className="flex items-center space-x-3 ml-8 pl-8 border-l border-white/20">
                <a
                  href="#"
                  className="text-[#a2aebb] hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#d00000] to-[#b50000] hover:from-[#b50000] hover:to-[#a00000] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-105 transform"
                >
                  Sign Up Free
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#a2aebb] hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <i
                className={`bi ${isMenuOpen ? "bi-x" : "bi-list"} text-xl transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-[#1c3144]/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl">
              {["Home", "Features", "Pricing", "About", "Login"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#a2aebb] hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="bg-gradient-to-r from-[#d00000] to-[#b50000] hover:from-[#b50000] hover:to-[#a00000] text-white block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 mt-4 text-center shadow-lg"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
