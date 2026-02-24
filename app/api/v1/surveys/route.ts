import { NextRequest, NextResponse } from 'next/server'

const DEMO_SURVEYS = [
  { id: 'surv-001', name: 'Post-signup NPS', type: 'nps', responses: 124, avgScore: 42, trend: '+8', active: true, token: 'tok_abc123' },
  { id: 'surv-002', name: 'Monthly CSAT', type: 'csat', responses: 89, avgScore: 4.2, trend: '+0.3', active: true, token: 'tok_def456' },
  { id: 'surv-003', name: 'Feature launch pulse', type: 'nps', responses: 31, avgScore: 61, trend: '+19', active: true, token: 'tok_ghi789' },
]

function authenticate(request: NextRequest): boolean {
  const auth = request.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) return false
  const key = auth.replace('Bearer ', '')
  return key.startsWith('hnps_')
}

export async function GET(request: NextRequest) {
  if (!authenticate(request)) {
    return NextResponse.json({ error: 'Unauthorized. Pass Authorization: Bearer hnps_...' }, { status: 401 })
  }

  return NextResponse.json({ surveys: DEMO_SURVEYS })
}
