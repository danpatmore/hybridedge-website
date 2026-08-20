// Android interest waitlist (20 Aug 2026). POST stores one signup into the
// ANDROID_INTEREST KV namespace; GET with the secret key renders Dan's
// private count page. No email, no notifications — the quiet list.
const COUNT_KEY = "4c003799480d6fd96d1ac353ba13b609";

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return json({ ok: false }, 400); }
  // Honeypot: bots fill every field; humans never see this one.
  if (body.website) return json({ ok: true });
  const car = clean(body.car), phone = clean(body.phone);
  const id = `i:${Date.now()}:${crypto.randomUUID()}`;
  await env.ANDROID_INTEREST.put(id, JSON.stringify({
    car, phone, at: new Date().toISOString(),
  }));
  return json({ ok: true });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (url.searchParams.get("key") !== COUNT_KEY) {
    return new Response("Not found", { status: 404 });
  }
  const entries = [];
  let cursor;
  do {
    const page = await env.ANDROID_INTEREST.list({ cursor });
    for (const k of page.keys) {
      const v = await env.ANDROID_INTEREST.get(k.name);
      if (v) { try { entries.push(JSON.parse(v)); } catch {} }
    }
    cursor = page.list_complete ? null : page.cursor;
  } while (cursor);
  entries.sort((a, b) => (b.at || "").localeCompare(a.at || ""));
  const tally = (field) => {
    const m = {};
    for (const e of entries) {
      const k = (e[field] || "(not given)").trim() || "(not given)";
      m[k] = (m[k] || 0) + 1;
    }
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  };
  const rows = (pairs) => pairs.map(([k, n]) =>
    `<tr><td>${esc(k)}</td><td style="text-align:right">${n}</td></tr>`).join("");
  const html = `<!doctype html><meta charset="utf-8">
<meta name="robots" content="noindex"><title>Android interest</title>
<body style="font-family:-apple-system,sans-serif;max-width:640px;margin:40px auto;padding:0 16px">
<h1 style="font-size:44px;margin:0">${entries.length}</h1>
<p style="color:#666;margin-top:4px">people registered Android interest</p>
<h2 style="font-size:16px">By phone</h2><table style="width:100%">${rows(tally("phone"))}</table>
<h2 style="font-size:16px">By car</h2><table style="width:100%">${rows(tally("car"))}</table>
<h2 style="font-size:16px">Latest 20</h2><table style="width:100%">${entries.slice(0, 20).map(e =>
  `<tr><td>${esc(e.at || "").slice(0, 10)}</td><td>${esc(e.phone || "")}</td><td>${esc(e.car || "")}</td></tr>`).join("")}</table>
</body>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

const clean = (s) => String(s || "").slice(0, 80);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const json = (o, status = 200) => new Response(JSON.stringify(o), {
  status, headers: { "content-type": "application/json" } });
