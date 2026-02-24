import { NextRequest, NextResponse } from 'next/server'

const DEMO_RESPONSES = [
  { id: 'resp-001', survey_id: 'surv-001', score: 9, type: 'nps', segment: 'promoter', comment: 'Love the product!', created_at: '2026-02-24T10:00:00Z' },
  { id: 'resp-002', survey_id: 'surv-001', score: 7, type: 'nps', segment: 'passive', comment: 'Good but missing X', created_at: '2026-02-24T09:30:00Z' },
  { id: 'resp-003', survey_id: 'surv-001', score: 3, type: 'nps', segment: 'detractor', comment: 'Too expensive', created_at: '2026-02-23T14:00:00Z' },
  { id: 'resp-004', survey_id: 'surv-002', score: 5, type: 'csat', segment: 'promoter', comment: 'Fast support!', created_at: '2026-02-23T12:00:00Z' },
]

function authenticate(request: NextRequest): boolean {
  const auth = request.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) return false
  return auth.replace('Bearer ', '').startsWith('hnps_')
}

export async function GET(request: NextRequest) {
  if (!authenticate(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const surveyId = searchParams.get('survey_id')
  const segment = searchParams.get('segment')
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  let results = [...DEMO_RESPONSES]

  if (surveyId) results = results.filter(r => r.survey_id === surveyId)
  if (segment) results = results.filter(r => r.segment === segment)
  if (from) results = results.filter(r => r.created_at >= from)
  if (to) results = results.filter(r => r.created_at <= to)

  return NextResponse.json({ responses: results, total: results.length })
}
