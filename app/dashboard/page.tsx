export const dynamic = 'force-dynamic'
import Link from 'next/link'

const DEMO_SURVEYS = [
  { id: 'surv-001', name: 'Post-signup NPS', type: 'NPS', responses: 124, avgScore: 42, trend: '+8' },
  { id: 'surv-002', name: 'Monthly CSAT', type: 'CSAT', responses: 89, avgScore: 4.2, trend: '+0.3' },
  { id: 'surv-003', name: 'Feature launch pulse', type: 'NPS', responses: 31, avgScore: 61, trend: '+19' },
]

const DEMO_RESPONSES = [
  { score: 9, type: 'NPS', segment: 'Promoter', comment: 'Love the product!', date: '2026-02-24' },
  { score: 7, type: 'NPS', segment: 'Passive', comment: 'Good but missing X', date: '2026-02-24' },
  { score: 3, type: 'NPS', segment: 'Detractor', comment: 'Too expensive', date: '2026-02-23' },
  { score: 5, type: 'CSAT', segment: '⭐⭐⭐⭐⭐', comment: 'Fast support!', date: '2026-02-23' },
]

const segmentColors: Record<string, string> = {
  Promoter: 'bg-green-100 text-green-700',
  Passive: 'bg-yellow-100 text-yellow-700',
  Detractor: 'bg-red-100 text-red-700',
}

export default function Dashboard() {
  const totalResponses = DEMO_SURVEYS.reduce((s, sv) => s + sv.responses, 0)
  const promoters = DEMO_RESPONSES.filter(r => r.segment === 'Promoter').length
  const detractors = DEMO_RESPONSES.filter(r => r.segment === 'Detractor').length
  const promoterPct = Math.round((promoters / DEMO_RESPONSES.length) * 100)
  const detractorPct = Math.round((detractors / DEMO_RESPONSES.length) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between no-print">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-gray-900">📊 HenryNPS</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/dashboard/surveys" className="text-sm text-gray-600 hover:text-gray-900">Surveys</Link>
            <Link href="/dashboard/responses" className="text-sm text-gray-600 hover:text-gray-900">Responses</Link>
            <Link href="/dashboard/embed" className="text-sm text-gray-600 hover:text-gray-900">Embed</Link>
            <Link href="/dashboard/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          </div>
          <Link href="/dashboard/surveys/new" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
            + New Survey
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-sm text-amber-800">
          📋 <strong>Demo mode</strong> — Sign in to save real surveys and collect live responses. This is a preview with sample data.
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
          {[
            { label: 'Avg NPS Score', value: '42', color: 'text-green-600' },
            { label: 'Responses This Month', value: totalResponses.toString(), color: 'text-gray-900' },
            { label: 'Promoters %', value: `${promoterPct}%`, color: 'text-green-600' },
            { label: 'Detractors %', value: `${detractorPct}%`, color: 'text-red-600' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-sm text-gray-500 mb-1">{s.label}</div>
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Surveys list */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Surveys</h2>
            <Link href="/dashboard/surveys" className="text-sm text-indigo-600 hover:underline">View all →</Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-5 py-3">Name</th>
                <th className="text-left px-5 py-3">Type</th>
                <th className="text-right px-5 py-3">Responses</th>
                <th className="text-right px-5 py-3">Avg Score</th>
                <th className="text-right px-5 py-3">Trend</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {DEMO_SURVEYS.map(sv => (
                <tr key={sv.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm font-medium text-gray-900">{sv.name}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">{sv.type}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600 text-right">{sv.responses}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-right">{sv.avgScore}</td>
                  <td className="px-5 py-4 text-sm text-green-600 text-right font-medium">{sv.trend}</td>
                  <td className="px-5 py-4 text-right">
                    <Link href={`/dashboard/surveys/${sv.id}`} className="text-xs text-indigo-600 hover:underline">View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent responses */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Responses</h2>
            <Link href="/dashboard/responses" className="text-sm text-indigo-600 hover:underline">View all →</Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-5 py-3">Score</th>
                <th className="text-left px-5 py-3">Type</th>
                <th className="text-left px-5 py-3">Segment</th>
                <th className="text-left px-5 py-3">Comment</th>
                <th className="text-left px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_RESPONSES.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <span className="text-lg font-bold text-gray-900">{r.score}</span>
                  </td>
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
