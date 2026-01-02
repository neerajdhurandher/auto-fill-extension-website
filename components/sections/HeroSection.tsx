export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Save Hours on Job <span className="text-blue-600">Applications</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Intelligent Chrome extension that auto-fills job applications securely. Fill forms in seconds, not minutes. Your data stays on your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/neerajdhurandher/auto-Fill-Extension"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Install Extension
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary text-center"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-blue-600">95%+</p>
                <p className="text-gray-600">Field Detection Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">4 Portals</p>
                <p className="text-gray-600">LinkedIn, Indeed, Glassdoor, Workday</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">AES-256</p>
                <p className="text-gray-600">Military-Grade Encryption</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 hidden md:block">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-6xl mb-4">⚡</p>
                <p className="text-2xl font-bold">Auto-Fill in Action</p>
                <p className="text-blue-100 mt-2">Fill forms 10x faster</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
