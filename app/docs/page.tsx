import Link from 'next/link'

export default function Docs() {
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

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-gray-500 mb-12">Embed the survey widget, use the REST API, or connect AI agents via MCP.</p>

        {/* Embed */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Embed Widget</h2>
          <p className="text-gray-600 mb-4">
            Add one script tag to your app. The widget slides up from the bottom-right corner after a configurable delay.
            Replace <code className="bg-gray-100 px-1 rounded text-indigo-600">YOUR_SURVEY_TOKEN</code> with your survey token from the dashboard.
          </p>
          <div className="bg-gray-900 rounded-xl p-5 mb-4">
            <pre className="text-green-400 text-sm overflow-x-auto">{`<script src="https://henry-nps.vercel.app/api/embed/YOUR_SURVEY_TOKEN"></script>`}</pre>
          </div>
          <p className="text-sm text-gray-500">The widget automatically collects the score and optional comment and submits to <code className="bg-gray-100 px-1 rounded">/api/respond/[token]</code>.</p>
        </section>

        {/* REST API */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">REST API v1</h2>
          <p className="text-gray-600 mb-6">Authenticate with your API key from <Link href="/dashboard/settings" className="text-indigo-600 hover:underline">Dashboard → Settings</Link>.</p>

          <div className="space-y-6">
            {[
              {
                method: 'GET',
                path: '/api/v1/surveys',
                desc: 'List all your surveys.',
                response: `{ "surveys": [{ "id": "...", "name": "...", "type": "nps", "responses": 124, "avgScore": 42 }] }`,
              },
              {
                method: 'GET',
                path: '/api/v1/responses',
                desc: 'List responses. Filter by ?survey_id=, ?from=, ?to=, ?segment=',
                response: `{ "responses": [{ "score": 9, "segment": "promoter", "comment": "...", "created_at": "..." }] }`,
              },
              {
                method: 'GET',
                path: '/api/v1/stats',
                desc: 'Get NPS score calculation and trend.',
                response: `{ "nps": 42, "promoters": 68, "passives": 21, "detractors": 11, "trend": "+8" }`,
              },
              {
                method: 'POST',
                path: '/api/respond/[token]',
                desc: 'Submit a survey response. Public endpoint, CORS open.',
                response: `{ "ok": true }`,
              },
            ].map(ep => (
              <div key={ep.path} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 flex items-center gap-3 border-b border-gray-200">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {ep.method}
                  </span>
                  <code className="text-sm text-gray-800">{ep.path}</code>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-gray-600 mb-3">{ep.desc}</p>
                  <pre className="bg-gray-900 text-green-400 text-xs rounded-lg p-3 overflow-x-auto">{ep.response}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MCP */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">MCP Tools</h2>
          <p className="text-gray-600 mb-6">
            Connect AI agents (Claude, GPT-4, etc.) to your NPS data via the MCP endpoint at <code className="bg-gray-100 px-1 rounded text-indigo-600">POST /api/mcp</code>.
          </p>

          <div className="space-y-3">
            {[
              { tool: 'list_surveys', desc: 'Returns all surveys with response counts and average scores.' },
              { tool: 'get_stats', desc: 'Returns NPS score, promoter/passive/detractor breakdown, and trend.' },
              { tool: 'list_responses', desc: 'Returns responses with optional filters (survey_id, from, to, segment).' },
              { tool: 'create_survey', desc: 'Creates a new survey and returns the embed token.' },
              { tool: 'export_responses', desc: 'Exports responses as CSV or JSON for a given date range.' },
            ].map(t => (
              <div key={t.tool} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <code className="text-indigo-600 font-mono text-sm font-semibold whitespace-nowrap">{t.tool}</code>
                <span className="text-sm text-gray-600">{t.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gray-900 rounded-xl p-5">
            <p className="text-gray-400 text-xs mb-3">Example MCP request:</p>
            <pre className="text-green-400 text-sm overflow-x-auto">{`POST /api/mcp
Authorization: Bearer YOUR_API_KEY

{
  "tool": "get_stats",
  "params": { "survey_id": "surv-001" }
}`}</pre>
          </div>
        </section>

        {/* Database schema */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Database Schema</h2>
          <div className="bg-gray-900 rounded-xl p-5">
            <pre className="text-green-400 text-sm overflow-x-auto">{`-- profiles
id, email, full_name, tier, stripe_customer_id

-- surveys
id, owner_id, name, type (nps/csat/custom),
question, followup_prompt, token (unique), active

-- responses
id, survey_id, score, comment,
segment (promoter/passive/detractor),
user_agent, ip_address, metadata jsonb, created_at`}</pre>
          </div>
        </section>
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
