document.addEventListener("DOMContentLoaded", function() {
  nappiLuoUusiTunnus.addEventListener("click", function(event) {
    event.preventDefault();
    const kaikkiKentat = [id, salasana, nimi, sahkoposti];
    let kaikkiOk = 4;

    document.getElementById("kentta5").style.display = "flex";
    document.getElementById("kentta6").style.display = "none";

    // Tarkista kentät 
    kaikkiKentat.forEach((syottoKentta) => {
      if (syottoKentta.value == "") {
        if (syottoKentta.placeholder == " * Täytä tämä kenttä" || syottoKentta.value == "") {
          syottoKentta.style.transition = "transform 0.1s";
          syottoKentta.style.transform = "scaleX(1.06)";
          setTimeout(() => {
            syottoKentta.style.transform = "scaleX(1)";
          }, 100);
        }
        naytaHuomautus(syottoKentta, " * Täytä tämä kenttä");
        kaikkiOk -= 1;
      } else if (syottoKentta == id && syottoKentta.value.length < 5) {
        naytaHuomautus(syottoKentta, "Syötä vähintään 5 merkkiä");
        kaikkiOk -= 1;
      } else if (syottoKentta == salasana && !tarkistaSalasana(syottoKentta.value)) {
        naytaHuomautus(syottoKentta, "Syötä vähintään 5 merkkiä, 1 iso kirjain, 1 numero, 1 erikoismerkki");
        kaikkiOk -= 1;
      } else if (syottoKentta == sahkoposti && !tarkistaSposti(syottoKentta.value)) {
        naytaHuomautus(syottoKentta, "Sähköpostiosoitteen tulee olla muotoa: nimi@email.fi");
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
        // Luodaan käyttäjätunnus-objekti
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
});