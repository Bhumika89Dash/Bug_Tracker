export default function Footer() {
  const productLinks = ["Features", "Pricing", "API", "Integrations", "Security"]
  const companyLinks = ["About", "Blog", "Careers", "Press", "Partners"]
  const supportLinks = ["Help Center", "Documentation", "Contact", "Status", "Privacy"]
  const socialIcons = ["bi-twitter", "bi-linkedin", "bi-github", "bi-facebook"]

  return (
    <footer className="bg-[#1c3144] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">BugTrackPro</h3>
            <p className="text-[#a2aebb] mb-6">The next-generation bug tracking and project collaboration platform.</p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="text-[#a2aebb] hover:text-[#3f88c5] transition-colors duration-200">
                  <i className={`bi ${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#a2aebb] hover:text-[#3f88c5] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#a2aebb] hover:text-[#3f88c5] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#a2aebb] hover:text-[#3f88c5] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#a2aebb]/20 mt-12 pt-8 text-center">
          <p className="text-[#a2aebb]">© 2024 BugTrackPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
