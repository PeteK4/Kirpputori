document.addEventListener('DOMContentLoaded', function () {
    // Haetaan tallennetut tuotteet localStoragesta
    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Näytetään tuotteet etusivulla
    const productListElement = document.getElementById('product-list');

    productList.forEach(function(product) {
        const productElement = createProductElement(product);
        productListElement.appendChild(productElement);
    });
});

// Luo yksittäisen tuotteen HTML-elementin
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productNameElement = document.createElement('h2');
    productNameElement.textContent = product.name;

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = product.description;

    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta: ' + product.price + ' €';

    
    productElement.appendChild(productNameElement);
    productElement.appendChild(productDescriptionElement);
    productElement.appendChild(productPriceElement);

    return productElement;
}



