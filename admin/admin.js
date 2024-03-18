document.addEventListener('DOMContentLoaded', function () {
    // Haetaan tallennetut tuotteet localStoragesta
    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Näytetään tuotteet järjestelmänvalvojalle (admin kansiossa admin.js)
    const productListElement = document.getElementById('product-list');

    productList.forEach(function(product) {
        const productElement = createProductElement(product);
        productListElement.appendChild(productElement);
    });
});

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

    // Lisätään deleteButton jokaiselle tuotteelle
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Poista';
    deleteButton.classList.add('deleteButton');
    deleteButton.type = 'button';

    deleteButton.addEventListener('click', function() {
        if (confirm("Vahvista tuotteen poisto.")) {
            // Poista tuote esikatselusta ja localStoragesta
            productElement.remove();
            removeProductFromLocalStorage(product);
        }
    });

    productElement.appendChild(productNameElement);
    productElement.appendChild(productDescriptionElement);
    productElement.appendChild(productPriceElement);
    productElement.appendChild(kategoriaElement);
    productElement.appendChild(tyyppiElement);

    // Asetetaan deleteButton oikealle puolelle
    const deleteButtonContainer = document.createElement('div');
    deleteButtonContainer.classList.add('deleteButtonContainer');
    deleteButtonContainer.appendChild(deleteButton);
    productElement.appendChild(deleteButtonContainer);
    
    return productElement;
}
