import Link from 'next/link'

export default function NewSurvey() {
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
            <Link href="/dashboard/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          </div>
          <Link href="/dashboard/surveys" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Survey</h1>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Survey Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Post-signup NPS"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Survey Type</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="nps">NPS (0–10 scale)</option>
                <option value="csat">CSAT (1–5 stars)</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
              <textarea
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                rows={3}
                defaultValue="How likely are you to recommend us to a friend or colleague?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Follow-up Prompt <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                rows={2}
                placeholder="What's the main reason for your score?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Branding</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Primary color</label>
                  <input
                    type="color"
                    className="w-full h-10 border border-gray-200 rounded-lg px-1 py-1 cursor-pointer"
                    defaultValue="#4f46e5"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Widget position</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Bottom right</option>
                    <option>Bottom left</option>
                    <option>Center modal</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700"
              >
                Create Survey
              </button>
              <Link
                href="/dashboard/surveys"
                className="border border-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold text-sm hover:border-gray-400"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
