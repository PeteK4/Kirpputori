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

/// Haun suorittaminen
document.getElementById('hakunappi').addEventListener('click', function(event) {
    event.preventDefault();
    suoritaHaku();
});

function suoritaHaku() {
    // Haetaan hakusana
    let hakusana = document.getElementById('hakukentta').value.toLowerCase();
    
    // Haetaan tuotteet hakusanan perusteella
    let loytyneetTuotteet = etsiTuotteet(hakusana);

    // Näytetään hakutulokset
    naytaHakutulokset(loytyneetTuotteet);
}

function etsiTuotteet(hakusana) {
    // Käytetään tallennettuja tuotteita localStoragesta
    let tallennetutTuotteet = JSON.parse(localStorage.getItem('productList')) || [];
    let loydetytTuotteet = [];

    // Käydään läpi jokainen tuote
    tallennetutTuotteet.forEach(function(tuote) {
        // Tarkistetaan, vastaako tuotteen nimi, kuvaus, hinta tai kategoria hakusanaa
        if (tuote.name.toLowerCase().includes(hakusana) || tuote.description.toLowerCase().includes(hakusana) || tuote.price.toString().includes(hakusana) || tuote.kategoria.toLowerCase().includes(hakusana)) {
            loydetytTuotteet.push(tuote);
        }
    });

    // Palautetaan löydetyt tuotteet
    return loydetytTuotteet;
}

// Hakutulosten näyttäminen HTML:ssä
function naytaHakutulokset(tuotteet) {
    var hakutulosteElementti = document.getElementById('hakutulokset');
    hakutulosteElementti.innerHTML = ''; // Tyhjennetään aiemmat hakutulokset

    // Lisätään jokainen löydetty tuote hakutuloksiin
    tuotteet.forEach(function(tuote) {
        var tuoteElementti = document.createElement('div');
        tuoteElementti.textContent = 'Nimi: ' + tuote.name + ', Kuvaus: ' + tuote.description + ', Hinta: ' + tuote.price + ', Kategoria: ' + tuote.kategoria;
        hakutulosteElementti.appendChild(tuoteElementti);
    });
}
