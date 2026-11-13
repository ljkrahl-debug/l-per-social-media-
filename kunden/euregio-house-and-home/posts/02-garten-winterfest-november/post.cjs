// Post 2: Saisonaler Ratgeber – Garten winterfest machen (November)
const snowflake = (size, color = '#fff') => `
<svg viewBox="0 0 100 100" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round">
  ${[0, 60, 120].map(r => `<g transform="rotate(${r} 50 50)">
    <path d="M50 6v88"/><path d="M50 22l-10-10M50 22l10-10M50 78l-10 10M50 78l10 10"/>
  </g>`).join('')}
</svg>`;

module.exports = {
  slides: [
    {
      type: 'cover', img: 'fotos/vorgarten_hochformat.jpg', pos: 'center 40%',
      kicker: 'GARTEN-CHECKLISTE NOVEMBER',
      title: 'Garten winter&shy;fest machen.',
      sub: '4 Dinge, die jetzt zählen – damit im Frühjahr alles wieder grünt.',
    },
    {
      type: 'photoPanel', img: 'fotos/hecke_1.jpg', pos: 'center 45%', photoH: 780,
      num: '01', tag: 'RÜCKSCHNITT',
      title: 'Hecken & Gehölze kräftig zurückschneiden.',
      body: 'Von Oktober bis Ende Februar sind auch stärkere Rückschnitte erlaubt. Am besten an frostfreien Tagen – und den Grünschnitt direkt entsorgen.',
    },
    {
      type: 'photoPanel', img: 'fotos/hecke_2.jpg', pos: 'center 70%', photoH: 780,
      num: '02', tag: 'RASEN',
      title: 'Laub runter vom Rasen.',
      body: 'Nasses Laub nimmt dem Rasen Licht und Luft – es drohen Fäulnis und kahle Stellen. Letzter Schnitt auf ca. 4–5 cm, sobald er nicht mehr wächst.',
    },
    {
      type: 'photoPanel', img: 'fotos/beet_2.jpg', pos: 'center 60%', photoH: 780,
      num: '03', tag: 'BEETE',
      title: 'Beete mulchen.',
      body: 'Eine Schicht Rindenmulch schützt Boden und Wurzeln vor Frost – und hält das Unkraut im Frühjahr klein.',
    },
    {
      type: 'graphic', icon: snowflake,
      num: '04', tag: 'WINTERDIENST',
      title: 'Winterdienst jetzt klären – nicht beim ersten Schnee.',
      body: 'Bei Schnee und Glätte müssen Gehwege geräumt und gestreut werden – auch wenn Sie verreist sind. Wer das vorher regelt, hat seine Ruhe.',
      note: 'Details regelt die Satzung Ihrer Gemeinde.',
    },
    {
      type: 'cta',
      title: 'Keine Zeit für den Garten?',
      sub: 'Wir machen das – einmalig oder regelmäßig über die Saison.',
      steps: ['Fotos vom Garten schicken', 'Umfang & Angebot abstimmen', 'Termin – wetterabhängig geplant'],
    },
  ],
};
