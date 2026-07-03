// ============================================
// THEORIE — BAC kompakt: Das Brot (Wolfgang Borchert, 1946)
// Limba și literatura germană maternă · Claudia Toth
// Conținut în germană; note de strategie scurte în RO.
// Nachkriegsliteratur / Trümmerliteratur — Kurzgeschichte (Charakterisierung).
// Schlüsselzitate verbatim verifiziert (gemeinfrei, Borchert d.1947 → PD seit 2018).
// Subiect-I-Gedicht „Ein Winterabend" (Trakl) verbatim verifiziert (gemeinfrei, Trakl d.1914).
// ============================================

const theoryHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Borcherts <em>Das Brot</em> (1946) ist DIE berühmteste <strong>Kurzgeschichte</strong> der <strong>Trümmerliteratur</strong>. Ein altes Ehepaar in der Hungerzeit nach dem Krieg: Der Mann steht nachts heimlich auf und schneidet sich <strong>Brot</strong> ab. Die Frau <strong>durchschaut die Lüge</strong> — deckt sie aber aus <strong>Liebe</strong> zu und opfert am Ende sogar eine eigene Scheibe. Merke dir <strong>Kurzgeschichte</strong>, <strong>das Brot (Dingsymbol)</strong>, <strong>die Lüge aus Liebe</strong> und <strong>das Opfer</strong>. Öffne mai jos secțiune cu secțiune. 🍞</div>
        </div>
    </div>

    <!-- 0: BAC auf einen Blick -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🆘 BAC auf einen Blick (die SOS-Seite)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="sos-box">
                <h4>Das Brot — das Wichtigste in 1 Minute</h4>
                <div class="sos-row"><div class="sos-k">Autor</div><div class="sos-v">Wolfgang Borchert (1921–1947) — Hauptvertreter der <strong>Trümmer-/Nachkriegsliteratur</strong></div></div>
                <div class="sos-row"><div class="sos-k">Werk / Jahr</div><div class="sos-v">Das Brot — <strong>1946</strong> (veröffentlicht 1947, in „An diesem Dienstag")</div></div>
                <div class="sos-row"><div class="sos-k">Epoche</div><div class="sos-v"><strong>Nachkriegsliteratur / Trümmerliteratur</strong> (Kahlschlagliteratur)</div></div>
                <div class="sos-row"><div class="sos-k">Gattung</div><div class="sos-v"><strong>Kurzgeschichte</strong></div></div>
                <div class="sos-row"><div class="sos-k">Schauplatz</div><div class="sos-v">eine Wohnung (Schlafzimmer &amp; Küche), <strong>nachts</strong>, in der Hungerzeit nach dem Krieg</div></div>
                <div class="sos-row"><div class="sos-k">Aufbau</div><div class="sos-v"><strong>in medias res</strong> (nachts, halb drei) · die Küche &amp; die Lüge · am nächsten Abend das Opfer</div></div>
                <div class="sos-row"><div class="sos-k">Personen</div><div class="sos-v">die <strong>Frau</strong> (~60) · der <strong>Mann</strong> (~63) — „neununddreißig Jahre verheiratet" (keine Namen!)</div></div>
                <div class="sos-row"><div class="sos-k">Themen</div><div class="sos-v"><strong>Hunger/Not</strong> · <strong>Liebe &amp; Rücksicht</strong> · <strong>Lüge &amp; Würde</strong> · Selbstlosigkeit/Opfer · Ehe</div></div>
                <div class="sos-row"><div class="sos-k">Kernaussage</div><div class="sos-v">In der Hungerzeit schneidet sich der Mann heimlich Brot ab und lügt; die Frau <strong>durchschaut die Lüge</strong>, deckt sie aber aus <strong>Liebe</strong> zu und <strong>opfert</strong> am Ende eine eigene Scheibe. <strong>Menschlichkeit siegt über die Not.</strong></div></div>
                <div class="sos-row"><div class="sos-k">Schlüsselzitat</div><div class="sos-v">„<strong>Du kannst ruhig vier essen</strong>." (das Opfer der Frau)</div></div>
            </div>
            <div class="strategie">Pagina de memorat pe de rost. Autor (Borchert) – Jahr (1946) – Epoche (Trümmerliteratur) – Gattung (Kurzgeschichte) trebuie să iasă automat în Einleitung.</div>
        </div>
    </div>

    <!-- 1: Die Geschichte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📜 Die Geschichte (Inhalt &amp; Aufbau)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <h4>Teil 1 — Nachts in der Küche: die Lüge</h4>
                <p>Um „<strong>halb drei</strong>" wacht die <strong>Frau</strong> auf; das Bett neben ihr ist <strong>leer</strong>. In der Küche trifft sie ihren <strong>Mann</strong> — auf der Tischdecke liegen <strong>Brotkrümel</strong>: Er hat sich heimlich, aus <strong>Hunger</strong>, eine Scheibe Brot abgeschnitten. Beide wissen die Wahrheit, doch keiner spricht sie aus. Der Mann rechtfertigt sich mit einem <strong>Geräusch</strong> („Ich dachte, hier wäre was" · „die Dachrinne"), und die Frau <strong>lügt mit</strong>, um ihn nicht zu beschämen: „<em>Ich hab auch was gehört. Aber es war wohl nichts.</em>" Sie sorgt sich sogar um seine kalten Füße auf den Fliesen.</p>
            </div>
            <div class="theory-box">
                <h4>Teil 2 — Am nächsten Abend: das Opfer</h4>
                <p>Am nächsten Abend schiebt die Frau ihrem Mann <strong>vier</strong> Brotscheiben hin — sonst konnte er nur <strong>drei</strong> essen — und isst selbst <strong>weniger</strong>: „<em>Du kannst ruhig vier essen.</em>" Sie <strong>opfert</strong> ihre eigene Ration, ohne die Lüge je zu erwähnen. Ein stiller Akt der <strong>Liebe und Mitmenschlichkeit</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselstellen (verbatim)</h4>
                <div class="zitat">„Plötzlich wachte sie auf. Es war halb drei."</div>
                <div class="zitat">„Und auf der Decke lagen Brotkrümel."</div>
                <div class="zitat">„Du kannst ruhig vier essen", sagte sie und ging von der Lampe weg.</div>
            </div>
            <div class="bac-wissen">Reține lanțul: <strong>halb drei</strong> → patul gol → bucătăria, <strong>Brotkrümel</strong> → amândoi mint (un „zgomot"/Dachrinne) → ea acoperă minciuna din iubire („Ich hab auch was gehört") → a doua seară îi dă a <strong>patra</strong> felie și mănâncă ea mai puțin. <strong>Not stellt die Liebe auf die Probe — die Liebe siegt.</strong></div>
        </div>
    </div>

    <!-- 2: Die Figuren -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👥 Die Figuren verstehen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">

            <div class="theory-box">
                <h4>👤 Die Frau — das moralische Zentrum</h4>
                <p><em>Etwa 60 Jahre alt; seit 39 Jahren verheiratet. Sie durchschaut die Lüge sofort — und deckt sie aus Liebe zu.</em></p>
                <div class="merkmale">
                    <span class="chip plus">liebevoll</span><span class="chip plus">mitfühlend</span><span class="chip plus">selbstlos (opfert eine Scheibe)</span><span class="chip plus">würdevoll</span><span class="chip plus">klug (durchschaut alles)</span>
                    <span class="chip minus">leidet still</span>
                </div>
                <p>Die Frau erkennt sofort, dass ihr Mann heimlich Brot gegessen und dann <strong>gelogen</strong> hat. Statt ihn zu <strong>beschämen</strong>, spielt sie mit („Ich hab auch was gehört") und <strong>schont</strong> seine Würde. Am nächsten Abend gibt sie ihm heimlich eine <strong>eigene Scheibe</strong> ab. Ihre <strong>Liebe und Selbstlosigkeit</strong> sind der Kern der Geschichte.</p>
                <div class="bac-wissen">Die Frau = personajul-cheie pt Charakterisierung: ea vede totul, dar alege <strong>iubirea și menajarea</strong> în locul reproșului — și se sacrifică. Un studiu al bunătății și demnității în vreme de foamete.</div>
            </div>

            <div class="theory-box">
                <h4>👤 Der Mann — Hunger &amp; Scham</h4>
                <p>Etwa 63 Jahre alt. Vom <strong>Hunger</strong> übermannt, steht er nachts heimlich auf und schneidet sich Brot ab. Ertappt, <strong>schämt</strong> er sich und <strong>lügt</strong> („Ich dachte, hier wäre was" · „die Dachrinne"). Seine Lüge ist kein böser Betrug, sondern Ausdruck von <strong>Scham und Schwäche</strong> in der Not.</p>
                <div class="merkmale">
                    <span class="chip plus">bedürftig (menschlich)</span>
                    <span class="chip minus">dem Hunger erlegen</span><span class="chip minus">verschämt</span><span class="chip minus">unehrlich (aus Scham)</span>
                </div>
            </div>

            <div class="theory-box">
                <h4>🔗 Figurenkonstellation</h4>
                <div class="konstell">
                    <div class="konstell-center">Eheleute — „neununddreißig Jahre verheiratet" (die Not stellt die Liebe auf die Probe)</div>
                    <div class="konstell-card"><div class="kf">die Frau ↔ der Mann</div><div class="kb">Liebe &amp; Rücksicht trotz Enttäuschung 💍</div></div>
                    <div class="konstell-card"><div class="kf">Lüge ↔ Verstehen</div><div class="kb">er lügt aus Scham — sie durchschaut es und schweigt aus Liebe 🤫</div></div>
                    <div class="konstell-card"><div class="kf">Egoismus ↔ Selbstlosigkeit</div><div class="kb">der Hunger (er nimmt) ↔ das Opfer (sie gibt ab) 🍞</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Themen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎯 Die wichtigsten Themen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box">
                <h4>1. Hunger &amp; Not (die Nachkriegszeit)</h4>
                <p>Die <strong>Hungersnot</strong> nach dem Zweiten Weltkrieg treibt den Mann zum heimlichen Essen. Bezeichnend: Krieg und Hunger werden <strong>nie ausdrücklich genannt</strong> (Aussparung) — sie sind der stumme Hintergrund von allem.</p>
            </div>
            <div class="theory-box">
                <h4>2. Liebe &amp; Rücksicht in der Ehe</h4>
                <p>Nach <strong>39 Jahren Ehe</strong> schont die Frau ihren Mann: Sie stellt ihn nicht bloß, sondern <strong>bewahrt seine Würde</strong>. Die Liebe zeigt sich nicht in Worten, sondern in <strong>Rücksicht und Tat</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>3. Lüge &amp; Würde</h4>
                <p>Beide <strong>lügen</strong> — der Mann aus Scham, die Frau aus Liebe. Die „<strong>Lüge aus Liebe</strong>" ist hier keine Schuld, sondern ein Akt der <strong>Menschlichkeit</strong>: Sie rettet die Würde des anderen.</p>
            </div>
            <div class="theory-box">
                <h4>4. Selbstlosigkeit &amp; Opfer</h4>
                <p>Der Höhepunkt ist das stille <strong>Opfer</strong>: Die Frau gibt ihrem Mann eine <strong>eigene Brotscheibe</strong> ab („Du kannst ruhig vier essen") und hungert selbst mehr. <strong>Geben statt Nehmen.</strong></p>
            </div>
            <div class="theory-box">
                <h4>5. Menschlichkeit trotz Not</h4>
                <p>Borcherts Botschaft: Selbst im <strong>Elend</strong> der Trümmerzeit bewahren Menschen <strong>Liebe, Würde und Mitgefühl</strong>. Die Not zerstört die Menschlichkeit nicht.</p>
            </div>
            <div class="strategie">La BAC: temele-vedetă sunt <strong>Hunger/Not</strong>, <strong>Lüge aus Liebe/Würde</strong> și <strong>Opfer/Selbstlosigkeit</strong>. Leagă fiecare temă de o scenă (die Krümel, die Lüge, die vierte Scheibe).</div>
        </div>
    </div>

    <!-- 4: Symbole -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎭 Symbole &amp; Motive leicht erklärt</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box">
                <table class="theory-table">
                    <thead><tr><th>Symbol / Motiv</th><th>Bedeutung</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">das Brot</td><td>das zentrale <strong>Dingsymbol</strong> (auch der Titel): <strong>Überleben &amp; Not</strong> — und zugleich <strong>Liebe &amp; Teilen</strong>.</td></tr>
                        <tr><td class="nomen">die Brotkrümel</td><td>der <strong>stumme Beweis</strong> der Tat und der Lüge — was verschwiegen wird, ist doch sichtbar.</td></tr>
                        <tr><td class="nomen">die kalten Fliesen / die Kälte</td><td>die <strong>Kälte der Not</strong> — aber in der Sorge um die kalten Füße zeigt sich auch <strong>Zuwendung</strong>.</td></tr>
                        <tr><td class="nomen">die Nacht / die Dunkelheit</td><td>das <strong>Heimliche</strong> und die <strong>Scham</strong>: Die Tat geschieht im Verborgenen.</td></tr>
                        <tr><td class="nomen">die vierte Scheibe</td><td>das <strong>Opfer</strong> — die Liebe wird zur Tat („Du kannst ruhig vier essen").</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="strategie">Cele mai „rentabile" la examen: <strong>das Brot</strong> (Dingsymbol: Not + iubire), <strong>die Brotkrümel</strong> (dovada minciunii) și <strong>die vierte Scheibe</strong> (sacrificiul).</div>
        </div>
    </div>

    <!-- 5: Aufbau & Form -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏗️ Aufbau und Form</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <h4>Die Kurzgeschichte &amp; ihre Merkmale</h4>
                <ul>
                    <li><strong>Unmittelbarer Einstieg</strong> (in medias res): „Plötzlich wachte sie auf" — kein Titelheld, keine Vorgeschichte.</li>
                    <li><strong>Offener / pointierter Schluss:</strong> „Du kannst ruhig vier essen" — die Deutung bleibt dem Leser.</li>
                    <li><strong>Ausschnitt aus dem Alltag</strong> &amp; ein <strong>Moment der Krise</strong> (eine Nacht + der nächste Abend).</li>
                    <li><strong>Aussparung / Andeutung:</strong> Krieg, Hunger, Namen werden <strong>nie genannt</strong> — der Leser muss deuten.</li>
                    <li><strong>Dingsymbol:</strong> das <strong>Brot</strong>.</li>
                    <li><strong>Personaler Erzähler</strong> — überwiegend aus der <strong>Sicht der Frau</strong>.</li>
                </ul>
            </div>
            <div class="bac-wissen">Forma e ARGUMENT: <strong>scurtimea</strong>, <strong>Aussparung</strong> (nimic nu e explicat: nici războiul, nici foamea, nici numele), <strong>Dingsymbol-ul das Brot</strong> și <strong>finalul deschis/pointat</strong> („vier essen") sunt mărcile clasice ale <strong>Kurzgeschichte</strong>. Comentează asta!</div>
        </div>
    </div>

    <!-- 6: Sprache & Stil -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>✒️ Sprache und Stil</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Stilmittel (mit Belegen)</h4>
                <table class="theory-table">
                    <thead><tr><th>Merkmal</th><th>Beleg / Funktion</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">Alltags-/Umgangssprache</td><td>„Ich hab auch was gehört" · „Komm man" — schlicht, nah am Leben (Kahlschlag)</td></tr>
                        <tr><td class="nomen">Parataxe &amp; kurze Sätze</td><td>knappe, nüchterne Hauptsätze — verdichtete, karge Sprache</td></tr>
                        <tr><td class="nomen">Wiederholung / Leitwörter</td><td>„Brot", „kalt", „Küche" kehren wieder und verdichten die Not</td></tr>
                        <tr><td class="nomen">karge wörtliche Rede</td><td>die kurzen Dialoge — das Wichtigste bleibt <strong>ungesagt</strong></td></tr>
                        <tr><td class="nomen">Aussparung / Andeutung</td><td>die Not, der Hunger, der Krieg werden verschwiegen — der Leser deutet</td></tr>
                        <tr><td class="nomen">Dingsymbol</td><td>das „Brot" trägt die ganze Bedeutung (Not, Lüge, Liebe)</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="bac-wissen">Das Brot are limba <strong>nüchtern-karg</strong> a Trümmerliteratur (Kahlschlag) — la analiză comentează <strong>Alltagssprache</strong>, <strong>Parataxa</strong>, <strong>Wiederholung (Leitwörter)</strong> și <strong>Aussparung</strong>.</div>
        </div>
    </div>

    <!-- 7: Interpretation -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💡 Interpretation</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="theory-box">
                <h4>Der zentrale Gedanke</h4>
                <p><strong>Eine Kurzgeschichte über Menschlichkeit in der Not.</strong> In der Hungerzeit nach dem Krieg siegen <strong>Liebe, Würde und Mitgefühl</strong> über Hunger, Scham und Egoismus. Borchert zeigt am kleinen, alltäglichen Ausschnitt — einer Nacht und einem Abend eines alten Ehepaars —, wie die <strong>schonende Lüge</strong> und das <strong>stille Opfer</strong> die Würde des Menschen retten.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselpunkte</h4>
                <ul>
                    <li><strong>Hunger/Not:</strong> der stumme Hintergrund (Aussparung) — nie genannt, überall spürbar.</li>
                    <li><strong>Lüge aus Liebe:</strong> die Frau spielt mit, um die Würde des Mannes zu bewahren.</li>
                    <li><strong>Opfer:</strong> die vierte Scheibe — Geben statt Nehmen.</li>
                    <li><strong>das Brot</strong> als Dingsymbol: Not und Liebe in einem.</li>
                    <li><strong>Form = Wirkung:</strong> Kurzgeschichte (Aussparung, offener Schluss, karge Sprache).</li>
                </ul>
            </div>
            <div class="bac-wissen">Cele mai probabile subiecte: „Charakterisierung der Frau", „das Brot als Symbol", „die Lüge aus Liebe" și „Merkmale der Kurzgeschichte". Pereche utilă: Trakl „Ein Winterabend" — acolo „<em>Brot und Wein</em>" pe masă = <strong>Geborgenheit/Gnade</strong> (belșug sacru) ↔ la Borchert das Brot = <strong>Not, Lüge UND Liebe</strong> (lipsă și iubire). Același simbol — pâinea — atitudini opuse.</div>
        </div>
    </div>
`;

// ============================================
// BAC-TRAINING (Prüfungsfragen + Musterantwort) + SCHREIBVORLAGEN
// ============================================
const trainingHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Citește întrebarea, <strong>gândește singur</strong> răspunsul — apoi compară cu Musterantwort. Schreibvorlagen-urile de jos îți dau structura gata pentru fiecare subiect.</div>
        </div>
    </div>

    <h4 style="color:#065f46; margin:14px 0 8px;">🎯 Häufige Prüfungsfragen mit Musterantworten</h4>

    <div class="theory-box">
        <p><strong>1. Worum geht es in „Das Brot"? (Inhaltswiedergabe)</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m1')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m1">Borcherts Kurzgeschichte <em>Das Brot</em> (1946) erzählt von einem alten Ehepaar in der <strong>Hungerzeit</strong> nach dem Krieg. Nachts wacht die <strong>Frau</strong> auf und findet ihren <strong>Mann</strong> in der Küche; <strong>Brotkrümel</strong> verraten, dass er sich heimlich Brot abgeschnitten hat. Beide <strong>lügen</strong> (ein Geräusch, die Dachrinne), um die Wahrheit nicht auszusprechen. Am nächsten Abend gibt die Frau ihm eine <strong>vierte</strong> Scheibe ab und isst selbst weniger: „Du kannst ruhig vier essen." Ein stilles <strong>Opfer aus Liebe</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>2. Welcher Epoche und Gattung gehört das Werk an?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m2')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m2">Es gehört zur <strong>Nachkriegsliteratur / Trümmerliteratur</strong> (Kahlschlagliteratur, nach 1945) und ist eine <strong>Kurzgeschichte</strong> von <strong>Wolfgang Borchert</strong> (1946, veröffentlicht 1947).</div>
    </div>

    <div class="theory-box">
        <p><strong>3. Nennen Sie Merkmale der Kurzgeschichte am Beispiel.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m3')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m3">Typisch sind der <strong>unmittelbare Einstieg</strong> („Plötzlich wachte sie auf"), der <strong>offene/pointierte Schluss</strong> („Du kannst ruhig vier essen"), die <strong>Aussparung</strong> (Krieg, Hunger und Namen werden nie genannt), die <strong>knappe, alltägliche Sprache</strong>, ein <strong>Ausschnitt aus dem Alltag</strong> mit einem Moment der Krise und das <strong>Dingsymbol</strong> „Brot".</div>
    </div>

    <div class="theory-box">
        <p><strong>4. Charakterisieren Sie die Frau.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m4')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m4">Die etwa 60-jährige Frau ist seit <strong>39 Jahren verheiratet</strong>. Sie ist <strong>klug</strong> (sie durchschaut die Lüge sofort), vor allem aber <strong>liebevoll und selbstlos</strong>: Statt ihren Mann zu <strong>beschämen</strong>, spielt sie mit („Ich hab auch was gehört") und <strong>bewahrt seine Würde</strong>. Am Ende <strong>opfert</strong> sie eine eigene Brotscheibe. Sie ist das <strong>moralische Zentrum</strong> der Geschichte.</div>
    </div>

    <div class="theory-box">
        <p><strong>5. Charakterisieren Sie den Mann.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m5')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m5">Der etwa 63-jährige Mann ist vom <strong>Hunger</strong> übermannt und schneidet sich nachts heimlich Brot ab. Ertappt, <strong>schämt</strong> er sich und <strong>lügt</strong> („Ich dachte, hier wäre was" · „die Dachrinne"). Seine Lüge ist kein böser Betrug, sondern Ausdruck von <strong>Schwäche und Scham</strong> in der Not — er bleibt menschlich und bemitleidenswert.</div>
    </div>

    <div class="theory-box">
        <p><strong>6. Welche Rolle spielt das Brot (Symbol)?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m6')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m6">Das <strong>Brot</strong> ist das zentrale <strong>Dingsymbol</strong> und der Titel. Es steht für <strong>Überleben und Not</strong> (der Hunger treibt zum Diebstahl im eigenen Haus), zugleich aber für <strong>Liebe und Teilen</strong> (die Frau gibt ihre Scheibe ab). Die <strong>Brotkrümel</strong> sind der stumme Beweis der Lüge.</div>
    </div>

    <div class="theory-box">
        <p><strong>7. Was bedeutet „die Lüge aus Liebe"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m7')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m7">Die Frau weiß, dass ihr Mann heimlich gegessen und dann <strong>gelogen</strong> hat. Statt ihn bloßzustellen, <strong>lügt sie mit</strong> („Ich hab auch was gehört. Aber es war wohl nichts"). Diese Lüge ist keine Schuld, sondern ein Akt der <strong>Rücksicht und Menschlichkeit</strong>: Sie rettet die <strong>Würde</strong> des Mannes.</div>
    </div>

    <div class="theory-box">
        <p><strong>8. Welche Rolle spielen Hunger und Nachkriegszeit?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m8')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m8">Die <strong>Hungersnot</strong> nach dem Zweiten Weltkrieg ist der Grund für das heimliche Essen und die strenge Brotration. Auffällig ist die <strong>Aussparung</strong>: Krieg und Hunger werden <strong>nie ausdrücklich genannt</strong>, sind aber als bedrückender Hintergrund überall spürbar — typisch für die <strong>Trümmerliteratur</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>9. Erklären Sie den Schluss.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m9')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m9">Am nächsten Abend schiebt die Frau ihrem Mann <strong>vier</strong> statt drei Scheiben hin und isst selbst weniger: „<em>Du kannst ruhig vier essen.</em>" Ohne die Lüge je zu erwähnen, bringt sie ihm ein stilles <strong>Opfer</strong>. Der <strong>offene, pointierte Schluss</strong> zeigt: Die <strong>Liebe</strong> ist stärker als die Enttäuschung und die Not.</div>
    </div>

    <div class="theory-box">
        <p><strong>10. Warum gehört „Das Brot" zur Trümmerliteratur?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m10')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m10">Weil es die <strong>Nachkriegsrealität</strong> zeigt: <strong>Hunger, Not und Entbehrung</strong> um 1946. Stilistisch ist es <strong>Kahlschlag</strong> — nüchterne, karge <strong>Alltagssprache</strong>, knappe Sätze, <strong>Aussparung</strong>. Statt großer Worte ein kleiner, wahrer Moment der <strong>Menschlichkeit</strong> — genau das Anliegen der Trümmerliteratur.</div>
    </div>

    <h4 style="color:#065f46; margin:22px 0 8px;">✍️ Schreibvorlagen — Struktur für jedes Subiect</h4>

    <div class="vorlage">
        <h5>A) Charakterisierung (Subiect II) — Einleitung / Hauptteil / Schluss</h5>
        <div class="teil">Einleitung:</div>
        <p class="redemittel">„In der Kurzgeschichte <em>Das Brot</em> (1946) von Wolfgang Borchert spielt die Figur des/der … eine zentrale Rolle."</p>
        <div class="teil">Hauptteil (Redemittel):</div>
        <ul>
            <li class="redemittel">„Sozial / als Typus wird … dargestellt als …"</li>
            <li class="redemittel">„Charakterlich zeichnet sich … durch … aus (z. B. …)."</li>
            <li class="redemittel">„Im Verlauf der Handlung zeigt sich … (z. B. von der Enttäuschung zum Opfer)."</li>
            <li class="redemittel">„In der Beziehung zu … zeigt sich …"</li>
        </ul>
        <div class="teil">Schluss:</div>
        <p class="redemittel">„Zusammenfassend verkörpert die Figur … (z. B. die Menschlichkeit und Würde in der Not)."</p>
    </div>

    <div class="vorlage">
        <h5>B) Interpretation (Kurzgeschichte / Thema)</h5>
        <p class="redemittel">Einleitung: Werk/Autor/Jahr/Epoche + Gattung (Kurzgeschichte) + Deutungshypothese.</p>
        <p class="redemittel">Hauptteil: „Auffällig ist das Dingsymbol des Brotes …" · „Das Thema der Lüge aus Liebe / der Not zeigt sich in …" · „Vor dem Hintergrund der Trümmerliteratur bedeutet dies …" · immer mit Beleg.</p>
        <p class="redemittel">Schluss: „Die Analyse bestätigt, dass …"</p>
    </div>

    <div class="vorlage">
        <h5>C) Meinung / Stellungnahme (z. B. „Darf man aus Liebe lügen?")</h5>
        <p class="redemittel">„Einerseits … andererseits …" · „Dafür spricht …, dagegen lässt sich einwenden …" · <strong>immer mit Beispiel/Beleg!</strong></p>
        <p class="redemittel">Schluss: „Abschließend vertrete ich die Auffassung, dass …, weil …"</p>
    </div>

    <div class="strategie">La Subiect II structura aduce 5 puncte: Einleitung (Werk/Autor/Jahr/Gattung) · Hauptteil cu Belege (scene) · Schluss cu deutung. Leagă de teme (Not / Lüge aus Liebe / Opfer)!</div>
`;

// ============================================
// Toggle Musterantwort
// ============================================
function toggleMuster(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');
}

// ============================================
// INJECTARE
// ============================================
(function () {
    function injectTheory() {
        const t = document.getElementById('theory-container');
        if (t) t.innerHTML = theoryHTML;
        const tr = document.getElementById('training-container');
        if (tr) tr.innerHTML = trainingHTML;
    }
    if (document.readyState !== 'loading') { injectTheory(); }
    else { document.addEventListener('DOMContentLoaded', injectTheory); }
})();
