// schrijf een functie die alle landen ophaalt en sorteert op populatie van laag naar hoog

// [ ] schrijf een functie om alle landen op te halen (en log deze in de console)
// [ ] als het gelukt is om alle landen op te halen, tweak de functie zodat de landen gesorteerd worden op basis van populatie laag naar hoog
// [ ] maak een GET-request

async function allCountries() {

    try {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
        console.log('ALLE DATA:', countries)

        const { data } = countries
        console.log('WAT ZIEN WE?', data)

        data.sort((a, b) => {
            return a.population - b.population
        })
        console.log(data)


        for (let i = 0; i < data.length; i++) {
            const countryName = data[i].name
            console.log(countryName)
            const countryPopulation = data[i].population
            console.log(countryPopulation)
        }

    } catch (e) {

    }
}

allCountries()