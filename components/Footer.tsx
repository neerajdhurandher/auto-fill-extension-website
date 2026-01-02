export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Auto-Fill</h3>
            <p className="text-sm">
              Streamline your job application process with intelligent auto-fill technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/neerajdhurandher/auto-Fill-Extension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/neerajdhurandher/auto-Fill-Extension/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Issues & Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/auto-fill-extension-website/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} Auto-Fill Job Application Assistant. All rights reserved.
            </p>
            <p className="text-sm mt-4 md:mt-0">
              Developed with ❤️ by{' '}
              <a
                href="https://neerajdhurandher.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Neeraj Dhurandher
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
