nappiLuoUusiTunnus.addEventListener("click", function(event) {
  event.preventDefault()
  const kaikkiKentat = [id, salasana, nimi, sahkoposti];
  let kaikkiOk = 4;
 
  // Tarkista kentät 
  kaikkiKentat.forEach((syottoKentta) => {
    if (syottoKentta.value == "") {
      naytaHuomautus(syottoKentta, "* Täytä tämä kenttä");
      kaikkiOk -=1;
    } else if (syottoKentta == id && syottoKentta.value.length < 6) {
      naytaHuomautus(syottoKentta, "* Anna vähintään 6 merkkiä");
      kaikkiOk -=1;
    } else if (syottoKentta == sahkoposti && !tarkistaSposti(syottoKentta.value)) {
      naytaHuomautus(syottoKentta, "* Sähköpostiosoiteessa on virhe. (esim. nimi@email.fi)");
      kaikkiOk -=1;
    }
  });

  // Lähetä viesti ----------------------------------------------------------------------------------------

  if (kaikkiOk == 4) {
    window.location.href = "./kirppis.html";
    } 
  })

// Näytä huomautus syöttökentässä, jos kenttä on tyhjä tai virheellisesti täytetty
function naytaHuomautus(syottoKentta, teksti) {
  syottoKentta.value = "";
  syottoKentta.placeholder = teksti;
  syottoKentta.classList.add("huomautus-vari");
}

// Tarkista, onko sähköpostiosoite kirjoitettu oikein ja palauttaa joko true tai false
function tarkistaSposti(sahkoposti) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(sahkoposti);
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
