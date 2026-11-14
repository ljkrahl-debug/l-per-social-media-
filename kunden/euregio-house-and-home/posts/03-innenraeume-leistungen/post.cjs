// Post 3: Leistungen Innenräume – "Neue Ideen. Neue Räume."
module.exports = {
  theme: 'editorial',
  slides: [
    {
      type: 'coverCollage', headerRight: 'Innenräume',
      kicker: 'Montage bis Renovierung',
      title: 'Neue Ideen.<br><em>Neue Räume.</em>',
      sub: 'Für Veränderungen im Zuhause – alles aus einer Hand.',
      imgs: [['fotos/kueche.jpg', 'Küche', '72% 85%'], ['fotos/wc_fertig.jpg', 'Gäste-WC', 'center'], ['fotos/boden_fertig.jpg', 'Boden', '60% center']],
    },
    {
      type: 'tip', num: '01', of: '04', tag: 'Renovierung',
      img: 'fotos/wc_fertig.jpg', pos: 'center 55%',
      title: 'Renovierung<br><em>aus einer Hand.</em>',
      body: 'Vom Gäste-WC bis zum ganzen Raum: Wir besprechen, was Sie sich vorstellen – und setzen es sauber um.',
      meta: [['Zum Beispiel', 'Bad, Gäste-WC, Wände'], ['Vorab geklärt', 'Leistung, Material, Kosten']],
    },
    {
      type: 'tip', num: '02', of: '04', tag: 'Trockenbau & Boden',
      img: 'fotos/boden_bau.jpg', pos: 'center 60%',
      title: 'Trockenbau &<br><em>Bodenverlegung.</em>',
      body: 'Neue Wände, neue Aufteilung, neuer Boden. Große Fliesen verlegen wir mit Nivelliersystem – damit alles plan liegt.',
      meta: [['Wände', 'Trockenbau'], ['Boden', 'Plan & fugengenau']],
    },
    {
      type: 'tip', num: '03', of: '04', tag: 'Küchen- & Möbelmontage',
      img: 'fotos/kueche.jpg', pos: 'center 45%',
      title: 'Küche aufgebaut.<br><em>Möbel montiert.</em>',
      body: 'Schränke, Arbeitsplatte, Blenden – passgenau montiert und sauber ausgerichtet. Statt wochenlang im Karton.',
      meta: [['Inklusive', 'Ausrichten & Anpassen'], ['Auch', 'Einzelmöbel & Regale']],
    },
    {
      type: 'tipDark', art: 'van', num: '04', of: '04', tag: 'Entrümpelung & Transport',
      title: 'Platz schaffen<br><em>für Neues.</em>',
      body: 'Keller, Dachboden oder ganze Wohnung: Wir räumen aus und fahren weg – ideal vor einer Renovierung.',
      meta: [['Zum Beispiel', 'Keller, Dachboden, Garage'], ['Auch', 'Transporte']],
    },
    {
      type: 'cta', headerRight: 'Ein Ansprechpartner',
      title: 'Was steht<br><em>bei Ihnen an?</em>',
      sub: 'Fotos und ungefähre Maße genügen für eine erste Einschätzung.',
      services: ['Fotos & Maße schicken', 'Umfang & Angebot klären', 'Termin vereinbaren', 'Sauber umgesetzt'],
    },
  ],
};
