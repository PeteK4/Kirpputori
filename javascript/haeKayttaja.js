document.addEventListener("DOMContentLoaded", function() {
    const kayttaja = JSON.parse(localStorage.getItem(localStorage.getItem("kayttajaTunnus")));
    const nimi = kayttaja.nimi;
    const etunimi = nimi.split(" ")[0]; // Erotetaan etunimi välilyönnin kohdalta
    document.getElementById("kayttajaNimi").innerText = etunimi + "!";
});
