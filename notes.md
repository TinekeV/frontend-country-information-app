stappenplan opdracht 1
1. De gebruiker kan de knop zien
 - [x] Zoek knop maken in HTML
 - [x] ID meegeven in HTML aan zoek knop -> om met JS te selecteren

2. de gebruiker gaat klikken
 - [x] knop selecteren (getElementbyID)
 - [x] Event listener & Event handler toevoegen aan button/knop (AddEventListener)
 - [x] AddEventlistener heeft click en async functie

3. wanneer de gebruiker klikt wordt async function aangeroepen
 - [x] variable met country -> "Belgie" (hardcode)
 - [x] url variable samenstellen - https://restcountries.eu/rest/v2/name/{country}?fullText=true
 - [x] axios.get(url)
 - [x] await toevoegen in je async function
 - [x] response -> checken met log, waar zit mijn data in?

How to:
Zoekveld leeg na invullen tekst =
````javascript
    inputField.value = "";
````


