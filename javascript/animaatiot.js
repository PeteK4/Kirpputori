// Animaatiot kirjautumisruutuun
document.getElementById("luoTunnus").addEventListener("click", function() {
  const elementti = document.querySelector(".lomake");
  const animaatioSuunta = document.querySelector('script[src="./javascript/animaatiot.js"]').getAttribute("id");

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
