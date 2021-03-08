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

const list = document.getElementById('countryList')
console.log(list)

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
            const { flag , name, population, region } = country
            // console.log(flag)
            // console.log(name)
            //console.log(region)

            const listItemOne = document.createElement('img')
            //console.log(listItemOne)
            listItemOne.setAttribute('src', flag);
            listItemOne.setAttribute('class', 'flag-image')
            list.appendChild(listItemOne)

            const listItemTwo = document.createElement('li')
            //console.log(listItemTwo)
            listItemTwo.setAttribute('class', countryNamesInColor(region))
            listItemTwo.textContent = name
            list.appendChild(listItemTwo)
            listItemTwo.addEventListener("click", showPopulation)

            const listItemThree = document.createElement('li')
            listItemThree.setAttribute('id', 'populationOfCountry')
            listItemThree.textContent = `This country has a population of ${population} people.`
            list.appendChild(listItemThree)

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


// switch statement maken voor land-namen in kleur
// we hebben de volgende cases
// case 'Africa'  --> returnen naam van land veranderd van kleur = hsl(222, 47%, 55%)  (blauw)
// case 'Americas' --> kleur = hsl(139, 43%, 59%) (groen)
// case 'Asia' --> kleur = hsl(354, 59%, 56%) (rood)
// case 'Europe' --> kleur = hsl(47, 100%, 60%) (geel)
// case 'Oceania' --> kleur = hsl(288, 43%, 53%) (paars)
// default als er een land is zonde region --> hsl(hsl(0, 0%, 0%)) (zwart)

// een functie schrijven met daarin een switch statement
// functie heeft een parameter
// switch parameter is region


function countryNamesInColor(region) {
    console.log('Does it work?')
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

//countryNamesInColor()

