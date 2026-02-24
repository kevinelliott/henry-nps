export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ token: string }>
}

export default async function SurveyPage({ params }: Props) {
  const { token } = await params

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {/* Survey card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            How likely are you to recommend us to a friend or colleague?
          </h1>
          <p className="text-sm text-gray-400 mb-8">0 = Not at all likely, 10 = Extremely likely</p>

          {/* NPS Scale */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
              <button
                key={n}
                className={`w-10 h-10 rounded-lg border text-sm font-semibold transition-colors
                  ${n <= 6 ? 'border-red-200 text-red-600 hover:bg-red-50' :
                    n <= 8 ? 'border-yellow-200 text-yellow-600 hover:bg-yellow-50' :
                    'border-green-200 text-green-600 hover:bg-green-50'}
                `}
              >
                {n}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-400 mb-8">
            <span>Not likely at all</span>
            <span>Extremely likely</span>
          </div>

          {/* Comment */}
          <div className="text-left mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What&apos;s the main reason for your score? <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              rows={3}
              placeholder="Tell us more..."
            />
          </div>

          <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700">
            Submit
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Survey powered by <a href="/" className="text-indigo-600 hover:underline">HenryNPS</a>
          </p>
          <p className="sr-only">Token: {token}</p>
        </div>
      </div>
    </div>
  )
}
