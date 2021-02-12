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

const searchButton = document.getElementById('search-button');
//console.log(searchButton)
searchButton.addEventListener('click', searchCountries);

async function searchCountries() {
    const country = 'België';
    //console.log(country)
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true;`;
    //console.log(url)
    const response = await axios.get(url)
    //console.log('Waar zit mijn data in?', response.data[0])

    // opdracht 2
    const countryInfo = `${response.data[0].name} is situated in ${response.data[0].subregion}. It has a population of ${response.data[0].population} people.`
    console.log(countryInfo)

    // opdracht 3
    const countryCity = `The capital is ${response.data[0].capital}`
    console.log(countryCity)
}
// searchCountries();



