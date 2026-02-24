import Link from 'next/link'

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-gray-900">
            <span className="text-2xl">📊</span>
            <span className="font-bold text-xl">HenryNPS</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">Docs</Link>
          </div>
          <Link href="/dashboard" className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
            Get Started
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Everything you need for NPS & CSAT</h1>
          <p className="text-xl text-gray-500">Built for SaaS teams who want signal, not noise.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              icon: '📊',
              title: 'NPS & CSAT Surveys',
              desc: 'Run standard 0–10 NPS surveys or 1–5 CSAT star ratings. Switch types per survey with no code changes.',
            },
            {
              icon: '🔗',
              title: 'One-Tag Embed',
              desc: 'Add one script tag to your app. The widget slides up from the bottom-right corner, styled to match your brand.',
            },
            {
              icon: '📈',
              title: 'Score Trends',
              desc: 'Track your NPS and CSAT over time. See weekly and monthly trend lines, identify what moved the needle.',
            },
            {
              icon: '🎯',
              title: 'Segmentation',
              desc: 'Pass plan, role, country, or any custom attribute. Filter responses and scores by any dimension.',
            },
            {
              icon: '💬',
              title: 'Follow-up Comments',
              desc: 'After a score, users can optionally leave a comment. More signal without friction.',
            },
            {
              icon: '🔔',
              title: 'Low Score Alerts',
              desc: 'Get a webhook or email when a detractor (0–6) responds so you can follow up before they churn.',
            },
            {
              icon: '🔌',
              title: 'REST API v1',
              desc: 'Pull surveys, responses, and stats into your own dashboards, data warehouse, or BI tools.',
            },
            {
              icon: '🤖',
              title: 'MCP Endpoint',
              desc: 'AI agents (Claude, GPT, etc.) can call 5 MCP tools to read and analyze your NPS data in real-time.',
            },
          ].map(f => (
            <div key={f.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-3xl mb-4">{f.icon}</div>
              <div className="font-semibold text-gray-900 text-lg mb-2">{f.title}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/dashboard" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 text-lg">
            Start for free →
          </Link>
        </div>
      </div>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        <p>📊 HenryNPS · Built by Henry the Great 🗿 ·
          <Link href="/docs" className="hover:text-gray-600 ml-1">API Docs</Link> ·
          <Link href="/pricing" className="hover:text-gray-600 ml-1">Pricing</Link>
        </p>
      </footer>
    </div>
  )
}
