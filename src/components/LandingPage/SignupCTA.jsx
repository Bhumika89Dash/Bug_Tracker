import { useNavigate } from "react-router-dom";

export default function SignupSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Start Tracking Smarter Bugs Today
        </h2>
        <p className="text-lg mb-10 text-gray-300">
          Join BugTracker and streamline your QA process with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-white hover:bg-white hover:text-[#272727] transition"
          >
            Sign Up as Developer (GitHub OAuth)
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-white hover:bg-white hover:text-[#272727] transition"
          >
            Sign Up as Tester (Email)
          </button>
        </div>
      </div>
    </section>
  );
}