import { NextRequest, NextResponse } from 'next/server'

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params

  try {
    const body = await request.json()
    const { score, comment, metadata } = body

    if (score === undefined || score === null) {
      return NextResponse.json({ error: 'score is required' }, { status: 400 })
    }

    if (typeof score !== 'number' || score < 0 || score > 10) {
      return NextResponse.json({ error: 'score must be 0–10' }, { status: 400 })
    }

    // Determine NPS segment
    const segment = score >= 9 ? 'promoter' : score >= 7 ? 'passive' : 'detractor'

    // In production: look up survey by token, insert response to Supabase
    // const supabase = createClient(...)
    // const { data: survey } = await supabase.from('surveys').select('id').eq('token', token).single()
    // await supabase.from('responses').insert({ survey_id: survey.id, score, comment, segment, ... })

    console.log('[respond]', { token, score, segment, comment, metadata })

    return NextResponse.json(
      { ok: true, segment },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
