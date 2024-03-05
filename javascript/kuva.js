document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const productName = document.querySelector('.product-name').value;
    const productDescription = document.querySelector('.product-description').value;
    const productPrice = document.querySelector('.product-price').value;
    //const imageFile = document.querySelector('.image-upload').files[0];
    const kategoriaTieto = document.querySelector('.kategoria');
  
    const productPreviews = document.getElementById('product-previews');
  
    const productPreview = document.createElement('div');
    productPreview.classList.add('product-preview-item'); // Lisää luokka
  
    /*const imagePreview = document.createElement('img');
    imagePreview.src = URL.createObjectURL(imageFile);
    imagePreview.alt = 'Tuotteen kuva';
    imagePreview.width = 200; // Aseta kuvan leveys pikseleinä*/
  
  
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details'); // Lisää luokka
  
    const productNameElement = document.createElement('h2');
    productNameElement.textContent = productName;
  
  
    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = productDescription;
   
  
    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta:' + productPrice + ' €';

    const kategoriaTietoElement = document.createElement('p');
    kategoriaTietoElement.textContent = 'Kategoria: ' + kategoriaTieto.value;
    
    // Luo tuotteen objekti
    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        kategoria: kategoriaTieto.value
    };

    // Tarkista, onko tuotelista jo tallennettu localStorageen
    let productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Lisää uusi tuote tuotelistaan
    productList.push(product);

    // Tallenna päivitetty tuotelista localStorageen
    localStorage.setItem('productList', JSON.stringify(productList));

    // Tyhjennä lomake seuraavaa syöttöä varten
    document.getElementById('product-form').reset();
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Poista';
    deleteButton.classList.add('delete-button');
    deleteButton.type = 'button'; // Estää lähettämästä lomaketta
  
    deleteButton.addEventListener('click', function() {
        // Tässä voit lisätä koodin tuotteen poistamiseksi
        productPreview.remove(); // Poista koko tuotteen esikatselu
    });
  
     // Lisää elementit productDetails-diviin
     productDetails.appendChild(productNameElement);
     productDetails.appendChild(productDescriptionElement);
     productDetails.appendChild(productPriceElement);
   
     // Lisää kuva ja tiedot productPreview-diviin
     //productPreview.appendChild(imagePreview);
     productPreview.appendChild(productDetails);
     productPreview.appendChild(deleteButton); // Lisää poista-nappi
     // Lisätään kategoriatieto productDetails-diviin
     productDetails.appendChild(kategoriaTietoElement);
   
     // Lisää tuotteen esikatselu tuotepreview-containeriin
     productPreviews.appendChild(productPreview);

    document.getElementById('product-form').reset();
});


/*
// Otetaan kiinni painike nappiIlmoita
const nappiIlmoita = document.getElementById('nappiIlmoita');

// Lisätään tapahtumankäsittelijä painikkeeseen
nappiIlmoita.addEventListener('click', function() {
    // Ohjataan käyttäjä kirppis.html-sivulle
    console.log("Nappi Ilmoita on painettu.");
    window.location.href = 'kirppis.html';
});

// Otetaan kiinni painike tuoteHaku
const tuoteHaku = document.getElementById('tuoteHaku');

// Lisätään tapahtumankäsittelijä painikkeeseen
tuoteHaku.addEventListener('click', function() {
    // Ohjataan käyttäjä tuotehaku.html-sivulle
    console.log("Nappi Etsi on painettu.");
    window.location.href = 'tuotehaku.html';
});
*/
