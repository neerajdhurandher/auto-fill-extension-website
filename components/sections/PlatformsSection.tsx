import Image from 'next/image'

interface PlatformProps {
  name: string
  logo: string
  supported: boolean
}

function PlatformCard({ name, logo, supported }: PlatformProps) {
  return (
    <div className={`rounded-lg p-8 text-center transition duration-200 ${
      supported
        ? 'bg-green-50 border-2 border-green-500'
        : 'bg-gray-100 border-2 border-gray-300 opacity-60'
    }`}>
      <div className="flex justify-center mb-4">
        <Image 
          src={logo} 
          alt={`${name} logo`} 
          width={64} 
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
      <p className={`text-sm ${
        supported
          ? 'text-green-600 font-semibold'
          : 'text-gray-500'
      }`}>
        {supported ? '✓ Fully Supported' : 'Coming Soon'}
      </p>
    </div>
  )
}

export default function PlatformsSection() {
  const platforms = [
    { name: 'LinkedIn', logo: '/linkedin-logo.svg', supported: true },
    { name: 'Indeed', logo: '/indeed-logo.svg', supported: true },
    { name: 'Glassdoor', logo: '/glassdoor-logo.svg', supported: true },
    { name: 'Workday', logo: '/workday-logo.svg', supported: true },
    { name: 'Monster', logo: '/monster-logo.svg', supported: false },
    { name: 'ZipRecruiter', logo: '/ziprecruiter-logo.svg', supported: false },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Supported Platforms</h2>
          <p className="section-subheading">
            Works across the major job portals you use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} {...platform} />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            More Platforms Coming Soon
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            We're continuously adding support for more job portals. If you'd like us to add support for a specific platform, please open an issue on GitHub.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://github.com/neerajdhurandher/auto-Fill-Extension/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              Request a Platform →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
