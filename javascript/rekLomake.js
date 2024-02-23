document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nappiLuoTunnus").addEventListener("click", function() {
    const elementti = document.querySelector(".lomake");
    const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
    const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");
    
    const vihjeTekstit = [
      "Anna vähintään 5 merkkiä", 
      "Anna vähintään 5 merkkiä (1 iso kirjain, 1 numero, 1 erikoismerkki)",
      "Etunimi Sukunimi", 
      "nimi@email.fi"
    ];
    
    for (let i = 1; i <= 4; i++) {
      const kentat = document.getElementById(`kentta${i}`).querySelector("input");
      kentat.setAttribute("placeholder", vihjeTekstit[i - 1]);
    }
    
    ylaPalkkiTeksti2.innerText = "Hei, tervetuloa MoniTorin asiakkaaksi!"
    document.getElementById("lomakeOtsikko").innerText = "Luo uusi käyttäjätunnus"
    document.getElementById("kentta3").style.display ="flex";
    document.getElementById("kentta4").style.display ="flex";
    document.getElementById("kentta5").style.display ="flex";
    document.getElementById("kentta6").style.display ="none";

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
  });

  // Tapahtumankäsittelijä nappiKirjaudu-painikkeelle
  document.getElementById("nappiKirjaudu").addEventListener("click", function() {
    const elementti = document.querySelector(".lomake");
    const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
    const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");
    ylaPalkkiTeksti2.innerText = "Hei, tervetuloa MoniToriin!"

    document.getElementById("lomakeOtsikko").innerText = "Kirjaudu kirppikselle"
    document.getElementById("kentta3").style.display ="none";
    document.getElementById("kentta4").style.display ="none";
    document.getElementById("kentta5").style.display ="none";
    document.getElementById("kentta6").style.display ="flex";

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
  });

  // Elementti ylös
  document.getElementById("nappiPeruuta").addEventListener("click", peruuta);
  document.getElementById("nappiPeruutaKirjautuminen").addEventListener("click", peruuta);

  function peruuta() {
    const kaikkiKentat = [document.getElementById("id"), document.getElementById("salasana"), document.getElementById("nimi"), document.getElementById("sahkoposti")];
    kaikkiKentat.forEach((syottoKentta) => {
      syottoKentta.placeholder = "";
      syottoKentta.value = "";
    });

    const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
    const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");

    ylaPalkkiTeksti1.style.opacity = "0";
    ylaPalkkiTeksti1.style.display = "block";
    setTimeout(() => {
      ylaPalkkiTeksti1.style.transition = "opacity .3s";
      ylaPalkkiTeksti1.style.opacity = "1";
    }, 100);
    ylaPalkkiTeksti2.style.display = "none";

    const elementti = document.querySelector(".lomake");
    alhaaltaYlos(elementti);
  }

  // Siirrä elementti ylhäältä alas
  function ylhaaltaAlas(elementti, loppupiste) {
    const alkupiste = -elementti.offsetHeight;
    elementti.style.top = `${alkupiste}px`;
    elementti.style.transition = "top 0.4s";

    setTimeout(() => {
      elementti.style.top = `${loppupiste}px`;
    }, 100);
  }

  // Siirrä elementti alhaalta ylös
  function alhaaltaYlos(elementti) {
    const loppupiste = -elementti.offsetHeight;
    const alkupiste = window.innerHeight / 1.5;
    elementti.style.top = `${alkupiste}px`;
    elementti.style.transition = "top 0.4s";

    setTimeout(() => {
      elementti.style.top = `${loppupiste}px`;
    }, 100);
  }
});