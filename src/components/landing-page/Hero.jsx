import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3f88c5] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-[#ffba08] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#d00000] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#1c3144] mb-6 text-balance leading-tight animate-fade-in-up">
              Track Bugs.
              <span className="bg-gradient-to-r from-[#d00000] to-[#3f88c5] bg-clip-text text-transparent">
                Collaborate Better.
              </span>
              Deliver Faster.
            </h1>
            <p className="text-xl md:text-2xl text-[#a2aebb] mb-8 text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
              A next-gen bug tracking and project collaboration tool built for developers, testers, and project
              managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <button className="group bg-gradient-to-r from-[#d00000] to-[#b50000] hover:from-[#b50000] hover:to-[#a00000] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-red-500/25 hover:scale-105 transform">
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </button>
              <button className="group border-2 border-[#3f88c5] text-[#3f88c5] hover:bg-[#3f88c5] hover:text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 transform backdrop-blur-sm bg-white/80">
                <span className="flex items-center justify-center gap-2">
                  <i className="bi bi-play-circle"></i>
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3f88c5] to-[#d00000] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-[#3f88c5] via-[#1c3144] to-[#0f1419] rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                <div className="relative flex flex-col items-center space-y-4">
                  <i className="bi bi-bug text-white text-8xl animate-bounce-slow"></i>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#ffba08] rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-[#d00000] rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-3 h-3 bg-[#3f88c5] rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
