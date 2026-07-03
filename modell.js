// ============================================
// MODELL-PRÜFUNG — Das Brot (BAC germană maternă)
// Claudia Toth · Subiect I + II + III rezolvate complet
// „Versuch zuerst selbst → dann aufdecken". Galben = zu merken. 🏅 = warum 10p.
// Reutilizează toggleMuster() din theory.js.
// Subiect I: Georg Trakl „Ein Winterabend" — verbatim verifiziert (gemeinfrei, Trakl d.1914).
// Subiect II: Charakterisierung der Frau (Borchert, Das Brot) — opera studiată.
// ============================================

const modellHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Aici ai o <strong>probă BAC completă</strong> (Subiect I + II + III), rezolvată integral. La <strong>Subiect I</strong> ai „Ein Winterabend" de Trakl — poemul-pereche perfect: același simbol, <strong>das Brot</strong>, dar la Trakl „Brot und Wein" = <strong>Geborgenheit &amp; Gnade</strong> pe masa pusă, iar la Borchert pâinea = <strong>Not, Lüge und Liebe</strong>. La <strong>Subiect II</strong> ai o Charakterisierung completă a <strong>Frau</strong>-ei. <strong>Încearcă întâi singur</strong>, apoi dezvăluie. Ce e <span class="merken">galben</span> merită memorat.</div>
        </div>
    </div>
    <div class="strategie">Subiect II (Charakterisierung pe opera studiată) se învață și aduce nota. La Subiect I textul e necunoscut → memorezi METODA. La III memorezi tiparul scrisorii.</div>

    <!-- ================= SUBIECT I ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📄 Subiect I — Textinterpretation</h4></div>
    <p>Lesen Sie das Gedicht und bearbeiten Sie die Aufgaben.</p>
    <div class="gedicht">
        <span class="titel">Georg Trakl: Ein Winterabend (1913)</span>
        <div class="strophe">Wenn der Schnee ans Fenster fällt,<br>Lang die Abendglocke läutet,<br>Vielen ist der Tisch bereitet<br>Und das Haus ist wohlbestellt.</div>
        <div class="strophe">Mancher auf der Wanderschaft<br>Kommt ans Tor auf dunklen Pfaden.<br>Golden blüht der Baum der Gnaden<br>Aus der Erde kühlem Saft.</div>
        <div class="strophe">Wanderer tritt still herein;<br>Schmerz versteinerte die Schwelle.<br>Da erglänzt in reiner Helle<br>Auf dem Tische Brot und Wein.</div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 1:</strong> Interpretieren Sie das Gedicht, indem Sie auf die äußere Form und auf die sprachliche Gestaltung eingehen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1a')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1a">
        <p><strong>Einleitung:</strong> Das Gedicht <em>„Ein Winterabend"</em> von Georg Trakl ist ein <span class="merken">Gedicht der Moderne</span> (Frühexpressionismus/Symbolismus). Es gestaltet einen Winterabend als Bild von <span class="merken">Geborgenheit, Gnade — und Schmerz</span> und stellt den <strong>gedeckten Tisch mit „Brot und Wein"</strong> ins Zentrum.</p>
        <p><strong>Äußere Form:</strong> <span class="merken">drei Strophen zu je vier Versen</span> mit <span class="merken">umarmendem Reim (abba)</span> im vierhebigen Trochäus. Der ruhige, liedhafte Ton unterstreicht die abendliche Stille.</p>
        <p><strong>Sprachliche Gestaltung:</strong></p>
        <ul>
            <li>Das <span class="merken">winterliche Naturbild</span>: „Schnee ans Fenster", „Abendglocke" — Ruhe, Stille, Geborgenheit.</li>
            <li>Das <span class="merken">Symbol der Geborgenheit</span>: „der Tisch bereitet", „das Haus ist wohlbestellt" — Heimat und Ordnung.</li>
            <li>Die <span class="merken">Metapher „Golden blüht der Baum der Gnaden"</span> (mit Farbsymbolik „golden") — das Heilige, die Gnade.</li>
            <li>Der <span class="merken">Kontrast Wanderer ↔ Haus</span>: „Mancher auf der Wanderschaft … auf dunklen Pfaden" (Einsamkeit, Fremdheit) tritt in die helle Geborgenheit ein.</li>
            <li>Die <span class="merken">Personifikation</span> „Schmerz versteinerte die Schwelle" — auch das Leid gehört zur Schwelle (dem Übergang).</li>
            <li>Der Höhepunkt: <span class="merken">„Auf dem Tische Brot und Wein"</span> — ein Symbol (Abendmahl): Nahrung, Gemeinschaft, Gnade.</li>
        </ul>
        <p><strong>Schluss:</strong> „Ein Winterabend" gestaltet den Winterabend als Bild von <strong>Geborgenheit und Gnade</strong>, in das auch <strong>Schmerz und Fremdheit</strong> gehören. Das ist ein aufschlussreicher Kontrast zu „Das Brot": Bei Trakl ist das Brot Zeichen von <strong>Fülle und Gnade</strong> am gedeckten Tisch — bei Borchert ist dasselbe Brot in der <strong>Not</strong> umkämpft, Anlass von Lüge, aber auch von <strong>Liebe</strong>.</p>
        <div class="warum"><ul>
            <li>Einleitung mit Autor, Werk, Epoche und Deutungshypothese (Geborgenheit/Gnade) ✔</li>
            <li>äußere Form (3 Strophen, umarmender Reim abba, vierhebiger Trochäus) benannt ✔</li>
            <li>mindestens 3 sprachliche Mittel <strong>mit Beleg</strong> (Naturbild, Metapher, Kontrast, Personifikation, Symbol Brot und Wein) ✔</li>
            <li>Schluss mit Deutung (+ Bezug zum Werk: das Brot bei Trakl ↔ bei Borchert) ✔</li>
        </ul></div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 2:</strong> Beide Texte rücken das Brot und den gedeckten Tisch ins Zentrum. Wie wichtig ist das Teilen — gerade des Wenigen — für ein menschliches Miteinander? Belegen Sie mit mindestens zwei Beispielen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1b')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1b">
        <p><span class="merken">Meiner Meinung nach</span> ist das <strong>Teilen</strong> — besonders in Zeiten des Mangels — ein Kern der Menschlichkeit: Es schafft Gemeinschaft und bewahrt Würde.</p>
        <p><strong>Einerseits</strong> zeigt Trakls „Ein Winterabend" das Teilen als <strong>Geborgenheit und Gastfreundschaft</strong>: Der Tisch ist „vielen bereitet", und selbst der fremde „Wanderer" wird in die helle Wärme aufgenommen — „Brot und Wein" für alle. <strong>Andererseits</strong> zeigt Borcherts „Das Brot", wie das Teilen zur <strong>Tat der Liebe</strong> wird: Obwohl selbst hungrig, gibt die Frau ihrem Mann eine eigene Scheibe ab („Du kannst ruhig vier essen"). Gerade weil das Brot knapp ist, wiegt dieses Teilen doppelt schwer. Die Not kann zwar auch zum <strong>Egoismus</strong> verführen (der Mann nimmt heimlich) — umso größer ist der Wert des freiwilligen Gebens.</p>
        <p><span class="merken">Abschließend vertrete ich die Auffassung</span>, dass Teilen kein bloßes Verteilen von Nahrung ist, sondern ein Ausdruck von Liebe und Menschlichkeit, der Menschen verbindet.</p>
        <div class="warum"><ul>
            <li>beide Texte richtig erfasst (Brot/Tisch als Zeichen von Gemeinschaft) ✔</li>
            <li>klare eigene Position (Teilen als Kern der Menschlichkeit) ✔</li>
            <li><strong>zwei</strong> Argumente mit Beispielen (Trakl: Gastfreundschaft / Borchert: das Opfer) ✔</li>
            <li>Redemittel der Meinungsäußerung + Rückbezug auf die Texte ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT II ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📝 Subiect II — Charakterisierung (die Frau)</h4></div>
    <p><strong>Aufgabe:</strong> Charakterisieren Sie die Figur der <em>Frau</em> aus Wolfgang Borcherts „Das Brot". Gehen Sie auf soziale Stellung, Charakterzüge, Verhalten/Entwicklung und Beziehung ein.</p>
    <button class="muster-btn" onclick="toggleMuster('s2')">🔓 Muster-Charakterisierung aufdecken</button>
    <div class="muster-antwort" id="s2">
        <p><strong>Einleitung:</strong> In der Kurzgeschichte <span class="merken">„Das Brot" (1946) von Wolfgang Borchert</span> steht die <strong>namenlose Frau</strong> im Mittelpunkt — eine alte, liebende Ehefrau in der Hungerzeit nach dem Krieg.</p>
        <p><strong>Soziale Stellung:</strong> Sie ist etwa <span class="merken">60 Jahre alt</span> und „<strong>neununddreißig Jahre verheiratet</strong>". Das Ehepaar lebt in einfachen Verhältnissen und leidet unter der <strong>Nachkriegs-Hungersnot</strong>. Bezeichnend: Sie hat <span class="merken">keinen Namen</span> (Aussparung) — so wird sie zur Stellvertreterin vieler.</p>
        <p><strong>Charakterzüge:</strong> Sie ist <span class="merken">klug</span> (sie durchschaut die Lüge sofort), vor allem aber <span class="merken">liebevoll, mitfühlend und selbstlos</span>. Statt ihren Mann zu beschämen, wahrt sie seine <strong>Würde</strong>.</p>
        <p><strong>Verhalten / Entwicklung:</strong> In der Nacht spielt sie die <strong>schonende Mitwisserin</strong>: „<em>Ich hab auch was gehört. Aber es war wohl nichts.</em>" Sie sorgt sich sogar um seine kalten Füße. Am nächsten Abend steigert sich ihre Liebe zur <strong>Tat</strong>: Sie <strong>opfert</strong> eine eigene Brotscheibe — „<em>Du kannst ruhig vier essen.</em>"</p>
        <p><strong>Beziehung:</strong> Zu ihrem <strong>Mann</strong> — nach 39 Jahren Ehe stellt sie die <strong>Beziehung und seine Würde über den eigenen Hunger</strong>. Ihre Liebe zeigt sich nicht in Worten, sondern in Rücksicht und Opfer.</p>
        <p><strong>Schluss:</strong> <span class="merken">Zusammenfassend</span> verkörpert die Frau die <strong>Menschlichkeit, Liebe und Würde in der Not</strong> — sie ist das <strong>moralische Zentrum</strong> der Geschichte.</p>
        <div class="warum"><ul>
            <li>Einleitung: Werk, Autor, <strong>Jahr</strong>, Gattung und Figur ✔</li>
            <li>soziale Stellung (alt, 39 Jahre verheiratet, Hungerzeit, namenlos) ✔</li>
            <li>Charakterzüge <strong>mit Belegen</strong> (klug, liebevoll, selbstlos) ✔</li>
            <li>Verhalten/Entwicklung (schonende Lüge → das Opfer) + Beziehung zum Mann ✔</li>
            <li>Schluss mit Deutung (Menschlichkeit &amp; Würde in der Not) ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT III ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">✉️ Subiect III — Bewerbungsbrief</h4></div>
    <p><strong>Aufgabe:</strong> Sie heißen Anna Marin und bewerben sich auf eine Anzeige der <em>Bäckerei-Konditorei „Zum goldenen Korn"</em> um einen Ferienjob als Aushilfe im Verkauf. Schreiben Sie einen vollständigen Bewerbungsbrief.</p>
    <button class="muster-btn" onclick="toggleMuster('s3')">🔓 Muster-Bewerbung aufdecken</button>
    <div class="muster-antwort" id="s3">
        <p style="color:#5A5147;">Anna Marin<br>Str. Lungă 12<br>500035 Kronstadt</p>
        <p style="color:#5A5147;">Bäckerei-Konditorei „Zum goldenen Korn"<br>z. Hd. Frau Keller<br>Marktplatz 7<br>500030 Kronstadt</p>
        <p style="color:#5A5147;">Kronstadt, den 3. Juli 2026</p>
        <p><span class="merken"><strong>Betreff: Bewerbung um einen Ferienjob als Aushilfe im Verkauf</strong></span></p>
        <p><span class="merken">Sehr geehrte Frau Keller,</span></p>
        <p><span class="merken">mit großem Interesse habe ich Ihre Anzeige gelesen</span> und bewerbe mich hiermit um die Stelle als Aushilfe im Verkauf in den Sommerferien.</p>
        <p>Ich besuche die zwölfte Klasse und arbeite gern mit Menschen. Der Umgang mit einem so wichtigen Grundnahrungsmittel wie <strong>Brot</strong> ist für mich etwas Besonderes. <span class="merken">Zu meinen Stärken gehören</span> Zuverlässigkeit, Freundlichkeit und Sorgfalt. Außerdem spreche ich gut Deutsch, Rumänisch und Englisch, was im Kundenkontakt hilfreich ist.</p>
        <p>Gern möchte ich Kundinnen und Kunden bedienen, die Ware ansprechend präsentieren und an der Kasse helfen. <span class="merken">Über ein persönliches Vorstellungsgespräch würde ich mich sehr freuen.</span></p>
        <p><span class="merken">Mit freundlichen Grüßen</span><br>Anna Marin</p>
        <p style="color:#5A5147; font-size:0.85rem;">Anlage: Lebenslauf</p>
        <div class="warum"><ul>
            <li>Absender, Empfänger, Ort + Datum ✔</li>
            <li><strong>Betreffzeile (2 P)</strong> und <strong>Anrede (2 P)</strong> korrekt ✔</li>
            <li>Einleitung (Bezug zur Anzeige) + Hauptteil (Stärken) + Schluss (Gespräch) ✔</li>
            <li>Grußformel, Unterschrift, Anlage ✔</li>
        </ul></div>
    </div>
`;

// ============================================
// INJECTARE
// ============================================
(function () {
    function inject() {
        const c = document.getElementById('modell-container');
        if (c) c.innerHTML = modellHTML;
    }
    if (document.readyState !== 'loading') { inject(); }
    else { document.addEventListener('DOMContentLoaded', inject); }
})();
