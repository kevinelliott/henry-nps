import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-gray-900 no-underline">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, honest pricing</h1>
          <p className="text-xl text-gray-500">No per-seat pricing. No enterprise surprises. Just flat monthly.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Free */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="text-lg font-semibold text-gray-900 mb-1">Free</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$0</div>
            <div className="text-sm text-gray-400 mb-6">forever</div>
            <ul className="space-y-3 mb-8">
              {['1 active survey', 'Up to 100 responses/mo', 'NPS survey type', 'Basic dashboard', 'API access'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400">
              Get started
            </Link>
          </div>

          {/* Starter */}
          <div className="bg-white rounded-xl border-2 border-indigo-600 p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Most popular</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Starter</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$9</div>
            <div className="text-sm text-gray-400 mb-6">per month</div>
            <ul className="space-y-3 mb-8">
              {['5 active surveys', 'Up to 2,000 responses/mo', 'NPS + CSAT + Custom', 'Trends & segmentation', 'Webhook alerts', 'Email digest', 'Priority support'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700">
              Start free trial
            </Link>
          </div>

          {/* Growth */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="text-lg font-semibold text-gray-900 mb-1">Growth</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$29</div>
            <div className="text-sm text-gray-400 mb-6">per month</div>
            <ul className="space-y-3 mb-8">
              {['Unlimited surveys', 'Unlimited responses', 'NPS + CSAT + Custom', 'Advanced segmentation', 'MCP endpoint', 'Webhook alerts', 'Weekly digest email', 'REST API v1', 'White-label widget'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400">
              Get started
            </Link>
          </div>
        </div>

        {/* Comparison callout */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-700 text-lg">
            Compare: Delighted starts at <strong>$224/mo</strong>. AskNicely starts at <strong>$199/mo</strong>.
            HenryNPS is <strong>$9/mo</strong> — that&apos;s a 96% savings.
          </p>
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
