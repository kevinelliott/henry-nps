import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
const tools = [
  {name:'list_responses',description:'List NPS/CSAT responses',inputSchema:{type:'object',properties:{}}},
  {name:'get_stats',description:'Get NPS score and trends',inputSchema:{type:'object',properties:{}}},
  {name:'create_survey',description:'Create a survey',inputSchema:{type:'object',properties:{name:{type:'string'},type:{type:'string'}},required:['name']}},
  {name:'update_survey',description:'Update a survey',inputSchema:{type:'object',properties:{id:{type:'string'},data:{type:'object'}},required:['id']}},
  {name:'delete_response',description:'Delete a response',inputSchema:{type:'object',properties:{id:{type:'string'}},required:['id']}},
]
export async function GET() { return NextResponse.json({tools}) }
export async function POST(req: NextRequest) {
  const {tool,arguments:args={}} = await req.json()
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  let result: unknown
  switch(tool) {
    case 'list_responses': { const {data} = await sb.from('responses').select('*').limit(50); result={responses:data}; break }
    case 'get_stats': { const {count} = await sb.from('responses').select('*',{count:'exact',head:true}); result={total:count}; break }
    case 'create_survey': { const {data} = await sb.from('surveys').insert([args as Record<string,unknown>]).select().single(); result={survey:data}; break }
    default: result={error:`Unknown tool: ${tool}`}
  }
  return NextResponse.json({tool,result})
}
