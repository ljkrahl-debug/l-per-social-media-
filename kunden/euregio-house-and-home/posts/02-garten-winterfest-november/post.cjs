// Post 2: Saisonaler Ratgeber – Garten winterfest machen (November)
// Theme "editorial": Papier + Waldgrün, Bogen-Fotos, Fraunces-Akzente.
module.exports = {
  theme: 'editorial',
  slides: [
    {
      type: 'cover', img: 'fotos/vorgarten_hochformat.jpg', pos: 'center 30%',
      badge: 'JETZT SPEICHERN · CHECKLISTE · ',
      kicker: 'November-Checkliste',
      title: 'Garten<br><em>winterfest</em><br>machen.',
      sub: '4 Handgriffe, bevor der Frost kommt – damit im Frühjahr alles wieder grünt.',
    },
    {
      type: 'tip', num: '01', of: '04', tag: 'Rückschnitt',
      img: 'fotos/hecke_1.jpg', pos: 'center 40%',
      title: 'Hecken & Gehölze <em>zurück­schneiden.</em>',
      body: 'Zwischen Oktober und Februar sind auch kräftige Rückschnitte erlaubt. Den Grünschnitt am besten gleich mitnehmen.',
      meta: [['Erlaubt', '1. Okt. – 28. Feb.'], ['Profi-Tipp', 'Nur bei frostfreiem Wetter']],
    },
    {
      type: 'tip', num: '02', of: '04', tag: 'Rasen',
      img: 'fotos/hecke_2.jpg', pos: 'center 75%',
      title: 'Laub <em>runter</em><br>vom Rasen.',
      body: 'Nasses Laub nimmt dem Rasen Licht und Luft – im Frühjahr drohen Fäulnis und kahle Stellen.',
      meta: [['Letzter Schnitt', 'Auf 4–5 cm kürzen'], ['Das Laub', 'Aufs Beet als Frostschutz']],
    },
    {
      type: 'tip', num: '03', of: '04', tag: 'Beete',
      img: 'fotos/beet_2.jpg', pos: 'center 65%',
      title: 'Beete vor Frost<br><em>schützen.</em>',
      body: 'Eine Schicht Rindenmulch hält Frost von den Wurzeln fern – und das Unkraut im Frühjahr klein.',
      meta: [['Schichtdicke', 'Etwa 5 cm'], ['Wann', 'Nach dem Rückschnitt']],
    },
    {
      type: 'tipDark', num: '04', of: '04', tag: 'Winterdienst',
      title: 'Winterdienst<br><em>jetzt</em> klären.',
      body: 'Bei Schnee und Glätte müssen Gehwege geräumt und gestreut werden – auch wenn Sie verreist sind.',
      meta: [['Wann', 'Vor dem ersten Schnee'], ['Pflichten', 'Laut Gemeindesatzung']],
    },
    {
      type: 'cta',
      title: 'Keine Zeit?<br><em>Wir machen das.</em>',
      sub: 'Einmalig oder regelmäßig über die Saison – rund ums Haus, in der Euregio.',
      services: ['Hecken- & Rückschnitt', 'Grünschnittabfuhr', 'Rasen- & Grünpflege', 'Winterdienst auf Anfrage'],
    },
  ],
};
