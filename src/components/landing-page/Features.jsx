export default function Features() {
  const features = [
    {
      icon: "bi-exclamation-triangle",
      title: "Seamless Bug Reporting",
      description: "Report bugs quickly with detailed information, screenshots, and automatic environment detection.",
      color: "#ffba08",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "bi-kanban",
      title: "Custom Dashboards",
      description: "Tailored dashboards for admins, testers, and developers with role-based permissions.",
      color: "#3f88c5",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "bi-people",
      title: "Real-time Collaboration",
      description: "Work together seamlessly with live updates, comments, and instant notifications.",
      color: "#d00000",
      gradient: "from-red-500 to-red-700",
    },
    {
      icon: "bi-graph-up",
      title: "Analytics & Reporting",
      description: "Comprehensive insights and reports to track progress and identify bottlenecks.",
      color: "#ffba08",
      gradient: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3f88c5] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffba08] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3f88c5]/10 to-[#d00000]/10 rounded-full mb-6">
            <i className="bi bi-stars text-[#3f88c5] mr-2"></i>
            <span className="text-[#1c3144] font-semibold">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c3144] mb-6 text-balance">
            Powerful Features for
            <span className="bg-gradient-to-r from-[#3f88c5] to-[#d00000] bg-clip-text text-transparent">
              {" "}
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-[#a2aebb] max-w-3xl mx-auto leading-relaxed">
            Everything you need to streamline your bug tracking and project collaboration workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative">
                <div className="mb-6 relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`bi ${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                </div>

                <h3 className="text-xl font-bold text-[#1c3144] mb-4 group-hover:text-[#0f1419] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#a2aebb] leading-relaxed group-hover:text-[#8a9ba8] transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="bi bi-arrow-right text-[#3f88c5] text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
