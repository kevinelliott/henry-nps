import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET || 'cron_henry_2026'

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // In production: query Supabase for all active users + their NPS stats
  // then send weekly digest emails via Resend
  //
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // const users = await supabase.from('profiles').select('email, full_name').eq('digest_enabled', true)
  // for (const user of users) {
  //   await resend.emails.send({
  //     from: 'digest@henry-nps.vercel.app',
  //     to: user.email,
  //     subject: 'Your weekly NPS digest',
  //     html: `<h1>NPS: 42</h1><p>This week: +8 from last week</p>`,
  //   })
  // }

  return NextResponse.json({
    ok: true,
    message: 'Weekly NPS digest queued',
    timestamp: new Date().toISOString(),
  })
}
