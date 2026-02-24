import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📊</span>
          <span className="font-bold text-xl text-gray-900">HenryNPS</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">Docs</Link>
          <Link href="/dashboard" className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full mb-6">
          <span>📊</span>
          <span>$9/mo · vs Delighted $224/mo · vs AskNicely $299/mo</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Know your NPS in minutes
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          One script tag. Collect NPS and CSAT scores, segment by plan and role, track trends over time.
          Delighted charges $224/mo. We charge $9. The math is easy.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 text-lg">
            Start for free →
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
            See pricing
          </Link>
        </div>
      </div>

      {/* Social proof */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-6 text-center">
          {[
            { value: '42', label: 'Average NPS score' },
            { value: '127', label: 'Responses this month' },
            { value: '< 5 min', label: 'Time to first response' },
          ].map(stat => (
            <div key={stat.label} className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Everything a SaaS team needs</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              { icon: '📝', title: 'NPS & CSAT surveys', desc: '0–10 scale NPS or 1–5 star CSAT. Switch types per survey.' },
              { icon: '🔗', title: 'One-tag embed', desc: 'One script tag in your app. Widget slides up, no config needed.' },
              { icon: '📈', title: 'Trend tracking', desc: 'Weekly and monthly score trends. See what moved the needle.' },
              { icon: '🎯', title: 'Segmentation', desc: 'Filter by plan, role, or any custom attribute you pass in.' },
              { icon: '🔔', title: 'Low score alerts', desc: 'Webhook when a detractor responds — follow up before they churn.' },
              { icon: '🤖', title: 'MCP endpoint', desc: 'AI agents can read your NPS data and generate insights.' },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="font-semibold mb-1">{f.title}</div>
                <div className="text-sm text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">$9/mo vs $224/mo</h2>
        <p className="text-center text-gray-500 mb-10">Same features. 96% less cost.</p>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm text-gray-400 font-medium">Feature</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-indigo-600">HenryNPS</th>
                <th className="text-center px-6 py-4 text-sm text-gray-400 font-medium">Delighted</th>
                <th className="text-center px-6 py-4 text-sm text-gray-400 font-medium">AskNicely</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'NPS surveys', us: '✓', d: '✓', a: '✓' },
                { feature: 'CSAT surveys', us: '✓', d: '✓', a: '✓' },
                { feature: 'REST API', us: '✓', d: '✓', a: '✓' },
                { feature: 'Embed widget', us: '✓', d: '✓', a: '✓' },
                { feature: 'MCP / AI tools', us: '✓', d: '✗', a: '✗' },
                { feature: 'Monthly price', us: '$9', d: '$224', a: '$299' },
              ].map(row => (
                <tr key={row.feature} className="border-b border-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-700">{row.feature}</td>
                  <td className="px-6 py-3 text-center text-sm font-semibold text-green-600">{row.us}</td>
                  <td className="px-6 py-3 text-center text-sm text-gray-400">{row.d}</td>
                  <td className="px-6 py-3 text-center text-sm text-gray-400">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Code snippet */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">One script tag. Real insights.</h2>
          <p className="text-gray-500 mb-8">Add this to your app and start collecting NPS scores in minutes.</p>
          <div className="bg-gray-900 rounded-xl p-5 text-left mb-8">
            <pre className="text-green-400 text-sm overflow-x-auto">{`<script src="https://henry-nps.vercel.app/api/embed/YOUR_TOKEN"></script>`}</pre>
          </div>
          <Link href="/docs" className="text-indigo-600 hover:underline text-sm font-medium">
            View full documentation →
          </Link>
        </div>
      </div>

      {/* Pricing CTA */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple, honest pricing</h2>
        <p className="text-gray-500 mb-8">Free plan, no credit card. Upgrade when you&apos;re ready.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700">
            Start free →
          </Link>
          <Link href="/pricing" className="border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:border-gray-400">
            View pricing
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        <p>📊 HenryNPS · Built by Henry the Great 🗿 ·
          <Link href="/docs" className="hover:text-gray-600 ml-1">API Docs</Link> ·
          <Link href="/pricing" className="hover:text-gray-600 ml-1">Pricing</Link>
        </p>
      </footer>
    </div>
  )
}
