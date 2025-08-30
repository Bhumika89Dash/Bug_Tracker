import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10 mx-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 logo-font">BugTracker</h2>
          <p className="text-sm leading-relaxed">
            Streamline QA & collaboration for developers, testers, and project
            leaders — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["About", "Features", "How it Works", "Contact", "Privacy Policy"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative inline-block text-gray-400 hover:text-white transition duration-300 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5">
            <a
              href="#"
              className="p-3 rounded-full border border-gray-600 hover:border-white transition"
            >
              <FaTwitter size={22} className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-gray-600 hover:border-white transition"
            >
              <FaLinkedin size={22} className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-gray-600 hover:border-white transition"
            >
              <FaGithub size={22} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BugTracker. All rights reserved.
      </div>
    </footer>
  );
}
