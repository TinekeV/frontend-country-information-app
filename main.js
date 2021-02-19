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

const countryInformation = document.getElementById('country');
console.log(countryInformation);


async function searchCountries() {
   inputField.value = "";

   const removeErrorMessage = document.getElementById('error-message')
   removeErrorMessage.textContent = "";

   const lastSearch = document.getElementById('country-container')
   if (lastSearch) {
       countryInformation.removeChild(lastSearch)
   }

   try {
       const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true;`;
       const response = await axios.get(url);
       const responseData = response.data[0];

       const containerCountryInfo = document.createElement('div');
       containerCountryInfo.setAttribute('id', 'country-container')

       const countryFlag = document.createElement('img');
       countryFlag.setAttribute('src', responseData.flag);
       countryFlag.setAttribute('id', 'country-flag')
       containerCountryInfo.appendChild(countryFlag);

       const countryName = document.createElement('h1');
       countryName.setAttribute('id', 'country-name');
       countryName.textContent = responseData.name;
       containerCountryInfo.appendChild(countryName);

       const countryInfo = document.createElement('p');
       countryInfo.setAttribute('id', 'country-info');
       countryInfo.textContent = `${responseData.name} is situated in ${responseData.subregion}. It has a population of ${responseData.population} people`;
       containerCountryInfo.appendChild(countryInfo);

       const countryCity = document.createElement('p');
       countryCity.setAttribute('id', 'country-city');
       countryCity.textContent = `The capital is ${responseData.capital} ` + countryCurrencies(responseData.currencies);
       containerCountryInfo.appendChild(countryCity)

       const languagesPerCountry = document.createElement('p');
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


function countryCurrencies(currencies) {
    let allCurrencies = 'and you can pay with ';

    if (currencies.length === 2) {
        return allCurrencies + `${currencies[0].name}'s and ${currencies[1].name}'s`
    } else {
        return allCurrencies + `${currencies[0].name}`
    }
}

function countryLanguages(languages) {
    let allLanguages = 'They speak ';

    for (let i = 0; i < languages.length; i++) {

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
