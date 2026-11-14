// Theme "editorial" – ruhiger, hochwertiger Magazin-Look für Euregio House & Home.
// Papierton + Waldgrün, Fotos im Bogen-Rahmen (Fenster/Haus-Motiv),
// Inter Display Black + Fraunces Italic als Akzent, einheitliches Color-Grading.

module.exports = ({ asset, BRAND, W, H }) => {
  const C = {
    paper: '#f3efe6', ink: '#17231b', inkSoft: '#525a53',
    green: BRAND.green, forest: '#1c3324', forest2: '#2b4a35',
    sage: '#b9cfbb', sageDeep: '#8fb095', cream: '#f6f1e6',
  };

  const grain = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

  const css = `
@font-face{font-family:'Fraunces';font-style:italic;font-weight:400;src:url('${asset('fonts/fraunces-latin-400-italic.woff2')}') format('woff2')}
@font-face{font-family:'Fraunces';font-style:italic;font-weight:500;src:url('${asset('fonts/fraunces-latin-500-italic.woff2')}') format('woff2')}
@font-face{font-family:'Fraunces';font-style:normal;font-weight:400;src:url('${asset('fonts/fraunces-latin-400-normal.woff2')}') format('woff2')}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{font-family:'Inter',sans-serif;color:${C.ink};-webkit-font-smoothing:antialiased;position:relative;background:${C.paper}}
div{text-wrap:pretty}
.h{font-family:'Inter Display','Inter',sans-serif;font-weight:900;letter-spacing:-0.035em;line-height:.98;text-wrap:balance}
.h em{font-family:'Fraunces',serif;font-style:italic;font-weight:400;letter-spacing:-0.01em;font-size:1.1em;line-height:.9}
.label{font-size:19px;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
.grain{position:absolute;inset:0;background-image:${grain};opacity:.09;mix-blend-mode:multiply;pointer-events:none;z-index:20}
.grain.light{mix-blend-mode:screen;opacity:.06}
.ph{position:absolute;background-size:cover;background-position:center;filter:saturate(.8) contrast(1.06) brightness(1.02)}
.warm{position:absolute;inset:0;background:#d8b47a;mix-blend-mode:soft-light;opacity:.35}
.abs{position:absolute}
`;

  const house = (fill, size = 30) =>
    `<svg viewBox="0 0 32 32" width="${size}" height="${size}"><path d="M3 15.5L16 4l13 11.5" stroke="${fill}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 13v15h18V13" stroke="${fill}" stroke-width="2.6" fill="none" stroke-linejoin="round"/><path d="M13.5 28v-7h5v7" stroke="${fill}" stroke-width="2.6" fill="none"/></svg>`;

  const header = (color, right) => `
    <div class="abs" style="top:70px;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center;color:${color}">
      <div style="display:flex;align-items:center;gap:14px">${house(color)}<span class="label" style="font-size:18px">Euregio House &amp; Home</span></div>
      <div class="label" style="font-size:18px">${right}</div>
    </div>
    <div class="abs" style="top:124px;left:80px;right:80px;height:1.5px;background:${color};opacity:.22"></div>`;

  const archR = 'border-radius:460px 460px 22px 22px / 270px 270px 22px 22px';

  const badge = (n, bg, fg, ring) => `
    <div class="abs" style="left:128px;top:${150 + 600 - 78}px;width:156px;height:156px;border-radius:50%;background:${bg};border:9px solid ${ring};display:flex;align-items:center;justify-content:center;z-index:5">
      <span style="font-family:'Fraunces';font-style:italic;font-weight:500;font-size:74px;color:${fg};margin-top:-6px">${n}</span>
    </div>`;

  const meta = (items, color, rule) => `
    <div class="abs" style="left:80px;right:80px;bottom:76px;border-top:1.5px solid ${rule};padding-top:26px;display:grid;grid-template-columns:1fr 1fr">
      ${items.map(([k, v], i) => `
        <div style="${i ? `padding-left:40px;border-left:1.5px solid ${rule}` : 'padding-right:40px'}">
          <div class="label" style="font-size:16px;color:${color};opacity:.7;margin-bottom:10px">${k}</div>
          <div style="font-size:29px;font-weight:700;color:${color};letter-spacing:-.01em;white-space:nowrap">${v}</div>
        </div>`).join('')}
    </div>`;

  const textBlock = (s, color, soft, accent) => `
    <div class="abs label" style="left:312px;top:778px;color:${accent}">${s.tag}</div>
    <div class="abs" style="left:80px;right:80px;top:868px">
      <div class="h" style="font-size:68px;color:${color}">${s.title.replace(/<em>/g, `<em style="color:${accent}">`)}</div>
      <div style="font-size:30px;line-height:1.45;color:${soft};margin-top:24px;max-width:900px">${s.body}</div>
    </div>`;

  const snowArt = (size, color, sw = 2.2) => {
    const arm = `<path d="M50 50V4"/><path d="M50 16l-7-7M50 16l7-7M50 28l-10-9M50 28l10-9M50 38l-6-5M50 38l6-5"/>`;
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
      ${[0, 60, 120, 180, 240, 300].map((r) => `<g transform="rotate(${r} 50 50)">${arm}</g>`).join('')}
      <circle cx="50" cy="50" r="5"/><path d="M50 41l8 4.5v9L50 59l-8-4.5v-9Z"/></svg>`;
  };

  const vanArt = (size, color, sw = 2.2) => `
    <svg viewBox="0 0 120 80" width="${size}" height="${size * 2 / 3}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="18" width="62" height="40" rx="3"/>
      <path d="M70 28h20l16 16v14H70Z"/><path d="M75 33h13l10 10H75Z"/>
      <circle cx="28" cy="60" r="8" fill="#26422f"/><circle cx="90" cy="60" r="8" fill="#26422f"/>
      <path d="M2 70h116"/><path d="M18 30h18v14H18Z"/><path d="M40 26h20v18H40Z"/><path d="M27 30v5M50 26v6"/>
    </svg>`;
  const boxArt = (size, color, sw = 3) => `
    <svg viewBox="0 0 100 100" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linejoin="round">
      <path d="M50 10 88 30v40L50 90 12 70V30Z"/><path d="M12 30l38 20 38-20M50 50v40"/><path d="M31 20l38 20"/>
    </svg>`;
  const ARTS = {
    snow: { main: (c) => snowArt(380, c, 1.6), deco: (sz, c, sw) => snowArt(sz, c, sw) },
    van: { main: (c) => vanArt(560, c, 1.5), deco: (sz, c) => boxArt(sz * .8, c, 3.5) },
  };

  const types = {
    cover: (s, i, n) => {
      const ring = (txt) => `
        <svg viewBox="0 0 200 200" width="176" height="176">
          <defs><path id="c" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"/></defs>
          <circle cx="100" cy="100" r="98" fill="${C.forest}" fill-opacity=".92"/>
          <circle cx="100" cy="100" r="90" fill="none" stroke="${C.sage}" stroke-opacity=".5" stroke-width="1"/>
          <text fill="${C.cream}" font-family="Inter" font-weight="700" font-size="15" letter-spacing="3"><textPath href="#c" textLength="462" lengthAdjust="spacing">${txt}</textPath></text>
          <path d="M86 78h28v46l-14-10-14 10Z" fill="none" stroke="${C.cream}" stroke-width="3" stroke-linejoin="round"/>
        </svg>`;
      return `
      <div class="ph" style="inset:0;background-image:url('${asset(s.img)}');background-position:${s.pos || 'center'}"></div>
      <div class="warm"></div>
      <div class="abs" style="inset:0;background:linear-gradient(180deg,rgba(17,30,21,.6) 0%,rgba(17,30,21,0) 20%,rgba(17,30,21,0) 30%,rgba(22,40,28,.72) 48%,rgba(20,37,26,.95) 66%,rgba(18,34,24,.98) 100%)"></div>
      ${header(C.cream, s.headerRight || 'Gartentipps')}
      <div class="abs" style="right:80px;top:168px;transform:rotate(-12deg)">${ring(s.badge)}</div>
      <div class="abs" style="left:80px;right:80px;bottom:92px;color:${C.cream}">
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:34px">
          <div style="width:64px;height:2px;background:${C.sage}"></div>
          <div class="label" style="color:${C.sage}">${s.kicker}</div>
        </div>
        <div class="h" style="font-size:158px;line-height:.9">${s.title.replace(/<em>/g, `<em style="color:${C.sage};font-size:1.08em">`)}</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:44px;gap:40px">
          <div style="font-size:35px;line-height:1.35;max-width:640px;opacity:.95">${s.sub}</div>
          <div style="width:92px;height:92px;flex:none;border-radius:50%;border:2px solid rgba(246,241,230,.6);display:flex;align-items:center;justify-content:center">
            <svg viewBox="0 0 24 24" width="38" height="38"><path d="M4 12h15M13 5l7 7-7 7" stroke="${C.cream}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div class="grain light"></div>`;
    },

    tip: (s, i, n) => `
      ${header(C.ink, `<b style="color:${C.green}">${s.num}</b>&nbsp;/&nbsp;${s.of}`)}
      <div class="abs" style="left:80px;top:150px;width:920px;height:600px;${archR};overflow:hidden">
        <div class="ph" style="inset:0;background-image:url('${asset(s.img)}');background-position:${s.pos || 'center'}"></div>
        <div class="warm"></div>
      </div>
      ${badge(s.num, C.green, C.cream, C.paper)}
      ${textBlock(s, C.ink, C.inkSoft, C.green)}
      ${meta(s.meta, C.ink, 'rgba(23,35,27,.18)')}
      <div class="grain"></div>`,

    tipDark: (s, i, n) => `
      <div class="abs" style="inset:0;background:radial-gradient(110% 70% at 50% 15%,${C.forest2} 0%,${C.forest} 60%,#14261a 100%)"></div>
      ${header(C.cream, `<b style="color:${C.sage}">${s.num}</b>&nbsp;/&nbsp;${s.of}`)}
      <div class="abs" style="left:80px;top:150px;width:920px;height:600px;${archR};overflow:hidden;background:linear-gradient(180deg,#3b5f46 0%,#26422f 100%);box-shadow:inset 0 0 0 1.5px rgba(246,241,230,.18)">
        ${s.img ? `<div class="ph" style="inset:0;background-image:url('${asset(s.img)}');background-position:${s.pos || 'center'}"></div><div class="warm"></div>` : `
        <div class="abs" style="left:50%;top:54%;transform:translate(-50%,-50%)">${ARTS[s.art || 'snow'].main(C.cream)}</div>
        <div class="abs" style="left:110px;top:150px;opacity:.45">${ARTS[s.art || 'snow'].deco(90, C.sage, 3)}</div>
        <div class="abs" style="right:120px;top:120px;opacity:.35">${ARTS[s.art || 'snow'].deco(60, C.sage, 3.5)}</div>
        <div class="abs" style="right:90px;bottom:90px;opacity:.4">${ARTS[s.art || 'snow'].deco(110, C.sage, 2.6)}</div>
        <div class="abs" style="left:70px;bottom:120px;opacity:.3">${ARTS[s.art || 'snow'].deco(54, C.sage, 4)}</div>`}
      </div>
      ${badge(s.num, C.cream, C.forest, C.forest)}
      ${textBlock(s, C.cream, 'rgba(246,241,230,.82)', C.sage)}
      ${meta(s.meta, C.cream, 'rgba(246,241,230,.22)')}
      ${s.note ? `<div class="abs" style="left:80px;right:80px;bottom:30px;font-size:17px;color:${C.cream};opacity:.5">${s.note}</div>` : ''}
      <div class="grain light"></div>`,

    coverCollage: (s, i, n) => {
      const w = (920 - 2 * 22) / 3;
      return `
      ${header(C.ink, s.headerRight || '')}
      <div class="abs" style="left:80px;right:80px;top:178px">
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:30px">
          <div style="width:64px;height:2px;background:${C.green}"></div>
          <div class="label" style="color:${C.green}">${s.kicker}</div>
        </div>
        <div class="h" style="font-size:128px;line-height:.92">${s.title.replace(/<em>/g, `<em style="color:${C.green}">`)}</div>
        <div style="font-size:33px;line-height:1.4;color:${C.inkSoft};margin-top:30px;max-width:820px">${s.sub}</div>
      </div>
      ${s.imgs.map(([img, label, pos], k) => `
        <div class="abs" style="left:${80 + k * (w + 22)}px;bottom:150px;width:${w}px;height:${s.archH || 520}px;border-radius:${w / 2}px ${w / 2}px 16px 16px;overflow:hidden">
          <div class="ph" style="inset:0;background-image:url('${asset(img)}');background-position:${pos || 'center'}"></div><div class="warm"></div>
        </div>
        <div class="abs label" style="left:${80 + k * (w + 22)}px;width:${w}px;bottom:96px;text-align:center;font-size:16px;color:${C.ink}">
          <span style="color:${C.green};font-family:'Fraunces';font-style:italic;font-weight:500;letter-spacing:0;font-size:22px;text-transform:none">0${k + 1}</span>&nbsp;&nbsp;${label}
        </div>`).join('')}
      <div class="grain"></div>`;
    },

    baCover: (s, i, n) => {
      const pane = (img, pos, label, left, bg, fg) => `
        <div class="abs" style="left:${left}px;top:${s.archTop || 560}px;width:449px;height:${s.archH || 620}px;border-radius:224px 224px 18px 18px;overflow:hidden">
          <div class="ph" style="inset:0;background-image:url('${asset(img)}');background-position:${pos || 'center'}"></div><div class="warm"></div>
        </div>
        <div class="abs label" style="left:${left}px;width:449px;top:${(s.archTop || 560) + (s.archH || 620) + 26}px;text-align:center;font-size:17px;color:${fg}">
          <span style="display:inline-block;padding:10px 20px;border-radius:999px;background:${bg}">${label}</span>
        </div>`;
      return `
      <div class="abs" style="inset:0;background:radial-gradient(110% 70% at 50% 10%,${C.forest2} 0%,${C.forest} 60%,#14261a 100%)"></div>
      ${header(C.cream, s.headerRight || '')}
      <div class="abs" style="left:80px;right:80px;top:178px;color:${C.cream}">
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:30px">
          <div style="width:64px;height:2px;background:${C.sage}"></div>
          <div class="label" style="color:${C.sage}">${s.kicker}</div>
        </div>
        <div class="h" style="font-size:${s.titleSize || 106}px;line-height:.92">${s.title.replace(/<em>/g, `<em style="color:${C.sage}">`)}</div>
      </div>
      ${pane(s.before, s.beforePos, s.beforeLabel || 'Vorher', 80, 'rgba(246,241,230,.14)', C.cream)}
      ${pane(s.after, s.afterPos, s.afterLabel || 'Nachher', 551, C.cream, C.forest)}
      <div class="abs" style="left:${540 - 46}px;top:${(s.archTop || 560) + (s.archH || 620) / 2 - 46}px;width:92px;height:92px;border-radius:50%;background:${C.cream};border:8px solid ${C.forest};display:flex;align-items:center;justify-content:center;z-index:4">
        <svg viewBox="0 0 24 24" width="34" height="34"><path d="M4 12h15M13 5l7 7-7 7" stroke="${C.forest}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="grain light"></div>`;
    },

    cta: (s, i, n) => {
      const check = `<svg viewBox="0 0 32 32" width="40" height="40"><circle cx="16" cy="16" r="15" fill="none" stroke="${C.sage}" stroke-width="1.6"/><path d="M9.5 16.5l4.2 4.2 8.8-9.2" stroke="${C.cream}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      return `
      <div class="abs" style="inset:0;background:radial-gradient(120% 80% at 85% 0%,${C.forest2} 0%,${C.forest} 55%,#14261a 100%)"></div>
      ${header(C.cream, s.headerRight || 'Wir kümmern uns')}
      <div class="abs" style="left:80px;right:80px;top:124px;bottom:356px;color:${C.cream};display:flex;flex-direction:column;justify-content:center">
        <div class="h" style="font-size:112px">${s.title.replace(/<em>/g, `<em style="color:${C.sage}">`)}</div>
        <div style="font-size:33px;line-height:1.42;margin-top:34px;opacity:.9;max-width:860px">${s.sub}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px 40px;margin-top:60px;padding-top:44px;border-top:1.5px solid rgba(246,241,230,.2)">
          ${s.services.map((t) => `<div style="display:flex;align-items:center;gap:18px;font-size:29px;font-weight:600">${check}<span>${t}</span></div>`).join('')}
        </div>
      </div>
      <div class="abs" style="left:56px;right:56px;bottom:56px;height:300px;background:${C.paper};border-radius:30px;display:flex;align-items:center;padding:0 56px;gap:52px">
        <img src="${asset('logo-transparent.png')}" style="width:230px;flex:none">
        <div style="width:1.5px;align-self:stretch;margin:56px 0;background:rgba(23,35,27,.16)"></div>
        <div>
          <div class="label" style="font-size:16px;color:${C.green};margin-bottom:12px">Jetzt anfragen</div>
          <div style="font-size:52px;font-weight:800;letter-spacing:-.02em;color:${C.ink}">${BRAND.phone}</div>
          <div style="font-size:26px;color:${C.inkSoft};margin-top:10px;line-height:1.45">Mobil ${BRAND.mobile}<br>${BRAND.mail}</div>
        </div>
      </div>
      <div class="grain light"></div>`;
    },
  };

  return { css, types };
};
