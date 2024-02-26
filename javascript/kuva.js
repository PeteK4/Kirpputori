document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const productName = document.querySelector('.product-name').value;
    const productDescription = document.querySelector('.product-description').value;
    const productPrice = document.querySelector('.product-price').value;
    const imageFile = document.querySelector('.image-upload').files[0];
  
    const productPreviews = document.getElementById('product-previews');
  
    const productPreview = document.createElement('div');
    productPreview.classList.add('product-preview-item'); // Lisää luokka
  
    const imagePreview = document.createElement('img');
    imagePreview.src = URL.createObjectURL(imageFile);
    imagePreview.alt = 'Tuotteen kuva';
    imagePreview.width = 200; // Aseta kuvan leveys pikseleinä
  
  
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details'); // Lisää luokka
  
    const productNameElement = document.createElement('h2');
    productNameElement.textContent = productName;
  
  
    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = productDescription;
   
  
    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta:' + productPrice + ' €';
    
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
     productPreview.appendChild(imagePreview);
     productPreview.appendChild(productDetails);
     productPreview.appendChild(deleteButton); // Lisää poista-nappi
   
     // Lisää tuotteen esikatselu tuotepreview-containeriin
     productPreviews.appendChild(productPreview);
  });

// Etsi Kirjaudu sisään -painike
const kirjauduNappi = document.getElementById("nappiKirjaudu");

// Etsi Luo tunnus -painike
const luoTunnusNappi = document.getElementById("nappiLuoTunnus");

// Etsi logo-container-div
const logoContainer = document.getElementById("logo-container");

// Lisää tapahtumankuuntelija Kirjaudu sisään -napille
kirjauduNappi.addEventListener("click", function() {
    // Piilota logo-container-div asettamalla sen näkyvyys 'none':ksi
    logoContainer.style.display = "none";
});

// Lisää tapahtumankuuntelija Luo tunnus -napille
luoTunnusNappi.addEventListener("click", function() {
    // Piilota logo-container-div asettamalla sen näkyvyys 'none':ksi
    logoContainer.style.display = "none";
});


