// Post 4: Projekt-Story – neuer Boden (Bauphase → fertig, derselbe Raum)
module.exports = {
  theme: 'editorial',
  slides: [
    {
      type: 'baCover', headerRight: 'Projekt',
      kicker: 'Bodenverlegung',
      title: 'Neuer Boden.<br><em>Millimetergenau.</em>',
      before: 'fotos/boden_bau.jpg', beforePos: '55% center', beforeLabel: 'Bauphase',
      after: 'fotos/boden_fertig.jpg', afterPos: '62% center', afterLabel: 'Fertig',
    },
    {
      type: 'tip', num: '01', of: '02', tag: 'Bauphase',
      img: 'fotos/boden_bau.jpg', pos: 'center 55%',
      title: 'Jede Fliese<br><em>im Lot.</em>',
      body: 'Die roten Clips sind ein Nivelliersystem: Sie halten große Fliesen beim Trocknen exakt auf einer Höhe.',
      meta: [['Ergebnis', 'Keine Kanten'], ['Vorteil', 'Keine Stolperfallen']],
    },
    {
      type: 'tip', num: '02', of: '02', tag: 'Ergebnis',
      img: 'fotos/boden_fertig.jpg', pos: 'center 60%',
      title: 'Fertig –<br><em>und wohnlich.</em>',
      body: 'Fliesen in Holzoptik, im Verband verlegt: pflegeleicht wie Fliese, warm im Look wie Holz.',
      meta: [['Optik', 'Holz, hellgrau'], ['Pflege', 'Einfach feucht wischen']],
    },
    {
      type: 'cta', headerRight: 'Ihr nächstes Projekt',
      title: 'Neuer Boden?<br><em>Wir verlegen ihn.</em>',
      sub: 'Ein Foto vom Raum und die ungefähre Fläche reichen für den Anfang.',
      services: ['Foto & Fläche schicken', 'Umfang & Angebot klären', 'Termin vereinbaren', 'Sauber verlegt'],
    },
  ],
};
