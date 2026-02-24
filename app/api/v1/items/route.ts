import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
function auth(req: NextRequest) { return (req.headers.get('authorization')||'').replace('Bearer ','').trim() }
export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({error:'Unauthorized'},{status:401})
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data, error } = await sb.from('responses').select('*').order('created_at',{ascending:false})
  if (error) return NextResponse.json({error:error.message},{status:500})
  return NextResponse.json({responses:data||[],count:(data||[]).length})
}
export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({error:'Unauthorized'},{status:401})
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const body = await req.json()
  const { data, error } = await sb.from('responses').insert([body]).select().single()
  if (error) return NextResponse.json({error:error.message},{status:500})
  return NextResponse.json({response:data},{status:201})
}
