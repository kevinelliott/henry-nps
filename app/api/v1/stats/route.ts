import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
export async function GET(req: NextRequest) {
  if (!(req.headers.get('authorization')||'').replace('Bearer ','').trim()) return NextResponse.json({error:'Unauthorized'},{status:401})
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { count } = await sb.from('responses').select('*',{count:'exact',head:true})
  return NextResponse.json({stats:{total_responses:count||0}})
}
