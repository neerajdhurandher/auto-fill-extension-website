'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-center hover:text-blue-600 transition"
      >
        <h3 className="text-lg font-semibold text-gray-900 text-left">{question}</h3>
        <ChevronDown
          size={24}
          className={`text-blue-600 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is my data safe?',
      answer:
        'Absolutely. Your data is encrypted with AES-256 (military-grade encryption) and stored only on your computer. It never leaves your device, and we don\'t have access to your information.',
    },
    {
      question: 'Does the extension work offline?',
      answer:
        'Yes! The extension works entirely offline. It only needs internet to browse job sites. All the auto-fill functionality operates locally on your device.',
    },
    {
      question: 'Can I use the extension on multiple computers?',
      answer:
        'Currently, data is stored locally per computer. We\'re developing cloud sync with end-to-end encryption for future versions so you can access your profiles across devices.',
    },
    {
      question: 'What if a field isn\'t detected correctly?',
      answer:
        'You can manually adjust the mapping in the field detection settings. Our AI improves over time as more users provide feedback through GitHub issues.',
    },
    {
      question: 'Can I export my data?',
      answer:
        'Yes! Go to Settings → Export Data to download your encrypted profile. You can keep a backup for your records.',
    },
    {
      question: 'Is there a way to delete my data?',
      answer:
        'Yes. Settings → Delete All Data removes everything instantly. This action cannot be undone, so make sure you want to delete before confirming.',
    },
    {
      question: 'How accurate is the field detection?',
      answer:
        'On most popular portals (LinkedIn, Indeed, Glassdoor), accuracy is 95%+. We continuously improve detection algorithms based on user feedback.',
    },
    {
      question: 'Does it work on mobile Chrome?',
      answer:
        'Not yet. Chrome extensions on mobile have limited support. The desktop version is fully functional on Windows, Mac, and Linux.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Find answers to common questions about Auto-Fill
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <a
            href="https://github.com/neerajdhurandher/auto-Fill-Extension/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Ask on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
