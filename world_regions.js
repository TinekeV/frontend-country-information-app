const listContainer = document.getElementById('country-list')

async function allCountries() {

    try {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')

        const { data } = countries

        data.sort((a, b) => {
            return a.population - b.population
        })

        data.map((country) => {
            const { flag , name, population, region } = country

            const countryList = document.createElement('li')
            listContainer.appendChild(countryList)

            const listItemOne = document.createElement('img')
            listItemOne.setAttribute('src', flag);
            listItemOne.setAttribute('class', 'flag-image')
            countryList.appendChild(listItemOne)

            const listItemTwo = document.createElement('span')
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


