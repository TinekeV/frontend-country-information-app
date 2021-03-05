// PSEUDO-CODE
// [x] Maak een functie getAllCountries die data kan ophalen => asynchrone functie
// [x] maak GET request naar endpoint https://restcountries.eu/rest/v2/all
// [x] sla response op en zorg dat we de meta-data eraf halen
// [x] sorteer de data die terugkomt van laagste populatie naar hoogste populatie

// [x] onze data is een array met daarin 250 land-objecten
// [x] maak een anker-element waar alle list-items aan toegevoegd kunnen worden (countryList)
// Voor elk element in de array, maak een list item, met daarin:
// een afbeelding van de vlag
// een element voor de naam
// een element voor de populatie
// plaats een eventListener op het list item. Zorg ervoor dat als de gebruiker erop klikt
// en de populatie is zichtbaar, deze onzichtbaar wordt. Als hij onzichtbaar is en er wordt
// op geklikt, moet hij zichtbaar worden.

async function allCountries() {

    try {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
        console.log('ALLE DATA:', countries)

        const { data } = countries

        data.sort((a, b) => {
            return a.population - b.population
        })
        console.log('GESORTEERDE DATA?', data)

        data.map((country) => {
            const { flag , name, population } = country
            console.log(flag)
            console.log(name)

            const list = document.getElementById('countryList')
            console.log(list)

            const listItemOne = document.createElement('img')
            listItemOne.setAttribute('src', flag);
            listItemOne.setAttribute('id', 'flag-image')
            list.appendChild(listItemOne)

            const listItemTwo = document.createElement('li')
            listItemTwo.setAttribute('id', 'nameOfCountry')
            listItemTwo.textContent = name
            list.appendChild(listItemTwo)

            // const listItemThree = document.createElement('li')
            // listItemThree.setAttribute('id', 'populationOfCountry')
            // listItemThree.textContent = population
            // list.appendChild(listItemThree)

        })





    } catch (e) {

    }
}

allCountries()