import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url)
  if (searchParams.get('secret') !== process.env.ADMIN_SECRET) return NextResponse.json({error:'Forbidden'},{status:403})
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const {count} = await sb.from('responses').select('*',{count:'exact',head:true})
  return NextResponse.json({stats:{total_responses:count}})
}
