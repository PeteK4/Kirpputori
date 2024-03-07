document.addEventListener("DOMContentLoaded", function() {
    const nimi = JSON.parse(localStorage.getItem(localStorage.getItem("kayttajaTunnus"))).nimi;
    document.getElementById("kayttajaNimi").innerText = nimi + "!";
});
