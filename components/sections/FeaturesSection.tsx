import { Zap, Lock, CheckCircle, Eye } from 'lucide-react'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-200">
      <div className="mb-4 text-blue-600 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'One-Click Fill',
      description: 'Fill entire forms instantly with your saved profile data',
    },
    {
      icon: <Lock size={32} />,
      title: 'Local Encryption',
      description: 'AES-256 encryption keeps your data secure on your device',
    },
    {
      icon: <Eye size={32} />,
      title: 'Field Detection',
      description: 'Intelligent detection with 95%+ accuracy across job portals',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Preview Before Fill',
      description: 'Review exactly what will be filled before confirming',
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Powerful Features</h2>
          <p className="section-subheading">
            Everything you need for faster job applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Test on Dummy Portal</h4>
                <p className="text-gray-600">Try the extension on our <a href="/auto-fill-extension-website/dummy-job-portal" className="text-blue-600 hover:underline font-semibold">safe testing environment</a> with a fully functional dummy job application form</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Manual Field Control</h4>
                <p className="text-gray-600">Select which fields to fill for each application</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Work Experience Management</h4>
                <p className="text-gray-600">Add multiple job experiences and reorder them</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Works Offline</h4>
                <p className="text-gray-600">Extension operates completely offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
