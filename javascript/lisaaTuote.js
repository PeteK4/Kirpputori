// Kun sivu latautuu, tarkista, onko tallennettuja tuotteita localStoragesta ja näytä ne
document.addEventListener('DOMContentLoaded', function () {
    const productList = JSON.parse(localStorage.getItem('productList')) || [];
    const currentUser = localStorage.getItem('kayttajaTunnus')
    productList.forEach(product => {
        if (product.addedBy === currentUser) {
            addProductToPreview(product);
        }
    });
});

// Lisää tapahtumankäsittelijä lomakkeen lähettämiselle
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.querySelector('.product-name').value;
    const productDescription = document.querySelector('.product-description').value;
    const productPrice = document.querySelector('.product-price').value;
    const kategoriaTieto = document.querySelector('.kategoria');
    const tyyppi = document.querySelector('.tyyppi');

    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        kategoria: kategoriaTieto.value,
        tyyppi: tyyppi.value,
        addedBy: localStorage.getItem("kayttajaTunnus")
    };

    // Hae tai alusta tuotelista localStoragesta
    let productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Lisää uusi tuote tuotelistaan
    productList.push(product);

    // Tallenna päivitetty tuotelista localStorageen
    localStorage.setItem('productList', JSON.stringify(productList));

    // Lisää tuote esikatseluun
    addProductToPreview(product);

    // Tyhjennä lomake seuraavaa syöttöä varten
    document.getElementById('product-form').reset();
});

// Lisää yksittäinen tuote esikatseluun
function addProductToPreview(product) {
    const productPreviews = document.getElementById('product-previews');

    const productPreview = document.createElement('div');
    productPreview.classList.add('product-preview-item');

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productNameElement = document.createElement('h3');
    productNameElement.textContent = product.name;
    productNameElement.id = 'tuotteenNimi'

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = product.description;

    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta: ' + product.price + ' €';

    const kategoriaTietoElement = document.createElement('p');
    kategoriaTietoElement.textContent = 'Kategoria: ' + product.kategoria;

    const tyyppiElement = document.createElement('p');
    tyyppiElement.textContent = 'Tyyppi: ' + product.tyyppi;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Poista';
    deleteButton.classList.add('deleteButton');
    deleteButton.type = 'button';

    deleteButton.addEventListener('click', function() {
    const currentUser = localStorage.getItem("kayttajaTunnus");
    const addedByUser = product.addedBy;

    if (currentUser === addedByUser) {
        if (confirm("Vahvista tuotteen poisto.")) {
        // Käyttäjä voi poistaa oman lisäämänsä tuotteen
        productPreview.remove();
        // Poista tuote myös localStoragesta
        removeProductFromLocalStorage(product);
    } else {
        alert('Sinulla ei ole oikeuksia poistaa tätä tuotetta.');
    }
    }});

    productDetails.appendChild(productNameElement);
    productDetails.appendChild(productDescriptionElement);
    productDetails.appendChild(productPriceElement);
    productDetails.appendChild(kategoriaTietoElement);
    productDetails.appendChild(tyyppiElement);

    productPreview.appendChild(productDetails);
    productPreview.appendChild(deleteButton);

    productPreviews.appendChild(productPreview);
}

// Poista tuote localStoragesta
function removeProductFromLocalStorage(productToRemove) {
    let productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Etsi tuote listasta ja poista se
    const updatedProductList = productList.filter(product => {
        return product.name !== productToRemove.name || 
               product.description !== productToRemove.description ||
               product.price !== productToRemove.price ||
               product.kategoria !== productToRemove.kategoria ||
               product.tyyppi !== productToRemove.tyyppi;
    });

    // Päivitä tuotelista localStorageen
    localStorage.setItem('productList', JSON.stringify(updatedProductList));
}
