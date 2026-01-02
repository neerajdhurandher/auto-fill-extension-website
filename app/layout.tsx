import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Auto-Fill Job Application Assistant - Chrome Extension',
  description: 'Save hours on job applications with our AI-powered Chrome extension. Auto-fill forms securely across LinkedIn, Indeed, Glassdoor, and more.',
  keywords: ['Chrome extension', 'Job application', 'Auto-fill', 'Job hunting', 'LinkedIn', 'Indeed', 'Glassdoor'],
  authors: [{ name: 'Neeraj Dhurandher' }],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neerajdhurandher.me/auto-fill-extension',
    siteName: 'Auto-Fill Job Application Assistant',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
