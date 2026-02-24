import Link from 'next/link'

const SNIPPET = `<script src="https://henry-nps.vercel.app/api/embed/YOUR_SURVEY_TOKEN"></script>`

export default function Embed() {
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
            <Link href="/dashboard/embed" className="text-sm text-indigo-600 font-medium">Embed</Link>
            <Link href="/dashboard/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          </div>
          <Link href="/dashboard/surveys/new" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
            + New Survey
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-sm text-amber-800">
          📋 <strong>Demo mode</strong> — Sign in to get your real survey token.
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Embed the Survey Widget</h1>

        {/* Step 1 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">1</div>
            <h2 className="font-semibold text-gray-900">Add the script tag to your app</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Paste this one script tag before the closing <code className="bg-gray-100 px-1 rounded">&lt;/body&gt;</code> tag.
            Replace <code className="bg-gray-100 px-1 rounded text-indigo-600">YOUR_SURVEY_TOKEN</code> with your survey token from the <Link href="/dashboard/surveys" className="text-indigo-600 hover:underline">Surveys page</Link>.
          </p>
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">{SNIPPET}</pre>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">2</div>
            <h2 className="font-semibold text-gray-900">Optional: Pass user context</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Pass attributes to segment responses by plan, role, or any custom dimension.
          </p>
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">{`<script>
  window.HenryNPS = {
    token: 'YOUR_SURVEY_TOKEN',
    user: {
      plan: 'pro',
      role: 'admin',
      country: 'US'
    }
  };
</script>
<script src="https://henry-nps.vercel.app/api/embed/YOUR_SURVEY_TOKEN"></script>`}</pre>
          </div>
        </div>

        {/* Widget preview */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Widget Preview</h2>
          <div className="bg-gray-50 rounded-xl p-8 flex items-end justify-end" style={{ minHeight: '200px' }}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5 w-72">
              <div className="text-sm font-semibold text-gray-900 mb-1">📊 Quick question</div>
              <div className="text-xs text-gray-500 mb-4">How likely are you to recommend us?</div>
              <div className="flex gap-1 flex-wrap mb-3">
                {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
                  <div
                    key={n}
                    className={`w-7 h-7 rounded text-xs font-semibold flex items-center justify-center border cursor-pointer
                      ${n <= 6 ? 'border-red-200 text-red-500' : n <= 8 ? 'border-yellow-200 text-yellow-600' : 'border-green-200 text-green-600'}
                    `}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>Not likely</span>
                <span>Extremely likely</span>
              </div>
              <div className="text-xs text-gray-400 text-center">Powered by HenryNPS</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
