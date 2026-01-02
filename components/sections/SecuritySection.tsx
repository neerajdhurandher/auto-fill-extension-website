import { Lock, Server, Eye, Trash2 } from 'lucide-react'

interface SecurityFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function SecurityFeature({ icon, title, description }: SecurityFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="text-green-600 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function SecuritySection() {
  const features = [
    {
      icon: <Lock size={24} />,
      title: 'AES-256 Encryption',
      description: 'Military-grade encryption protects your data before storage',
    },
    {
      icon: <Server size={24} />,
      title: 'Local Storage Only',
      description: 'All data stays on your computer. Zero cloud uploads.',
    },
    {
      icon: <Eye size={24} />,
      title: 'No Third-Party APIs',
      description: 'Data never leaves your device or goes to external services',
    },
    {
      icon: <Trash2 size={24} />,
      title: 'Full Data Control',
      description: 'Export or delete all your data anytime with one click',
    },
  ]

  return (
    <section id="security" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Your Privacy is Our Priority</h2>
          <p className="section-subheading">
            Enterprise-grade security for your personal data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <SecurityFeature key={index} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Your Data is Protected</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Data encrypted with AES-256 before storing</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Encrypted data stored only in Chrome Storage</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Zero analytics or tracking</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Auto-lock after inactivity</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Open source code for transparency</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">GDPR & Compliance</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">GDPR compliant - No data sharing or transfers</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Your data is yours - Delete anytime</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Transparent operations - See what's stored</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">No tracking or user monitoring</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">Open Source - Code is auditable</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
          <p className="text-center text-gray-700">
            <span className="font-semibold">Your trust matters to us.</span> That's why we keep everything local, encrypt everything, and never monetize your data. Your information is yours alone.
          </p>
        </div>
      </div>
    </section>
  )
}
