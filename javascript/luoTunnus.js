document.addEventListener("DOMContentLoaded", function() {
  nappiLuoUusiTunnus.addEventListener("click", function(event) {
    event.preventDefault();
    const kaikkiKentat = [id, salasana, nimi, sahkoposti];
    let kaikkiOk = 4;

    // Tarkista kentät 
    kaikkiKentat.forEach((syottoKentta) => {
      if (syottoKentta.value == "") {
        if (syottoKentta.placeholder == " * Täytä tämä kenttä" || syottoKentta.value == "") {
          venyta(syottoKentta);
        }
        naytaHuomautus(syottoKentta, " * Täytä tämä kenttä");
        kaikkiOk -= 1;
      } else if (syottoKentta == id && syottoKentta.value.length < 5) {
        naytaHuomautus(syottoKentta, "Syötä vähintään 5 merkkiä");
        venyta(syottoKentta);
        kaikkiOk -= 1;
      } else if (syottoKentta == salasana && !tarkistaSalasana(syottoKentta.value)) {
        naytaHuomautus(syottoKentta, "Syötä vähintään 5 merkkiä, 1 iso kirjain, 1 numero, 1 erikoismerkki");
        venyta(syottoKentta);
        kaikkiOk -= 1;
      } else if (syottoKentta == sahkoposti && !tarkistaSposti(syottoKentta.value)) {
        naytaHuomautus(syottoKentta, "Sähköpostiosoitteen tulee olla muotoa: nimi@email.fi");
        venyta(syottoKentta);
        kaikkiOk -= 1;
      }
    });

// Tallennus localStorageen
    if (kaikkiOk == 4) {
      // Tarkistetaan, onko käyttäjätunnus jo tallennettu
      const tallennettuKayttaja = localStorage.getItem(id.value);

      if (tallennettuKayttaja) {
        naytaHuomautus(id, "Saman niminen käyttäjätunnus on jo olemassa.");
      } else {
        // Luodaan käyttäjätunnus objekti
        const kayttaja = {
          id: id.value,
          salasana: salasana.value,
          nimi: nimi.value,
          sahkoposti: sahkoposti.value
        };

        // Tallennetaan käyttäjätunnus localStorageen
        localStorage.setItem(id.value, JSON.stringify(kayttaja));

        // Ohjataan käyttäjä eteenpäin
        window.location.href = "./kirppis.html";
      }
    }
  });

// Funktio, joka tarkistaa salasanan vaatimukset
    function tarkistaSalasana(salasana) {
    const salasanaRegex = /^(?=.*[A-Z]).{5,}$/;
    return salasanaRegex.test(salasana);
    }

// Funktio, joka tarkistaa sähköpostiosoitteen muodon
  function tarkistaSposti(sposti) {
    const spostiRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return spostiRegex.test(sposti);
  }

  // Näytä huomautus syöttökentässä, jos kenttä on tyhjä tai virheellisesti täytetty
  function naytaHuomautus(syottoKentta, teksti) {
    syottoKentta.value = "";
    syottoKentta.placeholder = teksti;
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

  function venyta(syottoKentta) {
    syottoKentta.style.transition = "transform 0.1s";
    syottoKentta.style.transform = "scaleX(1.06)";
    setTimeout(() => {
      syottoKentta.style.transform = "scaleX(1)";
    }, 100);
  }
});