// PSEUDO-CODE
// [x] Maak een functie getAllCountries die data kan ophalen => asynchrone functie
// [x] maak GET request naar endpoint https://restcountries.eu/rest/v2/all
// [x] sla response op en zorg dat we de meta-data eraf halen
// [x] sorteer de data die terugkomt van laagste populatie naar hoogste populatie

// [x] onze data is een array met daarin 250 land-objecten
// [x] maak een anker-element waar alle list-items aan toegevoegd kunnen worden (countryList)
// [x] Voor elk element in de array, maak een list item, met daarin:
// [x]een afbeelding van de vlag
// [x] een element voor de naam
// [x] een element voor de populatie
// [] plaats een eventListener op het list item. Zorg ervoor dat als de gebruiker erop klikt
// [] en de populatie is zichtbaar, deze onzichtbaar wordt. Als hij onzichtbaar is en er wordt
// [] op geklikt, moet hij zichtbaar worden.

const listContainer = document.getElementById('country-list')
//console.log(listContainer)

async function allCountries() {

    try {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
        //console.log('ALLE DATA:', countries)

        const { data } = countries

        data.sort((a, b) => {
            return a.population - b.population
        })
        //console.log('GESORTEERDE DATA?', data)

        data.map((country) => {
            const { flag , name, population, region } = country

            // list element maken - waar alle informatie in opgeslagen wordt
            const countryList = document.createElement('li')
            listContainer.appendChild(countryList)
            // console.log(countryList)

            const listItemOne = document.createElement('img')
            //console.log(listItemOne)
            listItemOne.setAttribute('src', flag);
            listItemOne.setAttribute('class', 'flag-image')
            countryList.appendChild(listItemOne)

            const listItemTwo = document.createElement('span')
            //console.log(listItemTwo)
            listItemTwo.setAttribute('class', countryNamesInColor(region))
            listItemTwo.textContent = name
            countryList.appendChild(listItemTwo)
            listItemTwo.addEventListener("click", showPopulation)

            const listItemThree = document.createElement('p')
            listItemThree.setAttribute('id', 'populationOfCountry')
            listItemThree.textContent = `population: ${population}`
            countryList.appendChild(listItemThree)

            function showPopulation() {
                const text = document.getElementById('nameOfCountry')
                const displayPopulation = listItemThree.style.display
                if (displayPopulation === 'block') {
                    listItemThree.style.display = 'none'
                }
                else {
                    listItemThree.style.display = 'block'
                }
            }

        })

    } catch (e) {

    }
}

allCountries()



function countryNamesInColor(region) {
    switch (region) {
        case 'Africa':
            return 'red';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'black';
    }
}


