document.addEventListener("DOMContentLoaded", function() {
  nappiKirjauduKirppis.addEventListener("click", function(event) {
    event.preventDefault();
    const kaikkiKentat = [id, salasana];
    let kaikkiOk = 2;

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
      }
    });

    // Tarkista tunnukset
    if (kaikkiOk == 2) {
      // Tarkistetaan, onko käyttäjätunnus jo tallennettu
      const tallennettuKayttaja = localStorage.getItem(id.value);

      if (!tallennettuKayttaja) {
        naytaHuomautus(id, "Käyttäjätunnusta ei löydy.");
      } else {
        const tallennettuSalasana = JSON.parse(tallennettuKayttaja).salasana;
        if (tallennettuSalasana !== salasana.value) {
          naytaHuomautus(salasana, "Tuntematon salasana");
        } else {
          // Ohjataan käyttäjä eteenpäin
          window.location.href = "./kirppis.html";
        }
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
  [id, salasana].forEach((syottoKentta) => {
    syottoKentta.addEventListener("focus", () => aktiivinen(syottoKentta));
  });
});
