// ============================================
// ÜBUNGEN — Das Brot (BAC germană maternă)
// Claudia Toth · 5 Übungen: Multiple Choice + Lückentext (autoverificare)
// Delimitator ' ; apostrof = ’ (U+2019); ghilimele „ " ; & = &amp;
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u').replace(/ß/g, 'ss')
        .replace(/[.!?;:,]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
function answerMatches(input, accept) {
    const n = normalizeAnswer(input);
    if (!n) return false;
    return accept.some(a => normalizeAnswer(a) === n);
}

const ex1Data = {
    instr: '👇 Wähle die richtige Antwort. (Wissen über Werk, Epoche und Inhalt)',
    questions: [
        { q: 'Wer ist der Autor von „Das Brot"?', options: ['Heinrich Böll', 'Wolfgang Borchert', 'Bertolt Brecht', 'Günter Grass'], correct: 1 },
        { q: 'In welche Epoche gehört das Werk?', options: ['in die Romantik', 'in die Trümmerliteratur', 'in den Barock', 'in die Aufklärung'], correct: 1 },
        { q: 'Welcher Gattung gehört das Werk an?', options: ['Ballade', 'Kurzgeschichte', 'Sonett', 'Heldenepos'], correct: 1 },
        { q: 'Wann spielt die Handlung?', options: ['im Mittelalter', 'in der Hungerzeit nach dem Krieg', 'im Barock', 'in der Zukunft'], correct: 1 },
        { q: 'Was findet die Frau auf der Tischdecke?', options: ['Geld', 'Brotkrümel', 'einen Brief', 'Blumen'], correct: 1 },
        { q: 'Warum ist der Mann nachts aufgestanden?', options: ['wegen eines Einbruchs', 'aus Hunger — er schneidet sich Brot ab', 'um zu arbeiten', 'wegen einer Krankheit'], correct: 1 },
        { q: 'Wie reagiert die Frau am nächsten Abend?', options: ['sie schimpft laut', 'sie gibt ihm eine vierte Scheibe ab', 'sie verlässt ihn', 'sie lacht ihn aus'], correct: 1 }
    ]
};

const ex2Data = {
    instr: '👇 Ordne jedem Motiv / Zitat seine richtige Bedeutung zu.',
    questions: [
        { q: '„das Brot"', options: ['Dingsymbol: Not und Liebe', 'eine Stadt', 'ein Fluss', 'ein Vorname'], correct: 0 },
        { q: '„die Brotkrümel"', options: ['der stumme Beweis der Lüge', 'ein Zauberspruch', 'ein Schmuckstück', 'ein Spielzeug'], correct: 0 },
        { q: '„Du kannst ruhig vier essen"', options: ['das Opfer der Frau (Liebe)', 'ein strenger Befehl', 'ein Scherz', 'eine Drohung'], correct: 0 },
        { q: '„Ich hab auch was gehört"', options: ['die Lüge aus Liebe (sie schont ihn)', 'die reine Wahrheit', 'ein Vorwurf', 'eine Bitte'], correct: 0 },
        { q: 'die Aussparung', options: ['Krieg und Hunger werden nie genannt', 'ein Reimschema', 'eine Nebenfigur', 'ein Schauplatz'], correct: 0 }
    ]
};

const ex3Data = {
    instr: '👇 Welcher Begriff ist gemeint? (wichtig für Subiect I &amp; II)',
    questions: [
        { q: 'Ein abrupter Anfang mitten im Geschehen heißt …', options: ['in medias res', 'Prolog', 'Epilog', 'Vorwort'], correct: 0 },
        { q: 'Die karge Literatur direkt nach 1945 nennt man auch …', options: ['Kahlschlagliteratur / Trümmerliteratur', 'Klassik', 'Vormärz', 'Aufklärung'], correct: 0 },
        { q: 'Ein bedeutungstragender Gegenstand (das Brot) ist ein …', options: ['Dingsymbol', 'Sonett', 'Vergleich', 'Epos'], correct: 0 },
        { q: 'Wenn Wichtiges bewusst verschwiegen wird, spricht man von …', options: ['Aussparung', 'Anapher', 'Metrum', 'Kadenz'], correct: 0 },
        { q: 'Eine kurze Erzählung mit offenem Schluss ist eine …', options: ['Kurzgeschichte', 'Ode', 'Hymne', 'Ballade'], correct: 0 }
    ]
};

const ex4Data = {
    instr: '👇 Ergänze die Sätze mit dem passenden Wort. (ä=ae, ö=oe, ü=ue gehen auch)',
    items: [
        { before: 'Die Kurzgeschichte „Das Brot" schrieb Wolfgang', after: '.', accept: ['Borchert'], hint: 'autorul', answer: 'Borchert' },
        { before: 'Das Werk gehört zur Epoche der', after: '.', accept: ['Trümmerliteratur', 'Truemmerliteratur'], hint: 'epoca (literatura ruinelor)', answer: 'Trümmerliteratur' },
        { before: 'Auf der Tischdecke findet die Frau', after: '.', accept: ['Brotkrümel', 'Brotkruemel', 'Krümel', 'Kruemel'], hint: 'firimituri de pâine', answer: 'Brotkrümel' },
        { before: 'Am Ende gibt die Frau ihrem Mann eine vierte', after: 'Brot.', accept: ['Scheibe'], hint: 'felie', answer: 'Scheibe' },
        { before: 'Beide lügen, um die', after: 'des anderen zu bewahren.', accept: ['Würde', 'Wuerde'], hint: 'demnitatea', answer: 'Würde' }
    ]
};

const ex5Data = {
    instr: '👇 Bewerbungsbrief (Subiect III): Wähle das Richtige.',
    questions: [
        { q: 'Welche zwei Elemente bringen je 2 Punkte?', options: ['Datum und Unterschrift', 'Betreffzeile und Anrede', 'Absender und Anlagen', 'Grußformel und Empfänger'], correct: 1 },
        { q: 'Welche Grußformel ist passend (formell)?', options: ['Tschüss und bis bald', 'Liebe Grüße', 'Mit freundlichen Grüßen', 'Servus'], correct: 2 },
        { q: 'Wie beginnt man den Brieftext, wenn man den Namen nicht kennt?', options: ['Hallo!', 'Sehr geehrte Damen und Herren,', 'Liebe Firma,', 'Guten Tag, Leute,'], correct: 1 },
        { q: 'Welcher Satz passt in eine Bewerbung?', options: ['Ich will unbedingt diesen Job.', 'Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Gebt mir bitte die Stelle.', 'Ich brauche dringend Geld.'], correct: 1 }
    ]
};

function buildMC(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.questions.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' + it.q + '</label><div class="mc-options">';
        it.options.forEach(function (opt, j) {
            const id = prefix + '-q' + i + '-o' + j;
            html += '<div class="mc-option"><input type="radio" name="' + prefix + '-q' + i + '" id="' + id + '" value="' + j + '"><label for="' + id + '">' + opt + '</label></div>';
        });
        html += '</div><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkMC(data, prefix) {
    let correct = 0;
    data.questions.forEach(function (it, i) {
        const sel = document.querySelector('input[name="' + prefix + '-q' + i + '"]:checked');
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (sel && parseInt(sel.value, 10) === it.correct) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.options[it.correct]; }
        }
    });
    return { correct: correct, total: data.questions.length };
}

function resetMC(containerId, data, prefix) {
    data.questions.forEach(function (it, i) {
        const sels = document.querySelectorAll('input[name="' + prefix + '-q' + i + '"]');
        sels.forEach(function (s) { s.checked = false; });
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function buildLueckentext(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.items.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' +
            it.before + ' <input type="text" id="' + prefix + '-in-' + i + '" placeholder="(' + it.hint + ')" autocomplete="off"> ' + it.after +
            '</label><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkLueckentext(data, prefix) {
    let correct = 0;
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (input && answerMatches(input.value, it.accept)) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.answer; }
        }
    });
    return { correct: correct, total: data.items.length };
}

function resetLueckentext(data, prefix) {
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        if (input) input.value = '';
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function checkEx1() { return checkMC(ex1Data, 'ex1'); }
function checkEx2() { return checkMC(ex2Data, 'ex2'); }
function checkEx3() { return checkMC(ex3Data, 'ex3'); }
function checkEx4() { return checkLueckentext(ex4Data, 'ex4'); }
function checkEx5() { return checkMC(ex5Data, 'ex5'); }

function resetEx1() { resetMC('ex1-container', ex1Data, 'ex1'); }
function resetEx2() { resetMC('ex2-container', ex2Data, 'ex2'); }
function resetEx3() { resetMC('ex3-container', ex3Data, 'ex3'); }
function resetEx4() { resetLueckentext(ex4Data, 'ex4'); }
function resetEx5() { resetMC('ex5-container', ex5Data, 'ex5'); }

(function () {
    function buildAll() {
        buildMC('ex1-container', ex1Data, 'ex1');
        buildMC('ex2-container', ex2Data, 'ex2');
        buildMC('ex3-container', ex3Data, 'ex3');
        buildLueckentext('ex4-container', ex4Data, 'ex4');
        buildMC('ex5-container', ex5Data, 'ex5');
    }
    if (document.readyState !== 'loading') { buildAll(); }
    else { document.addEventListener('DOMContentLoaded', buildAll); }
})();
