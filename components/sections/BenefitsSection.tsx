import { Clock, Target, Zap, TrendingUp } from 'lucide-react'

interface BenefitProps {
  icon: React.ReactNode
  title: string
  value: string
  description: string
}

function BenefitCard({ icon, title, value, description }: BenefitProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
      <div className="flex items-start gap-4">
        <div className="text-blue-600">{icon}</div>
        <div className="flex-1">
          <p className="text-2xl font-bold text-blue-600 mb-1">{value}</p>
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock size={24} />,
      title: 'Save Time',
      value: '80%',
      description: 'Reduce time spent on form filling from minutes to seconds',
    },
    {
      icon: <Target size={24} />,
      title: 'Apply More',
      value: '10x',
      description: 'Apply to 10+ jobs daily instead of 2-3 with reduced fatigue',
    },
    {
      icon: <Zap size={24} />,
      title: 'Reduce Errors',
      value: '99%',
      description: 'Minimize typos and inconsistencies in your applications',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Better Results',
      value: '3x',
      description: 'More consistent, professional applications lead to better outcomes',
    },
  ]

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Job Seekers Love Auto-Fill</h2>
          <p className="section-subheading">
            Transform your job search with measurable benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Real Impact on Your Job Search</h3>
            <p className="text-lg mb-8 text-blue-50">
              By eliminating repetitive data entry, you can focus on what matters most:
              customizing cover letters and finding the right job opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div>
                <p className="text-4xl font-bold mb-2">Hours</p>
                <p className="text-blue-100">Saved per week</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">More</p>
                <p className="text-blue-100">Opportunities explored</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">Better</p>
                <p className="text-blue-100">Quality applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
