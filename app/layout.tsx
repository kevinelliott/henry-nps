import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'henry-nps — NPS & CSAT for SaaS', description: 'Embed NPS and CSAT surveys. Track scores, segment by plan. $9/mo vs Delighted $224/mo.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{backgroundColor:'#0d1117',color:'#e6edf3',minHeight:'100vh'}}>{children}</body></html>
}
