// Rendert Instagram-Karussells (1080x1350, 4:5) für Euregio House & Home.
// Aufruf:  node vorlagen/render.cjs            (alle Posts)
//          node vorlagen/render.cjs 01         (nur Posts, deren Ordner mit "01" beginnt)
// Jeder Post liegt in posts/<ordner>/post.cjs und exportiert { slides: [...] }.

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const W = 1080, H = 1350;

const BRAND = {
  green: '#40774f', greenDark: '#346340', greenLight: '#60a476',
  ink: '#231f20', grey: '#7a7978', mint: '#f1f5f1', mint2: '#dce6df',
  phone: '02454 9741363', mobile: '+49 176 30166433',
  mail: 'info@euregio-houseandhome.de', web: 'euregio-houseandhome.de',
};

const asset = (p) => 'file://' + path.join(ROOT, 'assets', p);
const houseIcon = (fill = BRAND.green, fg = '#fff') =>
  `<svg viewBox="0 0 32 32" width="44" height="44"><rect width="32" height="32" rx="7" fill="${fill}"/><path d="M6 15L16 6l10 9v12h-8v-8h-4v8H6Z" fill="${fg}"/></svg>`;
const arrow = `<svg viewBox="0 0 24 24" width="34" height="34"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;overflow:hidden;background:#fff}
body{font-family:'Inter',sans-serif;color:${BRAND.ink};-webkit-font-smoothing:antialiased;position:relative}
.display{text-wrap:balance;font-family:'Inter Display','Inter',sans-serif;font-weight:900;letter-spacing:-0.025em;line-height:1.02}
div{text-wrap:pretty}
.bar{position:absolute;top:44px;left:48px;right:48px;display:flex;justify-content:space-between;align-items:center;z-index:5}
.chip{display:flex;align-items:center;gap:14px;padding:10px 22px 10px 10px;border-radius:999px;background:rgba(255,255,255,.94);box-shadow:0 4px 18px rgba(0,0,0,.12)}
.chip span{font-weight:800;font-size:20px;letter-spacing:.14em;color:${BRAND.ink}}
.chip.ghost{background:rgba(255,255,255,.12);box-shadow:none}
.chip.ghost span{color:#fff}
.count{font-weight:700;font-size:22px;padding:12px 20px;border-radius:999px;background:rgba(255,255,255,.94);color:${BRAND.ink}}
.count.ghost{background:rgba(255,255,255,.12);color:#fff}
.photo{position:absolute;left:0;right:0;background-size:cover;background-position:center}
.tag{display:inline-block;font-weight:800;font-size:22px;letter-spacing:.16em;padding:12px 22px;border-radius:10px;color:#fff;background:${BRAND.green}}
.tag.grey{background:${BRAND.grey}}
.tag.dark{background:${BRAND.ink}}
.swipe{position:absolute;right:48px;bottom:44px;display:flex;align-items:center;gap:12px;font-weight:700;font-size:22px;color:${BRAND.green}}
.swipe.light{color:#fff}
`;

const bar = (i, n, ghost = false) => `
  <div class="bar">
    <div class="chip ${ghost ? 'ghost' : ''}">${houseIcon(ghost ? '#fff' : BRAND.green, ghost ? BRAND.green : '#fff')}<span>EUREGIO HOUSE &amp; HOME</span></div>
    <div class="count ${ghost ? 'ghost' : ''}">${i} / ${n}</div>
  </div>`;
const swipe = (light = false, text = 'Weiter') => `<div class="swipe ${light ? 'light' : ''}">${text} ${arrow}</div>`;

// ---------- Slide-Typen ----------
const T = {
  // Vorher oben, Nachher unten, Titelkarte in der Mitte
  split: (s, i, n) => `
    <div class="photo" style="top:0;height:675px;background-image:url('${asset(s.top)}');background-position:${s.topPos || 'center'}"></div>
    <div class="photo" style="top:675px;height:675px;background-image:url('${asset(s.bottom)}');background-position:${s.bottomPos || 'center'}"></div>
    <div style="position:absolute;left:0;right:0;top:671px;height:8px;background:#fff"></div>
    <div class="tag grey" style="position:absolute;left:48px;top:140px;box-shadow:0 4px 16px rgba(0,0,0,.25)">${s.topLabel}</div>
    <div class="tag" style="position:absolute;left:48px;bottom:48px;box-shadow:0 4px 16px rgba(0,0,0,.25)">${s.bottomLabel}</div>
    <div style="position:absolute;left:96px;right:96px;top:50%;transform:translateY(-50%);background:#fff;border-radius:28px;padding:44px 52px 48px;box-shadow:0 20px 60px rgba(0,0,0,.28);text-align:center">
      <div style="font-weight:800;font-size:22px;letter-spacing:.18em;color:${BRAND.green};margin-bottom:18px">${s.kicker}</div>
      <div class="display" style="font-size:84px">${s.title}</div>
    </div>
    ${bar(i, n)}
    <div class="swipe light" style="text-shadow:0 2px 10px rgba(0,0,0,.5)">Wischen ${arrow}</div>`,

  // Vollflächiges Foto mit Text unten (Cover)
  cover: (s, i, n) => `
    <div class="photo" style="top:0;height:${H}px;background-image:url('${asset(s.img)}');background-position:${s.pos || 'center'}"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(35,31,32,0) 35%,rgba(35,31,32,.35) 55%,rgba(26,52,34,.92) 82%)"></div>
    <div style="position:absolute;left:64px;right:64px;bottom:120px;color:#fff">
      <div class="tag" style="margin-bottom:30px">${s.kicker}</div>
      <div class="display" style="font-size:112px">${s.title}</div>
      <div style="font-size:36px;font-weight:500;margin-top:26px;opacity:.95;line-height:1.3">${s.sub}</div>
    </div>
    ${bar(i, n)}
    ${swipe(true, 'Wischen')}`,

  // Foto oben, Textfeld unten
  photoPanel: (s, i, n) => `
    <div class="photo" style="top:0;height:${s.photoH || 820}px;background-image:url('${asset(s.img)}');background-position:${s.pos || 'center'}"></div>
    <div style="position:absolute;left:0;right:0;bottom:0;top:${s.photoH || 820}px;background:${BRAND.mint};padding:52px 64px 0">
      <div style="display:flex;align-items:center;gap:22px;margin-bottom:26px">
        ${s.num ? `<div class="display" style="font-size:64px;color:${BRAND.green}">${s.num}</div>` : ''}
        <div class="tag ${s.tagStyle || ''}">${s.tag}</div>
      </div>
      <div class="display" style="font-size:${s.titleSize || 62}px;margin-bottom:22px">${s.title}</div>
      <div style="font-size:31px;line-height:1.42;color:#3d3a3b;max-width:930px">${s.body}</div>
    </div>
    ${bar(i, n)}
    ${i < n ? swipe() : ''}`,

  // Grafik-Slide ohne Foto (dunkelgrün)
  graphic: (s, i, n) => `
    <div style="position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 10%,${BRAND.green} 0%,${BRAND.greenDark} 45%,#1f3d27 100%)"></div>
    <div style="position:absolute;right:-80px;top:150px;opacity:.12">${s.icon(620)}</div>
    <div style="position:absolute;left:64px;top:230px">${s.icon(150, '#fff')}</div>
    <div style="position:absolute;left:64px;right:64px;bottom:150px;color:#fff">
      <div style="display:flex;align-items:center;gap:22px;margin-bottom:30px">
        ${s.num ? `<div class="display" style="font-size:72px;color:${BRAND.mint2}">${s.num}</div>` : ''}
        <div class="tag" style="background:#fff;color:${BRAND.greenDark}">${s.tag}</div>
      </div>
      <div class="display" style="font-size:80px;margin-bottom:30px">${s.title}</div>
      <div style="font-size:33px;line-height:1.45;opacity:.95">${s.body}</div>
      ${s.note ? `<div style="font-size:22px;opacity:.65;margin-top:26px">${s.note}</div>` : ''}
    </div>
    ${bar(i, n, true)}
    ${i < n ? swipe(true) : ''}`,

  // Abschluss mit Kontakt
  cta: (s, i, n) => `
    <div style="position:absolute;inset:0;background:${BRAND.green}"></div>
    <div style="position:absolute;inset:0;background:radial-gradient(90% 60% at 100% 0%,rgba(255,255,255,.12),transparent 60%)"></div>
    <div style="position:absolute;left:64px;right:64px;top:140px;color:#fff">
      <div style="display:inline-block;background:#fff;border-radius:24px;padding:22px 30px;margin-bottom:52px;box-shadow:0 10px 30px rgba(0,0,0,.18)"><img src="${asset('logo-transparent.png')}" style="width:250px;display:block"></div>
      <div class="display" style="font-size:92px;margin-bottom:24px">${s.title}</div>
      <div style="font-size:34px;line-height:1.4;opacity:.95;margin-bottom:48px">${s.sub}</div>
      <div style="display:flex;flex-direction:column;gap:18px">
        ${s.steps.map((t, k) => `
          <div style="display:flex;align-items:center;gap:24px;background:rgba(255,255,255,.1);border-radius:18px;padding:20px 26px">
            <div class="display" style="font-size:40px;color:${BRAND.mint2};width:58px">0${k + 1}</div>
            <div style="font-size:31px;font-weight:600">${t}</div>
          </div>`).join('')}
      </div>
    </div>
    <div style="position:absolute;left:0;right:0;bottom:0;background:#fff;padding:34px 64px 40px;display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-weight:800;font-size:40px;color:${BRAND.ink}">${BRAND.phone}</div>
        <div style="font-size:26px;color:${BRAND.grey};margin-top:6px">${BRAND.mail}</div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:700;font-size:28px;color:${BRAND.ink}">Mobil ${BRAND.mobile}</div>
        <div style="font-size:22px;font-weight:700;color:${BRAND.green};letter-spacing:.14em;margin-top:8px">HAUS · HANDWERK · GARTEN</div>
      </div>
    </div>`,
};

const page = (inner) => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${inner}</body></html>`;

(async () => {
  const filter = process.argv[2] || '';
  const postsDir = path.join(ROOT, 'posts');
  const posts = fs.readdirSync(postsDir).filter((d) => d.startsWith(filter) && fs.existsSync(path.join(postsDir, d, 'post.cjs')));
  const browser = await chromium.launch();
  const pg = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  for (const d of posts) {
    const dir = path.join(postsDir, d);
    const { slides } = require(path.join(dir, 'post.cjs'));
    const tmp = path.join(dir, '.tmp.html');
    for (let k = 0; k < slides.length; k++) {
      const s = slides[k];
      fs.writeFileSync(tmp, page(T[s.type](s, k + 1, slides.length)));
      await pg.goto('file://' + tmp);
      await pg.evaluate(() => document.fonts.ready);
      await pg.waitForTimeout(150);
      const out = path.join(dir, `slide-${String(k + 1).padStart(2, '0')}.png`);
      await pg.screenshot({ path: out });
      console.log('✓', path.relative(ROOT, out));
    }
    fs.unlinkSync(tmp);
  }
  await browser.close();
})();

