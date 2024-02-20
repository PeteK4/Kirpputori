document.getElementById("luoTunnus").addEventListener("click", function() {
  const elementti = document.querySelector(".lomake");
  const animaatioSuunta = document.querySelector('script[src="./javascript/animaatiot.js"]').getAttribute("id");

  console.log(animaatioSuunta)
  // Näytön leveyden tarkistus
  let loppupiste;
  if (window.innerWidth < 1000) {
    loppupiste = 90;
  } else {
    loppupiste = 250;
  }

  // Valitaan animaation suunta
  if (animaatioSuunta == "ylhaalta>alas") {
    elementti.style.display = "block";
    ylhaaltaAlas(elementti, loppupiste);
  } else if (animaatioSuunta == "alhaalta>ylos") {
    elementti.style.display = "block";
    alhaaltaYlos(elementti);
  }
});

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
  const alkupiste = window.innerHeight;
  elementti.style.top = `${alkupiste}px`;

  // Asetetaan siirtymä ja animaatio
  elementti.style.transition = "top 0.4s";
  setTimeout(() => {
    elementti.style.top = `${loppupiste}px`;  // Siirretään elementti ylös ruudun yläpuolelle
  }, 100);
}
