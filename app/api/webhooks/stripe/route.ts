import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  try { const event = JSON.parse(await req.text()); console.log('Stripe:', event.type); return NextResponse.json({received:true}) }
  catch { return NextResponse.json({error:'Webhook error'},{status:400}) }
}
