import Link from 'next/link'

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Start for free</h1>
            <p className="text-gray-500 text-sm">No credit card required · 100 responses/mo free</p>
          </div>

          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50">
              <span>🔑</span> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50">
              <span>🐙</span> Continue with GitHub
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-4">
            By signing up you agree to our Terms of Service and Privacy Policy.
          </p>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
