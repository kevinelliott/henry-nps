import Link from 'next/link'

export default function Login() {
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
          <Link href="/signup" className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
            Sign up
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-500 text-sm">Sign in to your HenryNPS account</p>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@company.com"
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
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-indigo-600 hover:underline">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
