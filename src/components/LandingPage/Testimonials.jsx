export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "BugTracker saved our team hours of duplicate bug fixes.",
      author: "Aarav, Developer"
    },
    {
      quote:
        "Finally, a tool where even non-tech testers can collaborate easily.",
      author: "Riya, QA Tester"
    },
    {
      quote:
        "The analytics gave us real insights into recurring issues. Brilliant!",
      author: "Kunal, Project Lead"
    }
  ];

  return (
    <section id="testimonials" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
        className="mb-5"
        style={{ fontSize: "2rem", color: "var(--color-white)" }}
      >
          What Our Users Say
         
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#272727] border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <p className="italic text-lg mb-4">“{t.quote}”</p>
              <span className="text-sm font-semibold text-gray-300">
                — {t.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
