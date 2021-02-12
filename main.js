// stappenplan opdracht 1
// 1. De gebruiker kan de knop zien
// - [x] Zoek knop maken in HTML
// - [x] ID meegeven in HTML aan zoek knop -> om met JS te selecteren

// 2. de gebruiker gaat klikken
// - [x] knop selecteren (getElementbyID)
// - [x] Event listener & Event handler toevoegen aan button/knop (AddEventListener)
// - [x] AddEventlistener heeft click en async functie

// 3. wanneer de gebruiker klikt wordt async function aangeroepen
// - [x] variable met country -> "Belgie" (hardcode)
// - [x] url variable samenstellen - https://restcountries.eu/rest/v2/name/{country}?fullText=true
// - [x] axios.get(url)
// - [x] await toevoegen in je async function
// - [x] response -> checken met log, waar zit mijn data in?

// opdracht 1

const searchButton = document.getElementById('search-button');
//console.log(searchButton)
searchButton.addEventListener('click', searchCountries);

async function searchCountries() {
   try {
       const country = 'Cuba';
       //console.log(country)
       const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true;`;
       //console.log(url)
       const response = await axios.get(url);
       const responseData = response.data[0];
       console.log('Waar zit mijn data in?', response.data[0])

       // opdracht 2
       const countryInfo = `${responseData.name} is situated in ${responseData.subregion}. It has a population of ${responseData.population} people.`;
       console.log(countryInfo);

       // opdracht 3
       const countryCity = `The capital is ${responseData.capital}`;
       console.log(countryCity);

       // opdracht 4
       // returnen / loggen / aanroepen van functie currencies
       countryCurrencies(responseData.currencies);


   } catch (e) {
       console.error(e)
   }
}

//searchCountries();


// opdracht 4
function countryCurrencies(currencies) {
    let allCurrencies = '';

    for (const currency of currencies) {
        //console.log('Is dit valuta naam?', currency.name)
        if (currencies.length === 1) {
            const oneValuta = currency.name
            allCurrencies += oneValuta
            //console.log(`and you can pay with ${allCurrencies}'s`)
        }
        if (currencies.length === 2) {
            const twoValuta = currency.name
            allCurrencies += twoValuta;
            console.log(`and you can pay with ${allCurrencies}'s`)
        }

    }
}

