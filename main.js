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

let country = '';

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchCountries);

const inputField = document.getElementById('search-field')
inputField.addEventListener('keyup', getCountry)

function getCountry(e) {
    country = e.target.value;
    if (e.keyCode === 13) {
        return searchCountries()
    }
}

// Lokaliseer de container waar alle info in moet
const countryInformation = document.getElementById('country');
console.log(countryInformation);


// // search new item + remove last searched item
// const lastSearch = document.getElementById('country-info')
// //console.log(lastSearch)
// if (lastSearch.parentNode) {
//     lastSearch.parentNode.removeChild(lastSearch)
// }


async function searchCountries() {
    // zoekveld leeg na invullen
    inputField.value = "";

   //error message
   // const errorMessage = document.createElement('p')
   // errorMessage.setAttribute('id', 'error')
   // countryInformation.appendChild(errorMessage)
   const removeErrorMessage = document.getElementById('error-message')
   removeErrorMessage.textContent = "";

   // zoekterm verdwijnt
   const lastSearch = document.getElementById('country-container')
   if (lastSearch) {
       countryInformation.removeChild(lastSearch)
   }

   try {
       //const country = 'Belgie';
       const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true;`;
       const response = await axios.get(url);
       const responseData = response.data[0];
       //console.log('Waar zit mijn data in?', response.data[0])

       //DOM - data weergeven op de webpagina
       // Lokaliseer container waar alle informatie in komt
       const containerCountryInfo = document.createElement('div');
       containerCountryInfo.setAttribute('id', 'country-container')
       console.log(containerCountryInfo);

       // [IMAGE: flag]
       const countryFlag = document.createElement('img');
       //console.log(countryFlag);
       countryFlag.setAttribute('src', responseData.flag);
       countryFlag.setAttribute('id', 'country-flag')
       containerCountryInfo.appendChild(countryFlag);

       // [country-name]
       const countryName = document.createElement('h1');
       //console.log(countryName);
       countryName.setAttribute('id', 'country-name');
       countryName.textContent = responseData.name;
       containerCountryInfo.appendChild(countryName);

       // [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
       const countryInfo = document.createElement('p');
       //console.log(countryInfo);
       countryInfo.setAttribute('id', 'country-info');
       countryInfo.textContent = `${responseData.name} is situated in ${responseData.subregion}. It has a population of ${responseData.population} people`;
       containerCountryInfo.appendChild(countryInfo);

       // The capital is [city] and you can pay with [currency]'s
       const countryCity = document.createElement('p');
       //console.log(countryCity);
       countryCity.setAttribute('id', 'country-city');
       countryCity.textContent = `The capital is ${responseData.capital} ` + countryCurrencies(responseData.currencies);
       containerCountryInfo.appendChild(countryCity)

       // They speak [language], [language] and [language]
       const languagesPerCountry = document.createElement('p');
       //console.log(languagesPerCountry);
       languagesPerCountry.setAttribute('id', 'country-languages');
       languagesPerCountry.textContent = countryLanguages(responseData.languages);
       containerCountryInfo.appendChild(languagesPerCountry);

       countryInformation.appendChild(containerCountryInfo);

   } catch (e) {
       console.error(e)
       const errorMessage = document.getElementById('error-message')
       errorMessage.textContent = `${country} does not exist. Please try again!`
   }
}

//searchCountries();



// opdracht 4
function countryCurrencies(currencies) {
    let allCurrencies = 'and you can pay with ';
    //console.log('Wat komt hier uit?', currencies.length)
    //console.log('één currency geselecteerd?', currencies[0].name)

    if (currencies.length === 2) {
        return allCurrencies + `${currencies[0].name}'s and ${currencies[1].name}'s`
        //console.log(allCurrencies + `${currencies[0].name}'s and ${currencies[1].name}'s`)
    } else {
        return allCurrencies + `${currencies[0].name}`
        //console.log(allCurrencies + `${currencies[0].name}`)
    }
}

// opdracht 6
function countryLanguages(languages) {
    let allLanguages = 'They speak ';

    for (let i = 0; i < languages.length; i++) {
        //console.log('Wat is?', i, languages.length) // in dit geval 3 talen
        if (languages.length === 1) {
            return allLanguages = allLanguages + languages[i].name;
        }
        if (i === languages.length - 1) {
            return allLanguages = allLanguages + ` and ${languages[i].name}`;
        }
        if (languages === 2 || i === languages.length - 2) {
            allLanguages = allLanguages + languages[i].name;
        } else {
            allLanguages = allLanguages + `${languages[i].name}, `;
        }
    }
    return allLanguages;
}
