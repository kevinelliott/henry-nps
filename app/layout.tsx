import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HenryNPS — NPS & CSAT for SaaS',
  description: 'Embed NPS and CSAT surveys. Track scores, segment by plan. $9/mo vs Delighted $224/mo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  )
}
