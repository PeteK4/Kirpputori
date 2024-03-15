document.addEventListener("DOMContentLoaded", function() {
    // Etsi tuoteTiedot-div
    const tuoteTiedotDiv = document.getElementById("tuoteTiedot");

    // Lue URL-parametrit
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("name");
    const productDescription = params.get("description");
    const productPrice = params.get("price");
    // jne. jatkaisit muiden parametrien lukemista

    // Luo elementit ja aseta niihin tuotetiedot
    const productNameElement = document.createElement("h3");
    productNameElement.textContent = "Tuotenimi: " + productName;

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = "Kuvaus: " + productDescription;

    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = "Hinta: " + productPrice;

    // Lisää elementit tuoteTiedot-diviin
    tuoteTiedotDiv.appendChild(productNameElement);
    tuoteTiedotDiv.appendChild(productDescriptionElement);
    tuoteTiedotDiv.appendChild(productPriceElement);
    // jne. jatkaisit muiden elementtien lisäämistä
});