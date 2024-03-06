// Funktio, joka näyttää tuotteet valitussa kategoriassa
function naytaTuotteet(kategoria) {
    const tuoteAlue = document.getElementById('kategoriaTuotteet');
    tuoteAlue.innerHTML = ''; // Tyhjennä tuotealue

    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    productList.forEach(tuote => {
        if (tuote.kategoria === kategoria) {
            const tuoteElementti = document.createElement('div');
            tuoteElementti.classList.add('tuote-elementti'); // Lisää CSS-luokka
            
            tuoteElementti.innerHTML = `
                <h3>${tuote.kategoria}</h3>
                <p>Nimi: ${tuote.name}</p>
                <p>Kuvaus: ${tuote.description}</p>
                <p>Hinta: ${tuote.price}</p>
                <p>Tyyppi: ${tuote.tyyppi}</p>
            `;
            tuoteAlue.appendChild(tuoteElementti);
        }
    });
}

// Kuuntele kategorianappien klikkauksia ja näytä tuotteet
document.getElementById('nappiVaatteet').addEventListener('click', function() {
    naytaTuotteet('vaatteet');
});

document.getElementById('nappiKeittio').addEventListener('click', function() {
    naytaTuotteet('keittio');
});

document.getElementById('nappiKirjat').addEventListener('click', function() {
    naytaTuotteet('kirjat');
});

document.getElementById('nappiHuonekalut').addEventListener('click', function() {
    naytaTuotteet('huonekalut');
});

document.getElementById('nappiTietotekniikka').addEventListener('click', function() {
    naytaTuotteet('tietotekniikka');
});

document.getElementById('nappiMuut').addEventListener('click', function() {
    naytaTuotteet('muut');
});

/*
document.getElementById('nappiKirjat').addEventListener('click', function() {
    const tuote = JSON.parse(localStorage.getItem('tuote'));
    if (tuote && tuote.kategoria === 'kirjat') {
        document.getElementById('kategoriaTuotteet').innerHTML = `
            <h3>Kirjat:</h3>
            <p>Nimi: ${tuote.nimi}</p>
            <p>Kuvaus: ${tuote.kuvaus}</p>
            <p>Hinta: ${tuote.hinta}</p>
            <p>Tyyppi: ${tuote.tyyppi}</p>
        `;
    } else {
        alert('Tuotetta ei löytynyt tästä kategoriasta!');
    }
});

document.getElementById('nappiVaatteet').addEventListener('click', function() {
    const tuote = JSON.parse(localStorage.getItem('tuote'));
    if (tuote && tuote.kategoria === 'vaatteet') {
        document.getElementById('kategoriaTuotteet').innerHTML = `
            <h3>Vaatteet:</h3>
            <p>Nimi: ${tuote.nimi}</p>
            <p>Kuvaus: ${tuote.kuvaus}</p>
            <p>Hinta: ${tuote.hinta}</p>
            <p>Tyyppi: ${tuote.tyyppi}</p>
        `;
    } else {
        alert('Tuotetta ei löytynyt tästä kategoriasta!');
    }
});

document.getElementById('nappiKeittio').addEventListener('click', function() {
    const tuote = JSON.parse(localStorage.getItem('tuote'));
    if (tuote && tuote.kategoria === 'keittio') {
        document.getElementById('kategoriaTuotteet').innerHTML = `
            <h3>Keittiö:</h3>
            <p>Nimi: ${tuote.nimi}</p>
            <p>Kuvaus: ${tuote.kuvaus}</p>
            <p>Hinta: ${tuote.hinta}</p>
            <p>Tyyppi: ${tuote.tyyppi}</p>
        `;
    } else {
        alert('Tuotetta ei löytynyt tästä kategoriasta!');
    }
});

document.getElementById('nappiHuonekalut').addEventListener('click', function() {
    const tuote = JSON.parse(localStorage.getItem('product'));
    if (tuote && tuote.kategoria === 'huonekalut') {
        document.getElementById('kategoriaTuotteet').innerHTML = `
            <h3>Huonekalut:</h3>
            <p>Nimi: ${tuote.nimi}</p>
            <p>Kuvaus: ${tuote.kuvaus}</p>
            <p>Hinta: ${tuote.hinta}</p>
            <p>Tyyppi: ${tuote.tyyppi}</p>
        `;
    } else {
        alert('Tuotetta ei löytynyt tästä kategoriasta!');
    }
});

document.getElementById('nappiTietotekniikka').addEventListener('click', function() {
    const tuote = JSON.parse(localStorage.getItem('tuote'));
    if (tuote && tuote.kategoria === 'tietotekniikka') {
        document.getElementById('kategoriaTuotteet').innerHTML = `
            <h3>Tietotekniikka:</h3>
            <p>Nimi: ${tuote.nimi}</p>
            <p>Kuvaus: ${tuote.kuvaus}</p>
            <p>Hinta: ${tuote.hinta}</p>
            <p>Tyyppi: ${tuote.tyyppi}</p>
        `;
    } else {
        alert('Tuotetta ei löytynyt tästä kategoriasta!');
    }
});

document.getElementById('nappiMuut').addEventListener('click', function() {
    const tuote = JSON.parse(localStorage.getItem('tuote'));
    if (tuote && tuote.kategoria === 'muut') {
        document.getElementById('kategoriaTuotteet').innerHTML = `
            <h3>Muut:</h3>
            <p>Nimi: ${tuote.nimi}</p>
            <p>Kuvaus: ${tuote.kuvaus}</p>
            <p>Hinta: ${tuote.hinta}</p>
            <p>Tyyppi: ${tuote.tyyppi}</p>
        `;
    } else {
        alert('Tuotetta ei löytynyt tästä kategoriasta!');
    }
});
*/
