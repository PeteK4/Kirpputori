nappiLuoUusiTunnus.addEventListener("click", function(event) {
  event.preventDefault();
  const kaikkiKentat = [id, salasana, nimi, sahkoposti];
  let kaikkiOk = 4;


  // Vaihda lomakkeen otsikko
  lomakeOtsikko.textContent = "Luo uusi käyttäjätunnus";
  nappiLuoUusiTunnus.textContent ="Luo tunnus";

  
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

document.getElementById("nappiKirjaudu").addEventListener("click", function() {
  const elementti = document.querySelector(".lomake");
  const lomakeOtsikko = document.querySelector(".lomakeOtsikko");
  const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
  const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");

  // Vaihda lomakkeen otsikko
  lomakeOtsikko.textContent = "Kirjaudu MoniToriin";
  nappiLuoUusiTunnus.textContent ="Kirjaudu";

  // Yläpalkin feidaukset
  ylaPalkkiTeksti1.style.opacity = "1";
  ylaPalkkiTeksti1.style.transition = "opacity .8s";
  setTimeout(() => {
      ylaPalkkiTeksti1.style.opacity = "0";
  }, 100);

  ylaPalkkiTeksti2.style.opacity = "0";
  ylaPalkkiTeksti2.style.display = "block";
  setTimeout(() => {
      ylaPalkkiTeksti2.style.transition = "opacity .8s";
      ylaPalkkiTeksti2.style.opacity = "1";
      ylaPalkkiTeksti1.style.display = "none";
  }, 100);

  // Näytön leveyden tarkistus, jonka mukaan määritetään elementin loppusijainti näytöllä
  let loppupiste;
  if (window.innerWidth < 1000) {
      loppupiste = 110;
  } else {
      loppupiste = 260;
  }

  // Elementti alas
  elementti.style.display = "block";
  ylhaaltaAlas(elementti, loppupiste);

  // Tässä vaiheessa voit suorittaa kirjautumistoimet
  //window.location.href = "./kirppis.html";
});