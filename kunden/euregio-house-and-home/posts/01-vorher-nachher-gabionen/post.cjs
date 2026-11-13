// Post 1: Vorher/Nachher – alte Klinkermauer wird Gabionen-Einfassung
module.exports = {
  slides: [
    {
      type: 'split',
      top: 'fotos/mauer_vorher.jpg', topPos: 'center 60%', topLabel: 'VORHER',
      bottom: 'fotos/gabione_1.jpg', bottomPos: 'center 55%', bottomLabel: 'NACHHER',
      kicker: 'HAUS & AUSSENBEREICH',
      title: 'Von bröckelig<br>zu bombenfest.',
    },
    {
      type: 'photoPanel', img: 'fotos/mauer_vorher.jpg', pos: 'center 60%',
      tag: 'VORHER', tagStyle: 'grey',
      title: 'Die alte Mauer hatte ausgedient.',
      body: 'Lose Klinker, ausgewaschene Fugen, Moos und Unkraut – an der Einfahrt sieht man so etwas jeden Tag.',
    },
    {
      type: 'photoPanel', img: 'fotos/gabione_1.jpg', pos: 'center 55%',
      tag: 'NACHHER',
      title: 'Gabionen auf anthrazit­farbenem Sockel.',
      body: 'Robust, pflegeleicht und modern – und passend zu den Pfosten der Überdachung.',
    },
    {
      type: 'photoPanel', img: 'fotos/gabione_2.jpg', pos: 'center 50%',
      tag: 'IM DETAIL', tagStyle: 'dark',
      title: 'Sauber abgestuft, Stein für Stein.',
      body: 'Die Körbe folgen dem Gelände. So wirkt die Einfassung ruhig und wie aus einem Guss.',
    },
    {
      type: 'cta',
      title: 'Bei Ihnen bröckelt’s auch?',
      sub: 'Schicken Sie uns ein Foto – wir sagen Ihnen, was möglich ist.',
      steps: ['Foto & grobe Maße schicken', 'Umfang & Angebot abstimmen', 'Termin vereinbaren'],
    },
  ],
};
