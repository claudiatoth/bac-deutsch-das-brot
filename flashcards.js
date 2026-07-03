// ============================================
// LERNKARTEN — Das Brot (BAC germană maternă)
// Claudia Toth · Figuren · Werk/Epoche · Themen/Symbole · Zitate · Wortschatz
// Delimitator ' ; apostrof = ’ (U+2019); ghilimele „ " ; fără audio la nivel matern.
// ============================================

const flashcardsData = [
    // === Figuren (5) ===
    { de: 'Wolfgang Borchert', ro: 'Autorul (1921–1947) · reprezentant de frunte al Trümmerliteratur' },
    { de: 'Das Brot (1946)', ro: 'Werk · Kurzgeschichte; veröffentlicht 1947 („An diesem Dienstag")' },
    { de: 'die Frau (~60)', ro: 'durchschaut die Lüge, deckt sie aus Liebe zu, opfert eine Scheibe; moralisches Zentrum' },
    { de: 'der Mann (~63)', ro: 'vom Hunger übermannt, schneidet heimlich Brot ab, lügt aus Scham' },
    { de: 'das Ehepaar', ro: '„neununddreißig Jahre verheiratet"; namenlos (Aussparung → Stellvertreter)' },

    // === Werk & Epoche (6) ===
    { de: 'die Trümmerliteratur', ro: 'Epoche; Kahlschlag, nach 1945; Not/Hunger/Krieg thematisiert' },
    { de: 'die Kurzgeschichte', ro: 'Gattung · unmittelbarer Einstieg, offener Schluss, Aussparung, Dingsymbol' },
    { de: 'in medias res', ro: '„Plötzlich wachte sie auf" — începutul abrupt, în miezul acțiunii' },
    { de: 'die Aussparung', ro: 'Krieg/Hunger/Namen werden nie genannt — der Leser muss deuten' },
    { de: 'der offene Schluss', ro: '„Du kannst ruhig vier essen" — interpretarea rămâne cititorului' },
    { de: 'der personale Erzähler', ro: 'povestirea mai ales din perspectiva Frau-ei' },

    // === Themen & Symbole (6) ===
    { de: 'das Brot', ro: 'Dingsymbol · Not &amp; Überleben + Liebe &amp; Teilen (și titlul)' },
    { de: 'die Brotkrümel', ro: 'der stumme Beweis der Tat und der Lüge' },
    { de: 'die Lüge aus Liebe', ro: 'amândoi mint; ea îi cruță demnitatea („Ich hab auch was gehört")' },
    { de: 'das Opfer / die vierte Scheibe', ro: 'die Frau gibt ihre eigene Scheibe ab — Liebe als Tat' },
    { de: 'der Hunger / die Not', ro: 'fundalul mut (Nachkriegszeit); nu e numit direct (Aussparung)' },
    { de: 'die kalten Fliesen', ro: 'die Kälte der Not — dar și grija ei („kalte Fliesen")' },

    // === Zitate (8) — cardul ESTE citatul ===
    { de: '„Plötzlich wachte sie auf. Es war halb drei."', ro: 'începutul (in medias res)' },
    { de: '„Und auf der Decke lagen Brotkrümel."', ro: 'dovada tăcută a faptei' },
    { de: '„Ich dachte, hier wäre was", sagte er', ro: 'minciuna/scuza bărbatului' },
    { de: '„Ich hab auch was gehört. Aber es war wohl nichts."', ro: 'minciuna din iubire (femeia îl cruță)' },
    { de: '„…die Dachrinne schlägt immer bei Wind gegen die Wand."', ro: 'a doua scuză a bărbatului' },
    { de: '„…dass er log, nachdem sie neununddreißig Jahre verheiratet waren."', ro: 'dezamăgirea (39 de ani de căsnicie)' },
    { de: '„Du kannst ruhig vier essen."', ro: 'sacrificiul — finalul deschis' },
    { de: '„So barfuß auf den kalten Fliesen."', ro: 'grija femeii (Zuwendung)' },

    // === Wortschatz DE → RO (8) ===
    { de: 'die Kurzgeschichte', ro: 'povestirea scurtă / schița' },
    { de: 'die Trümmerliteratur', ro: 'literatura ruinelor (postbelică, Kahlschlag)' },
    { de: 'die Aussparung', ro: 'omisiunea (ce se trece sub tăcere)' },
    { de: 'das Dingsymbol', ro: 'simbolul-obiect' },
    { de: 'die Not', ro: 'nevoia, lipsa; mizeria' },
    { de: 'die Lüge', ro: 'minciuna' },
    { de: 'das Opfer', ro: 'jertfa / sacrificiul' },
    { de: 'verheiratet', ro: 'căsătorit(ă)' }
];

// ============================================
// RUNTIME — render + flip (.flipped) + navigare (fără audio)
// ============================================
let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} Lernkarten:</strong> Figuren · Werk &amp; Epoche · Themen &amp; Symbole · Zitate · Wortschatz.<br>
            Klick auf die Karte für die Erklärung · Pfeile zum Blättern.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Karte 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Klick für die Erklärung</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Zurück</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Weiter →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.innerHTML = c.de;
    ro.innerHTML = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Karte ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
