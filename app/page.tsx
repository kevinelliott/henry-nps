import Link from 'next/link'
const s = {bg:'#0d1117',bg2:'#161b22',bg3:'#21262d',border:'#30363d',text:'#e6edf3',muted:'#8b949e',green:'#238636',blue:'#1f6feb',red:'#da3633',amber:'#f59e0b'}
const SCORES = [
  {user:'Sarah M.',plan:'Pro',score:10,type:'NPS',comment:'Love it! Way simpler than Delighted.',time:'2m ago'},
  {user:'Alex T.',plan:'Growth',score:8,type:'NPS',comment:'Great tool, fast to set up.',time:'5m ago'},
  {user:'Jordan K.',plan:'Free',score:9,type:'CSAT',comment:'Exactly what I needed.',time:'12m ago'},
  {user:'Riley P.',plan:'Pro',score:6,type:'NPS',comment:'Works well, needs more export options.',time:'18m ago'},
]
function scoreColor(s: number) { return s>=9?'#238636':s>=7?'#1f6feb':'#da3633' }
function npsLabel(s: number) { return s>=9?'Promoter':s>=7?'Passive':'Detractor' }
export default function Home() {
  const npsScore = 62
  return (
    <div style={{backgroundColor:s.bg,color:s.text,minHeight:'100vh'}}>
      <nav style={{borderBottom:`1px solid ${s.border}`,padding:'16px 32px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',gap:'8px',alignItems:'center',textDecoration:'none',color:s.text}}><span>📊</span><span style={{fontWeight:700,fontSize:'18px'}}>henry-nps</span></Link>
        <div style={{display:'flex',gap:'24px',alignItems:'center'}}>
          <Link href="/features" style={{color:s.muted,textDecoration:'none',fontSize:'14px'}}>Features</Link>
          <Link href="/pricing" style={{color:s.muted,textDecoration:'none',fontSize:'14px'}}>Pricing</Link>
          <Link href="/docs" style={{color:s.muted,textDecoration:'none',fontSize:'14px'}}>Docs</Link>
          <Link href="/dashboard" style={{backgroundColor:s.green,color:'#fff',padding:'6px 16px',borderRadius:'6px',textDecoration:'none',fontSize:'14px',fontWeight:600}}>Dashboard →</Link>
        </div>
      </nav>
      <div style={{maxWidth:'960px',margin:'0 auto',padding:'80px 32px',textAlign:'center'}}>
        <div style={{display:'inline-block',backgroundColor:s.bg2,border:`1px solid ${s.border}`,borderRadius:'20px',padding:'4px 16px',fontSize:'13px',color:s.muted,marginBottom:'24px'}}>📊 $9/mo flat — vs Delighted $224/mo &amp; AskNicely $199/mo</div>
        <h1 style={{fontSize:'52px',fontWeight:800,lineHeight:1.1,margin:'0 0 24px'}}>NPS &amp; CSAT surveys that<br/><span style={{color:s.green}}>don&apos;t cost a fortune</span></h1>
        <p style={{fontSize:'20px',color:s.muted,maxWidth:'600px',margin:'0 auto 40px',lineHeight:1.6}}>One script tag. Collect NPS and CSAT scores, segment by plan and role, track trends over time. $9/mo vs $224/mo at Delighted.</p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',marginBottom:'48px'}}>
          <Link href="/dashboard" style={{backgroundColor:s.green,color:'#fff',padding:'12px 32px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600}}>Start free →</Link>
          <Link href="/pricing" style={{backgroundColor:s.bg3,color:s.text,padding:'12px 32px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600,border:`1px solid ${s.border}`}}>See pricing</Link>
        </div>
        <div style={{backgroundColor:s.bg2,border:`1px solid ${s.border}`,borderRadius:'12px',padding:'24px',textAlign:'left'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'20px'}}>
            <div>
              <div style={{fontSize:'12px',color:s.muted,marginBottom:'12px',fontWeight:600}}>YOUR NPS SCORE</div>
              <div style={{fontSize:'64px',fontWeight:800,color:s.green,lineHeight:1}}>{npsScore}</div>
              <div style={{fontSize:'13px',color:s.muted,marginBottom:'20px'}}>Good — above industry avg</div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {[{l:'Promoters',p:68,c:s.green},{l:'Passives',p:21,c:s.blue},{l:'Detractors',p:11,c:s.red}].map(b=>(
                  <div key={b.l}>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'4px'}}>
                      <span style={{color:s.muted}}>{b.l}</span><span style={{color:b.c,fontWeight:600}}>{b.p}%</span>
                    </div>
                    <div style={{height:'6px',backgroundColor:s.bg3,borderRadius:'3px',overflow:'hidden'}}>
                      <div style={{height:'100%',width:`${b.p}%`,backgroundColor:b.c,borderRadius:'3px'}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{fontSize:'12px',color:s.muted,marginBottom:'12px',fontWeight:600}}>RECENT RESPONSES</div>
              {SCORES.map(r=>(
                <div key={r.user} style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',padding:'10px 0',borderBottom:`1px solid ${s.border}`}}>
                  <div style={{display:'flex',gap:'10px',alignItems:'flex-start'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'50%',backgroundColor:scoreColor(r.score),display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'13px',color:'#fff',flexShrink:0}}>{r.score}</div>
                    <div>
                      <div style={{fontSize:'13px',fontWeight:600}}>{r.user} <span style={{color:s.muted,fontWeight:400}}>· {r.plan}</span></div>
                      <div style={{fontSize:'12px',color:s.muted,marginTop:'2px'}}>{r.comment}</div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'8px',alignItems:'center',flexShrink:0}}>
                    <span style={{fontSize:'11px',backgroundColor:s.bg3,border:`1px solid ${s.border}`,borderRadius:'4px',padding:'1px 6px',color:s.muted}}>{r.type}</span>
                    <span style={{fontSize:'11px',color:scoreColor(r.score)}}>{npsLabel(r.score)}</span>
                    <span style={{fontSize:'11px',color:s.muted}}>{r.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:s.bg2,borderTop:`1px solid ${s.border}`,borderBottom:`1px solid ${s.border}`,padding:'60px 32px'}}>
        <div style={{maxWidth:'960px',margin:'0 auto'}}>
          <h2 style={{fontSize:'32px',fontWeight:700,textAlign:'center',marginBottom:'40px'}}>$9/mo vs $224/mo</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
            {[
              {i:'📝',t:'NPS & CSAT',d:'Run NPS (0–10) or CSAT (1–5 stars) surveys. Switch types per survey.'},
              {i:'🎯',t:'Segmentation',d:'Filter results by plan, role, country, or any custom attribute you send.'},
              {i:'📈',t:'Trend tracking',d:'Watch your score improve over time with weekly/monthly trend charts.'},
              {i:'🚨',t:'Low score alerts',d:'Get notified when a detractor responds so you can follow up fast.'},
              {i:'📡',t:'REST API',d:'Pull responses into your own dashboards and data warehouse.'},
              {i:'🤖',t:'MCP endpoint',d:'AI agents can read your NPS data and generate insights.'},
            ].map(f=>(
              <div key={f.t} style={{backgroundColor:s.bg3,border:`1px solid ${s.border}`,borderRadius:'8px',padding:'20px'}}>
                <div style={{fontSize:'24px',marginBottom:'10px'}}>{f.i}</div>
                <div style={{fontWeight:600,marginBottom:'6px'}}>{f.t}</div>
                <div style={{fontSize:'13px',color:s.muted,lineHeight:1.6}}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{textAlign:'center',padding:'60px 32px'}}>
        <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'16px'}}>One script tag. Real insights.</h2>
        <pre style={{backgroundColor:s.bg2,border:`1px solid ${s.border}`,borderRadius:'8px',padding:'16px',fontSize:'13px',color:'#58a6ff',textAlign:'left',maxWidth:'560px',margin:'0 auto 32px',overflowX:'auto'}}>{`<script src="https://henry-nps.vercel.app/embed/YOUR_KEY"></script>`}</pre>
        <Link href="/dashboard" style={{backgroundColor:s.green,color:'#fff',padding:'14px 40px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600,display:'inline-block'}}>Get started free →</Link>
      </div>
      <footer style={{borderTop:`1px solid ${s.border}`,padding:'24px 32px',textAlign:'center',fontSize:'13px',color:s.muted}}>📊 henry-nps — built by Henry</footer>
    </div>
  )
}
