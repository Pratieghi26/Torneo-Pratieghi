// =========================================================
// DATI DI ESEMPIO — servono solo per vedere la pagina pubblica
// funzionante SUBITO, prima di collegare Firestore (Fase 3+).
// La forma di questo oggetto ricalca esattamente la struttura
// che avranno i documenti su Firestore: tornei/{anno}/...
// Quando collegheremo Firebase, basterà sostituire questa
// funzione con una lettura reale da Firestore.
// =========================================================

export function ottieniEdizioneDemo(anno) {
  const edizioni = {
    2026: {
      anno: 2026,
      bloccato: true,
      partecipanti: {
        uomini: ["Marco Bianchi", "Luca Rossi", "Paolo Verdi", "Giovanni Neri",
                 "Andrea Ferrari", "Simone Conti", "Davide Rinaldi", "Matteo Bruno"],
        donne: ["Sara Galli", "Elisa Fontana", "Anna Ricci", "Giulia Marino",
                "Chiara Costa", "Francesca Gatti", "Laura Villa", "Martina Testa"]
      },
      coppie: [
        { numero: 1, uomo: "Marco Bianchi", donna: "Sara Galli" },
        { numero: 2, uomo: "Luca Rossi", donna: "Elisa Fontana" },
        { numero: 3, uomo: "Paolo Verdi", donna: "Anna Ricci" },
        { numero: 4, uomo: "Giovanni Neri", donna: "Giulia Marino" },
        { numero: 5, uomo: "Andrea Ferrari", donna: "Chiara Costa" },
        { numero: 6, uomo: "Simone Conti", donna: "Francesca Gatti" },
        { numero: 7, uomo: "Davide Rinaldi", donna: "Laura Villa" },
        { numero: 8, uomo: "Matteo Bruno", donna: "Martina Testa" }
      ],
      dimensioneTabellone: 8,
      turni: [
        {
          titolo: "Quarti",
          match: [
            { a: "Bianchi - Galli", b: "Rossi - Fontana", vincitore: "a" },
            { a: "Verdi - Ricci", b: "Neri - Marino", vincitore: "b" },
            { a: "Ferrari - Costa", b: "Conti - Gatti", vincitore: "a" },
            { a: "Rinaldi - Villa", b: "Bruno - Testa", vincitore: null }
          ]
        },
        {
          titolo: "Semifinali",
          match: [
            { a: "Bianchi - Galli", b: "Neri - Marino", vincitore: "a" },
            { a: "Ferrari - Costa", b: null, vincitore: null }
          ]
        },
        {
          titolo: "Finale",
          match: [
            { a: "Bianchi - Galli", b: null, vincitore: null }
          ]
        }
      ],
      campioni: null
    }
  };
  return edizioni[anno] || null;
}

export function elencoAnniDisponibili() {
  return [2026];
}

export function ottieniAlboOro() {
  return [
    // Si popolerà edizione dopo edizione.
  ];
}
