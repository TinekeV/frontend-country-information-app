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
       const country = 'België';
       //console.log(country)
       const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true;`;
       //console.log(url)
       const response = await axios.get(url);
       const responseData = response.data[0];
       //console.log('Waar zit mijn data in?', response.data[0])


       // opdracht 4
       //console.log(countryCurrencies(responseData.currencies))

       // opdracht 6
       console.log(countryLanguages(responseData.languages))

       //DOM - data weergeven op de webpagina
       // Lokaliseer de container waar alle info in moet
       const containerCountryInfo = document.getElementById('country-info');
       console.log(containerCountryInfo);

       // [IMAGE: flag]
       const countryFlag = document.createElement('img');
       console.log(countryFlag);
       countryFlag.setAttribute('src', responseData.flag);
       containerCountryInfo.appendChild(countryFlag);

       // [country-name]
       const countryName = document.createElement('h1');
       console.log(countryName);
       countryName.setAttribute('id', 'country-name');
       countryName.textContent = responseData.name;
       containerCountryInfo.appendChild(countryName);

       // [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
       const countryInfo = document.createElement('p');
       console.log(countryInfo);
       countryInfo.setAttribute('id', 'country-info');
       countryInfo.textContent = `${responseData.name} is situated in ${responseData.subregion}. It has a population of ${responseData.population} people.`;
       containerCountryInfo.appendChild(countryInfo);

       // The capital is [city] and you can pay with [currency]'s
       const countryCity = document.createElement('p');
       console.log(countryCity);
       countryCity.setAttribute('id', 'country-city');
       countryCity.textContent = `The capital is ${responseData.capital} ` + countryCurrencies(responseData.currencies);
       containerCountryInfo.appendChild(countryCity)

       // They speak [language], [language] and [language]
       const languagesPerCountry = document.createElement('p');
       console.log(languagesPerCountry);
       languagesPerCountry.setAttribute('id', 'country-languages');
       languagesPerCountry.textContent = countryLanguages(responseData.languages);
       containerCountryInfo.appendChild(languagesPerCountry);

   } catch (e) {
       console.error(e)
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
