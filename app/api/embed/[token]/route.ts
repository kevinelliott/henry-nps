import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params

  const js = `(function(){
  var token = ${JSON.stringify(token)};
  var base = 'https://henry-nps.vercel.app';

  function createWidget() {
    if (document.getElementById('hnps-widget')) return;

    var container = document.createElement('div');
    container.id = 'hnps-widget';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;';

    var card = document.createElement('div');
    card.style.cssText = 'background:#fff;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);padding:24px;width:320px;border:1px solid #e5e7eb;';

    var title = document.createElement('div');
    title.style.cssText = 'font-weight:600;font-size:14px;color:#111827;margin-bottom:4px;';
    title.textContent = '📊 Quick question';

    var question = document.createElement('div');
    question.style.cssText = 'font-size:13px;color:#6b7280;margin-bottom:16px;';
    question.textContent = 'How likely are you to recommend us to a friend or colleague?';

    var scaleWrap = document.createElement('div');
    scaleWrap.style.cssText = 'display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;';

    var selectedScore = null;

    for (var i = 0; i <= 10; i++) {
      (function(n) {
        var btn = document.createElement('button');
        btn.textContent = n;
        btn.style.cssText = 'width:26px;height:26px;border-radius:6px;border:1px solid;font-size:12px;font-weight:600;cursor:pointer;background:#fff;';
        btn.style.borderColor = n <= 6 ? '#fca5a5' : n <= 8 ? '#fde68a' : '#6ee7b7';
        btn.style.color = n <= 6 ? '#dc2626' : n <= 8 ? '#d97706' : '#059669';
        btn.onclick = function() {
          selectedScore = n;
          Array.from(scaleWrap.children).forEach(function(b) {
            b.style.opacity = '0.5';
          });
          btn.style.opacity = '1';
          btn.style.background = n <= 6 ? '#fee2e2' : n <= 8 ? '#fef3c7' : '#d1fae5';
          setTimeout(function() { showComment(n); }, 200);
        };
        scaleWrap.appendChild(btn);
      })(i);
    }

    var labels = document.createElement('div');
    labels.style.cssText = 'display:flex;justify-content:space-between;font-size:11px;color:#9ca3af;margin-bottom:12px;';
    labels.innerHTML = '<span>Not likely</span><span>Extremely likely</span>';

    var commentWrap = document.createElement('div');
    commentWrap.style.display = 'none';

    var textarea = document.createElement('textarea');
    textarea.placeholder = "What's the main reason for your score? (optional)";
    textarea.style.cssText = 'width:100%;border:1px solid #e5e7eb;border-radius:8px;padding:8px;font-size:13px;resize:none;margin-bottom:8px;box-sizing:border-box;';
    textarea.rows = 2;

    var submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.style.cssText = 'width:100%;background:#4f46e5;color:#fff;border:none;border-radius:8px;padding:10px;font-size:13px;font-weight:600;cursor:pointer;';
    submitBtn.onclick = function() {
      fetch(base + '/api/respond/' + token, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: selectedScore, comment: textarea.value })
      }).then(function() {
        card.innerHTML = '<div style="text-align:center;padding:16px;"><div style="font-size:24px;margin-bottom:8px;">🙏</div><div style="font-weight:600;color:#111827;">Thank you!</div><div style="font-size:13px;color:#6b7280;margin-top:4px;">Your feedback helps us improve.</div></div>';
        setTimeout(function() { container.remove(); }, 3000);
      });
    };

    commentWrap.appendChild(textarea);
    commentWrap.appendChild(submitBtn);

    function showComment() {
      commentWrap.style.display = 'block';
    }

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = 'position:absolute;top:12px;right:16px;background:none;border:none;font-size:20px;color:#9ca3af;cursor:pointer;line-height:1;';
    closeBtn.onclick = function() { container.remove(); };

    card.style.position = 'relative';
    card.appendChild(closeBtn);
    card.appendChild(title);
    card.appendChild(question);
    card.appendChild(scaleWrap);
    card.appendChild(labels);
    card.appendChild(commentWrap);

    var poweredBy = document.createElement('div');
    poweredBy.style.cssText = 'text-align:center;font-size:11px;color:#d1d5db;margin-top:8px;';
    poweredBy.innerHTML = 'Powered by <a href="https://henry-nps.vercel.app" style="color:#6366f1;text-decoration:none;">HenryNPS</a>';
    card.appendChild(poweredBy);

    container.appendChild(card);
    document.body.appendChild(container);
  }

  // Show after 5 seconds
  setTimeout(createWidget, 5000);
})();`

  return new NextResponse(js, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
