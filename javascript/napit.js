document.getElementById("nappiEtusivu").addEventListener("click", function() {
    window.location.href = "etusivu.html";
});

document.getElementById("nappiKategoriat").addEventListener("click", function() {
    window.location.href = "kategoriat.html";
});

document.getElementById("nappiIlmoita").addEventListener("click", function() {
    window.location.href = "ilmoitaTuote.html";
});

document.getElementById("nappiTuotehaku").addEventListener("click", function() {
    window.location.href = "tuotehaku.html";
});

document.getElementById("nappiKirjauduUlos").addEventListener("click", function() {
    if (confirm("Vahvista uloskirjautuminen.")) {
        window.location.href = "index.html";
    }
});
