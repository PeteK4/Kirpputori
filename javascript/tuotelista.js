document.addEventListener('DOMContentLoaded', function () {
    // Haetaan tallennetut tuotteet localStoragesta
    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Näytetään tuotteet etusivulla
    const productListElement = document.getElementById('product-list');

    if (productList.length == 0) {
        document.getElementById("valiOtsikko").innerHTML = '<div style="margin-top: 100px"></div>';
        productListElement.innerHTML = '<h1 style="text-align: center;">Kirppiksellä ei ole ilmoituksia.</h1>';
    }

    productList.forEach(function(product) {
        const productElement = createProductElement(product);
        productListElement.appendChild(productElement);
    });
});

// Luo yksittäisen tuotteen HTML-elementin
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productNameElement = document.createElement('h3');
    productNameElement.textContent = product.name;

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = product.description;

    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta: ' + product.price + ' €';

    const kategoriaElement = document.createElement('p');
    kategoriaElement.textContent = 'Kategoria: ' + product.kategoria;

    const tyyppiElement = document.createElement('p');
    tyyppiElement.textContent = 'Tyyppi: ' + product.tyyppi;

    productElement.appendChild(productNameElement);
    productElement.appendChild(productDescriptionElement);
    productElement.appendChild(productPriceElement);
    productElement.appendChild(kategoriaElement);
    productElement.appendChild(tyyppiElement);

    return productElement;
}



