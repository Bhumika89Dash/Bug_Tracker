import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer at TechCorp",
      avatar: "/professional-woman-developer.png",
      quote:
        "BugTrackPro has revolutionized how our team handles bug tracking. The real-time collaboration features are game-changing.",
      rating: 5,
      company: "TechCorp",
    },
    {
      name: "Mike Rodriguez",
      role: "QA Manager at StartupXYZ",
      avatar: "/professional-man-qa-manager.png",
      quote:
        "The custom dashboards and analytics have given us incredible insights into our development process. Highly recommended!",
      rating: 5,
      company: "StartupXYZ",
    },
    {
      name: "Emily Johnson",
      role: "Project Manager at DevStudio",
      avatar: "/professional-woman-project-manager.png",
      quote:
        "Finally, a bug tracking tool that actually makes sense. Our delivery times have improved by 40% since switching.",
      rating: 5,
      company: "DevStudio",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3f88c5] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#d00000] rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3f88c5]/10 to-[#d00000]/10 rounded-full mb-6">
            <i className="bi bi-chat-quote text-[#3f88c5] mr-2"></i>
            <span className="text-[#1c3144] font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c3144] mb-6 text-balance">
            What Our
            <span className="bg-gradient-to-r from-[#3f88c5] to-[#d00000] bg-clip-text text-transparent">
              {" "}
              Users Say
            </span>
          </h2>
          <p className="text-xl text-[#a2aebb] max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams who trust BugTrackPro for their project management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3f88c5]/5 to-[#d00000]/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-[#3f88c5] to-[#d00000] rounded-full flex items-center justify-center shadow-lg">
                  <i className="bi bi-quote text-white text-sm"></i>
                </div>

                <div className="flex items-center mb-6 pt-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl mr-4 shadow-lg ring-2 ring-white group-hover:ring-[#3f88c5]/20 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#ffba08] to-[#d00000] rounded-full flex items-center justify-center shadow-lg">
                      <i className="bi bi-check text-white text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1c3144] text-lg group-hover:text-[#0f1419] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#a2aebb] text-sm font-medium">{testimonial.role}</p>
                    <p className="text-[#3f88c5] text-xs font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <blockquote className="text-[#1c3144] text-lg leading-relaxed mb-6 group-hover:text-[#0f1419] transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex text-[#ffba08] space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="bi bi-star-fill text-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      ></i>
                    ))}
                  </div>
                  <div className="text-[#a2aebb] text-sm font-medium">Verified Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-[#a2aebb]">
            <div className="flex items-center space-x-2">
              <i className="bi bi-shield-check text-[#3f88c5]"></i>
              <span className="text-sm font-medium">Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="bi bi-people text-[#d00000]"></i>
              <span className="text-sm font-medium">10,000+ Happy Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="bi bi-star-fill text-[#ffba08]"></i>
              <span className="text-sm font-medium">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
