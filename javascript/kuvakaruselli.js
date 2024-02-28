const kuvat = [];
let kuvaNro = 0;

for (let i = 1; i <= 5; i++) {
  kuvat.push(`./kuvat/etusivu${i}.webp`);
}

const etusivuKuva = document.getElementById("etusivuKuva");

function kuvaKaruselli() {
  kuvaNro = (kuvaNro + 1) % kuvat.length;
  const kuvaPolku = kuvat[kuvaNro];
  const uusiKuva = new Image();

  uusiKuva.src = kuvaPolku;
  uusiKuva.style.position = "absolute";
  uusiKuva.style.top = etusivuKuva.offsetTop + "px";
  uusiKuva.style.left = etusivuKuva.offsetLeft + "px";
  uusiKuva.style.opacity = "0";
  uusiKuva.style.borderRadius = "40px";
  uusiKuva.style.maxWidth = "100%"

  etusivuKuva.parentNode.appendChild(uusiKuva);
  uusiKuva.offsetHeight; 
  uusiKuva.style.transition = "opacity 1s ease-in-out"; 
  uusiKuva.style.opacity = "1"; 
  
  setTimeout(() => {
    etusivuKuva.src = kuvaPolku;
    uusiKuva.parentNode.removeChild(uusiKuva);
  }, 1000);
}

setInterval(kuvaKaruselli, 5000);