import 'bootstrap-icons/font/bootstrap-icons.css';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: "bi-bug",
      title: "Report Bugs Easily",
      description: "Submit detailed bug reports with screenshots, logs, and environment details in seconds.",
    },
    {
      step: "02",
      icon: "bi-arrow-right-circle",
      title: "Assign & Track Progress",
      description: "Automatically assign bugs to team members and track progress through customizable workflows.",
    },
    {
      step: "03",
      icon: "bi-check-circle",
      title: "Collaborate and Deliver",
      description: "Work together to resolve issues faster with real-time updates and seamless communication.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c3144] mb-4">How It Works</h2>
          <p className="text-xl text-[#a2aebb] max-w-3xl mx-auto">
            Get started in three simple steps and transform your bug tracking workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#3f88c5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`bi ${step.icon} text-white text-2xl`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#ffba08] rounded-full flex items-center justify-center">
                  <span className="text-[#1c3144] font-bold text-sm">{step.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#1c3144] mb-4">{step.title}</h3>
              <p className="text-[#a2aebb]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
