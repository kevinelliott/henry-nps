export const dynamic = 'force-dynamic'
import Link from 'next/link'

const DEMO_RESPONSES = [
  { id: 1, survey: 'Post-signup NPS', score: 9, type: 'NPS', segment: 'Promoter', comment: 'Love the product!', date: '2026-02-24' },
  { id: 2, survey: 'Post-signup NPS', score: 7, type: 'NPS', segment: 'Passive', comment: 'Good but missing X', date: '2026-02-24' },
  { id: 3, survey: 'Post-signup NPS', score: 3, type: 'NPS', segment: 'Detractor', comment: 'Too expensive', date: '2026-02-23' },
  { id: 4, survey: 'Monthly CSAT', score: 5, type: 'CSAT', segment: '⭐⭐⭐⭐⭐', comment: 'Fast support!', date: '2026-02-23' },
  { id: 5, survey: 'Monthly CSAT', score: 4, type: 'CSAT', segment: '⭐⭐⭐⭐', comment: 'Generally happy', date: '2026-02-22' },
  { id: 6, survey: 'Feature launch pulse', score: 10, type: 'NPS', segment: 'Promoter', comment: 'Best feature yet', date: '2026-02-22' },
  { id: 7, survey: 'Feature launch pulse', score: 8, type: 'NPS', segment: 'Promoter', comment: 'Works well', date: '2026-02-21' },
  { id: 8, survey: 'Post-signup NPS', score: 2, type: 'NPS', segment: 'Detractor', comment: 'Needs improvement', date: '2026-02-21' },
]

const segmentColors: Record<string, string> = {
  Promoter: 'bg-green-100 text-green-700',
  Passive: 'bg-yellow-100 text-yellow-700',
  Detractor: 'bg-red-100 text-red-700',
}

export default function Responses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between no-print">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-gray-900">📊 HenryNPS</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Overview</Link>
            <Link href="/dashboard/surveys" className="text-sm text-gray-600 hover:text-gray-900">Surveys</Link>
            <Link href="/dashboard/responses" className="text-sm text-indigo-600 font-medium">Responses</Link>
            <Link href="/dashboard/embed" className="text-sm text-gray-600 hover:text-gray-900">Embed</Link>
            <Link href="/dashboard/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          </div>
          <Link href="/dashboard/surveys/new" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
            + New Survey
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-sm text-amber-800">
          📋 <strong>Demo mode</strong> — Sign in to see your real responses.
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">All Responses</h2>
            <span className="text-sm text-gray-400">{DEMO_RESPONSES.length} responses</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-5 py-3">Score</th>
                <th className="text-left px-5 py-3">Survey</th>
                <th className="text-left px-5 py-3">Type</th>
                <th className="text-left px-5 py-3">Segment</th>
                <th className="text-left px-5 py-3">Comment</th>
                <th className="text-left px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_RESPONSES.map(r => (
                <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <span className="text-lg font-bold text-gray-900">{r.score}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">{r.survey}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{r.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${segmentColors[r.segment] || 'bg-gray-100 text-gray-600'}`}>
                      {r.segment}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">{r.comment}</td>
                  <td className="px-5 py-4 text-sm text-gray-400">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
