export const dynamic = 'force-dynamic'
import Link from 'next/link'

const DEMO_SURVEYS = [
  { id: 'surv-001', name: 'Post-signup NPS', type: 'NPS', responses: 124, avgScore: 42, trend: '+8', token: 'tok_abc123', active: true },
  { id: 'surv-002', name: 'Monthly CSAT', type: 'CSAT', responses: 89, avgScore: 4.2, trend: '+0.3', token: 'tok_def456', active: true },
  { id: 'surv-003', name: 'Feature launch pulse', type: 'NPS', responses: 31, avgScore: 61, trend: '+19', token: 'tok_ghi789', active: true },
]

export default function Surveys() {
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
            <Link href="/dashboard/surveys" className="text-sm text-indigo-600 font-medium">Surveys</Link>
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
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-sm text-amber-800">
          📋 <strong>Demo mode</strong> — Sign in to manage real surveys.
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Your Surveys</h2>
            <span className="text-sm text-gray-400">{DEMO_SURVEYS.length} surveys</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-5 py-3">Name</th>
                <th className="text-left px-5 py-3">Type</th>
                <th className="text-right px-5 py-3">Responses</th>
                <th className="text-right px-5 py-3">Avg Score</th>
                <th className="text-right px-5 py-3">Trend</th>
                <th className="text-left px-5 py-3">Embed Snippet</th>
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
                  <td className="px-5 py-4">
                    <code className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono">
                      {`/api/embed/${sv.token}`}
                    </code>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link href={`/s/${sv.token}`} className="text-xs text-indigo-600 hover:underline">Preview →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
