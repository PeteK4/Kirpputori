/*
function lataaNapit(id) {
    fetch("linkkiNapit.html")
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            seuraaNappeja();
        })
        .catch(error => console.error('Virhe latauksessa:', error));
}

function seuraaNappeja() {
*/
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
            localStorage.setItem("kirjautunut", "eiKirjautunut");
            window.location.href = "index.html";
        }
    });

/*

}

// Käynnistä lataus heti kun sivu latautuu
document.addEventListener("DOMContentLoaded", function() {
    lataaNapit("linkkiNapit");
});

*/
