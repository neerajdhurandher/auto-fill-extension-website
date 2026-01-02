export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Save Hours on Job Applications?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join job seekers using Auto-Fill to apply to more positions and focus on what matters - finding your dream job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://github.com/neerajdhurandher/auto-Fill-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Install Extension Now
          </a>
          <a
            href="/auto-fill-extension-website/dummy-job-portal"
            className="border-2 border-white text-white hover:bg-white hover:bg-opacity-20 hover:scale-105 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform"
          >
            🧪 Try Demo Portal
          </a>
        </div>

        <p className="text-blue-100 text-sm mb-3">
          ⏱️ Takes 2 minutes to install · 3 minutes to set up · 30 seconds to fill your first form
        </p>
        <p className="text-blue-100 text-sm">
          🎯 Test it first on our <a href="/auto-fill-extension-website/dummy-job-portal" className="underline hover:text-white">dummy job portal</a> before using on real applications
        </p>
      </div>
    </section>
  )
}
