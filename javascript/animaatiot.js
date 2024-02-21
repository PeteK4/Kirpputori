// Animaatiot kirjautumisruutuun
document.getElementById("nappiLuoTunnus").addEventListener("click", function() {
  const elementti = document.querySelector(".lomake");
  const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
  const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");

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
document.getElementById("nappiPeruuta").addEventListener("click", function() {
  const elementti = document.querySelector(".lomake");
  ylaPalkkiTeksti1.style.opacity = "0";
  ylaPalkkiTeksti1.style.display = "block";
  setTimeout(() => {
    ylaPalkkiTeksti1.style.transition = "opacity .3s";
    ylaPalkkiTeksti1.style.opacity = "1";
  }, 100);
  ylaPalkkiTeksti2.style.display = "none";
  alhaaltaYlos(elementti);
});

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
