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
      const tallennettuKayttaja = localStorage.getItem(id.value);

      if (!tallennettuKayttaja) {
        naytaHuomautus(id, "Antamaasi käyttäjätunnusta ei löydy.");
      } else {
        const tallennettuSalasana = JSON.parse(tallennettuKayttaja).salasana;
        if (tallennettuSalasana !== salasana.value) {
          naytaHuomautus(salasana, "Salasana ei täsmää käyttäjätunnuksen kanssa.");
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

// JavaScript: Kirjaudu ulos -nappi
document.getElementById('nappiKirjauduUlos').addEventListener('click', function() {
  // Siirry etusivulle (index.html)
  window.location.href = 'index.html';
});