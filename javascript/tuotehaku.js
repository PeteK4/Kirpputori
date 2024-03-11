const hakuTuloksetAlue = document.getElementById("hakutulokset")
const hakuKentta = document.getElementById("hakukentta")

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hakunappi').addEventListener('click', function(event) {
        event.preventDefault();
        suoritaHaku();
    });
});

function suoritaHaku() {
    // Haetaan hakusana
    let hakusana = document.getElementById('hakukentta').value.toLowerCase();

    // Tarkistetaan onko hakukenttään syötetty tekstiä
    if (hakusana == "") {
        hakuKentta.placeholder = "Kirjoita hakusana";
        return
    }
    
    // Haetaan tuotteet hakusanan perusteella
    let loytyneetTuotteet = etsiTuotteet(hakusana);

    // Tarkistetaan löytyikö tuote
    if (loytyneetTuotteet.length == 0) {
        hakuKentta.value = "";
        hakuKentta.placeholder = "Tuotetta ei löydy";
        return;
    }

    // Näytetään hakutulokset
    naytaHakutulokset(loytyneetTuotteet);
}

function etsiTuotteet(hakusana) {
    // Käytetään tallennettuja tuotteita localStoragesta
    let tallennetutTuotteet = JSON.parse(localStorage.getItem('productList')) || [];
    let loydetytTuotteet = [];

    // Käydään läpi jokainen tuote
    tallennetutTuotteet.forEach(function(tuote) {
        // Tarkistetaan, että tuote on määritelty ja sillä on nimi, kuvaus ja kategoria
        if (tuote && tuote.name && tuote.description && tuote.price && tuote.kategoria && tuote.tyyppi) {
            // Tarkistetaan, vastaako tuotteen nimi, kuvaus, hinta tai kategoria hakusanaa
            if (tuote.name.toLowerCase().includes(hakusana) || 
            tuote.description.toLowerCase().includes(hakusana) || 
            tuote.price.toString().includes(hakusana) || 
            tuote.kategoria.toLowerCase().includes(hakusana) || 
            tuote.tyyppi.toLowerCase().includes(hakusana)) {
                loydetytTuotteet.push(tuote);
                hakuTuloksetAlue.style.display="block";
            }
        }
    });

    // Palautetaan löydetyt tuotteet
    return loydetytTuotteet;
}

// Hakutulosten näyttäminen HTML:ssä
function naytaHakutulokset(tuotteet) {
    let hakutulosteElementti = document.getElementById('hakutulokset');
    hakutulosteElementti.innerHTML = ''; // Tyhjennetään aiemmat hakutulokset

    // Lisätään jokainen löydetty tuote hakutuloksiin
    tuotteet.forEach(function(tuote) {
        let tuoteElementti = document.createElement('div');
        tuoteElementti.classList.add('tuote'); // Lisätään luokka 'tuote' elementtiin

        // Luo p-elementit ja asettaa niihin tuotteen tiedot
        let nimiElementti = document.createElement('h2');
        nimiElementti.textContent = tuote.name;

        let kuvausElementti = document.createElement('p');
        kuvausElementti.textContent = 'Kuvaus: ' + tuote.description;

        let hintaElementti = document.createElement('p');
        hintaElementti.textContent = 'Hinta: ' + tuote.price;

        let kategoriaElementti = document.createElement('p');
        kategoriaElementti.textContent = 'Kategoria: ' + tuote.kategoria;

        let tyyppiElementti = document.createElement('p');
        tyyppiElementti.textContent = 'Tyyppi: ' + tuote.tyyppi;
        

        // Lisätään p-elementit tuote-elementtiin
        tuoteElementti.appendChild(nimiElementti);
        tuoteElementti.appendChild(kuvausElementti);
        tuoteElementti.appendChild(hintaElementti);
        tuoteElementti.appendChild(kategoriaElementti);
        tuoteElementti.appendChild(tyyppiElementti);

        // Lisätään tuote-elementti hakutuloksiin
        hakutulosteElementti.appendChild(tuoteElementti);
    });

}

