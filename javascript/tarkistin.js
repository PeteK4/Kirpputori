nappiLuoUusiTunnus.addEventListener("click", function(event) {
  event.preventDefault();
  const kaikkiKentat = [id, salasana, nimi, sahkoposti];
  let kaikkiOk = 4;
  
  // Tarkista kentät 
  kaikkiKentat.forEach((syottoKentta) => {
    if (syottoKentta.value == "") {
      naytaHuomautus(syottoKentta, "Täytä tämä kenttä");
      kaikkiOk -=1;
    } else if (syottoKentta == id && syottoKentta.value.length < 6) {
      naytaHuomautus(syottoKentta, "Syötä vähintään 6 merkkiä");
      kaikkiOk -=1;
    } else if (syottoKentta == salasana && !tarkistaSalasana(syottoKentta.value)) {
      naytaHuomautus(syottoKentta, "Salasanassa tulee olla vähintään 5 merkkiä, 1 iso kirjain, 1 numero, 1 erikoismerkki");
      kaikkiOk -=1;
    } else if (syottoKentta == sahkoposti && !tarkistaSposti(syottoKentta.value)) {
      naytaHuomautus(syottoKentta, "Sähköpostiosoitteen tulee olla muotoa: nimi@email.fi");
      kaikkiOk -=1;
    }
  });

  if (kaikkiOk == 4) {
    window.location.href = "./kirppis.html";
  } 
});


function tarkistaSalasana(salasana) {
  const isoKirjain = /[A-Z]/;
  const numero = /[0-9]/;
  const erikMerkki = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  const pituus = salasana.length >= 5;
  return isoKirjain.test(salasana) && numero.test(salasana) && erikMerkki.test(salasana) && pituus;
}

// Tarkista, onko sähköpostiosoite kirjoitettu oikein ja palauttaa joko true tai false
function tarkistaSposti(sahkoposti) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(sahkoposti);
}

// Näytä huomautus syöttökentässä, jos kenttä on tyhjä tai virheellisesti täytetty
function naytaHuomautus(syottoKentta, teksti) {
  syottoKentta.value = "";
  syottoKentta.placeholder = teksti;
  syottoKentta.classList.add("huomautus-vari");
  
}

// Poista huomautus
const aktiivinen = (syottoKentta) => {
  if (syottoKentta.placeholder != "") {
    syottoKentta.placeholder = "";
  }
};

// Aseta syöttökenttä aktiiviseksi
[id, salasana, nimi, sahkoposti].forEach((syottoKentta) => {
  syottoKentta.addEventListener("focus", () => aktiivinen(syottoKentta));
});
