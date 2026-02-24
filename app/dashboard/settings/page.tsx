import Link from 'next/link'

export default function Settings() {
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
            <Link href="/dashboard/responses" className="text-sm text-gray-600 hover:text-gray-900">Responses</Link>
            <Link href="/dashboard/embed" className="text-sm text-gray-600 hover:text-gray-900">Embed</Link>
            <Link href="/dashboard/settings" className="text-sm text-indigo-600 font-medium">Settings</Link>
          </div>
          <Link href="/dashboard/surveys/new" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
            + New Survey
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-sm text-amber-800">
          📋 <strong>Demo mode</strong> — Sign in to manage your real settings.
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="space-y-6">
          {/* API Key */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">API Key</h2>
            <p className="text-sm text-gray-500 mb-3">Use this key to authenticate API requests. Keep it secret.</p>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 font-mono text-gray-600"
                value="hnps_demo_sk_xxxxxxxxxxxxxxxxxxxx"
              />
              <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-400">
                Copy
              </button>
            </div>
          </div>

          {/* Webhook */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Webhook URL</h2>
            <p className="text-sm text-gray-500 mb-3">
              We&apos;ll POST a JSON payload to this URL when a new response is submitted.
              Useful for Slack alerts or CRM integrations.
            </p>
            <div className="flex gap-2">
              <input
                type="url"
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://your-app.com/webhooks/nps"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
                Save
              </button>
            </div>
          </div>

          {/* Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Plan</h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium text-gray-900">Free plan</div>
                <div className="text-sm text-gray-500">1 survey · 100 responses/mo</div>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Current</span>
            </div>
            <Link
              href="/pricing"
              className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700"
            >
              Upgrade to Starter — $9/mo
            </Link>
          </div>

          {/* Weekly digest */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Weekly Digest</h2>
            <p className="text-sm text-gray-500 mb-3">
              Receive a weekly email every Monday with your NPS score, trend, and top responses.
            </p>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-6 bg-indigo-600 rounded-full"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-4"></div>
              </div>
              <span className="text-sm text-gray-700">Send weekly digest email</span>
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}
