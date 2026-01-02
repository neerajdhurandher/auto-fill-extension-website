import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Auto-Fill Job Application Assistant',
  description: 'Privacy policy for Auto-Fill Chrome Extension. Learn how we protect your data with local encryption and zero data collection.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          Last Updated: January 2, 2026
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h2 className="text-xl font-bold text-green-900 mb-2">Our Privacy Commitment</h2>
            <p className="text-green-800">
              Auto-Fill Job Application Assistant is built with privacy as a core principle. 
              Your data stays on your device, encrypted and secure. We don't collect, transmit, 
              or sell your personal information. Ever.
            </p>
          </div>

          {/* Data Collection */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Data Collection</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What We DON'T Collect</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">We DO NOT collect your personal information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">We DO NOT track your browsing activity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">We DO NOT use analytics or tracking cookies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">We DO NOT transmit your data to our servers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">We DO NOT share data with third parties</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">What You Provide</h3>
            <p className="text-gray-700 mb-4">
              The only data in the extension is what you explicitly enter into the extension's settings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Personal information (name, email, phone, address)</li>
              <li>Work experience and employment history</li>
              <li>Educational background</li>
              <li>Skills and professional qualifications</li>
              <li>Cover letter templates</li>
            </ul>
            <p className="text-gray-600 mt-4 italic">
              This data is stored locally on your device using Chrome's storage API and is encrypted with AES-256.
            </p>
          </section>

          {/* Data Usage */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Data Usage</h2>
            <p className="text-gray-700 mb-4">
              Your data is used exclusively for the following purposes:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Auto-filling job application forms</span>
                  <p className="text-gray-600 text-sm">Populating form fields on supported job portals</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Field detection and matching</span>
                  <p className="text-gray-600 text-sm">Identifying which form fields correspond to your stored data</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <span className="font-semibold text-gray-900">Profile management</span>
                  <p className="text-gray-600 text-sm">Storing and retrieving your information for future use</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-900 font-semibold">
                Your data never leaves your device. All processing happens locally in your browser.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement multiple layers of security to protect your information:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">🔐 AES-256 Encryption</h4>
                <p className="text-gray-700">
                  All your data is encrypted using military-grade AES-256 encryption before being stored locally.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">💾 Local Storage Only</h4>
                <p className="text-gray-700">
                  Data is stored exclusively in Chrome's local storage on your device. No cloud storage or external databases.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">🔒 No Network Transmission</h4>
                <p className="text-gray-700">
                  The extension operates completely offline. Your data is never transmitted over the internet.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">⏱️ Auto-Lock</h4>
                <p className="text-gray-700">
                  Extension automatically locks after a period of inactivity to prevent unauthorized access.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">📖 Open Source</h4>
                <p className="text-gray-700">
                  Our code is publicly available on GitHub for transparency and security audits.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Your Rights & Control</h2>
            <p className="text-gray-700 mb-4">
              You have complete control over your data:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-900">Right to Access</span>
                  <p className="text-gray-600 text-sm">View all your stored data anytime through the settings panel</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-900">Right to Modify</span>
                  <p className="text-gray-600 text-sm">Edit, update, or change any stored information at any time</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-900">Right to Export</span>
                  <p className="text-gray-600 text-sm">Download your data in JSON format for backup or portability</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-900">Right to Delete</span>
                  <p className="text-gray-600 text-sm">Permanently erase all your data with one click (irreversible)</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              The extension does not integrate with any third-party services, analytics platforms, 
              or advertising networks.
            </p>
            <p className="text-gray-700 mb-4">
              When you use the extension to fill forms on job portals (LinkedIn, Indeed, Glassdoor, etc.), 
              you are subject to those platforms' privacy policies. We recommend reviewing their policies 
              before submitting applications.
            </p>
          </section>

          {/* GDPR Compliance */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. GDPR Compliance</h2>
            <p className="text-gray-700 mb-4">
              For users in the European Union, we are fully compliant with the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>No personal data is transferred outside your device</li>
              <li>No data processing occurs on our servers (we don't have servers)</li>
              <li>You have full control over your data at all times</li>
              <li>No consent is required for data processing since everything is local</li>
              <li>Data portability through the export feature</li>
              <li>Right to erasure (delete all data anytime)</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700">
              This extension is not intended for use by individuals under the age of 16. 
              We do not knowingly collect or store information from children. If you are under 16, 
              please do not use this extension.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. Any changes will be reflected 
              in the "Last Updated" date at the top of this page. We encourage you to review this 
              policy periodically.
            </p>
            <p className="text-gray-700">
              Since we don't collect user data, we have no way to notify you of changes. Please 
              check this page regularly for updates.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or the extension's data practices:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700">
                <span className="font-semibold">Email:</span>
                <a 
                  href="mailto:websiteneeraj@gmail.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  websiteneeraj@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="font-semibold">GitHub Issues:</span>
                <a 
                  href="https://github.com/neerajdhurandher/auto-Fill-Extension/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Report an Issue
                </a>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="font-semibold">Source Code:</span>
                <a 
                  href="https://github.com/neerajdhurandher/auto-Fill-Extension" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  View on GitHub
                </a>
              </li>
            </ul>
          </section>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Policy Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Data Collection:</p>
                <p className="text-gray-700">None - We don't collect anything</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Data Storage:</p>
                <p className="text-gray-700">Local only - On your device</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Data Transmission:</p>
                <p className="text-gray-700">Zero - Never leaves your device</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Encryption:</p>
                <p className="text-gray-700">AES-256 - Military-grade</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
