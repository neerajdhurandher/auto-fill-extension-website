interface StepProps {
  number: number
  title: string
  description: string
  details: string[]
}

function StepCard({ number, title, description, details }: StepProps) {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 ml-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Install the Extension',
      description: 'Add Auto-Fill to your Chrome browser in seconds',
      details: [
        'Click "Install" button or visit Chrome Web Store',
        'Enable the extension in your toolbar',
        'Grant necessary permissions',
      ],
    },
    {
      number: 2,
      title: 'Create Your Profile',
      description: 'Save your personal and professional information',
      details: [
        'Enter personal details (name, email, phone)',
        'Add work experience (up to 10 jobs)',
        'Include skills and education',
        'Data is encrypted with AES-256',
      ],
    },
    {
      number: 3,
      title: 'Apply to Jobs',
      description: 'One-click form filling on any supported portal',
      details: [
        'Navigate to a job application form',
        'Click the Auto-Fill icon in your toolbar',
        'Review detected fields',
        'Click "Fill Form" to auto-fill',
      ],
    },
    {
      number: 4,
      title: 'Customize & Submit',
      description: 'Review and submit your application',
      details: [
        'Review all pre-filled information',
        'Make any necessary adjustments',
        'Add cover letter if needed',
        'Submit your application',
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Total Setup Time: 5 Minutes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">2 min</p>
              <p className="text-gray-600">Install</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">3 min</p>
              <p className="text-gray-600">Setup Profile</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">30 sec</p>
              <p className="text-gray-600">First Application</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">∞</p>
              <p className="text-gray-600">Time Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
