import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.talentyconsulting.in'),
  title: 'Recruitment Consulting & Staffing in Bengaluru | Talenty Consulting',
  description: 'Talenty Consulting helps Bengaluru companies hire trained, job-ready employees fast. Recruitment consulting, talent screening & staffing — book your free consultation today.',
  alternates: {
    canonical: 'https://www.talentyconsulting.in',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
