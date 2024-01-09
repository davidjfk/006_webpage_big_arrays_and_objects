const homepageButtons = document.querySelector("#listOfAssignments");
const switchBetweenWincAssignments = (wincAssignment) => {
    // scope: static html classes.
    deleteAllChildNodes(homepageButtons);   
    homepageButtons.classList.remove('wincCountryList');
    homepageButtons.classList.remove('wincCapricornWomen');
    homepageButtons.classList.remove('wincCreditCardsExpiring');
    removeCreditCardExpiryTable()
    homepageButtons.classList.remove('wincMostPeople');
    homepageButtons.classList.remove('wincAverageAge');
    homepageButtons.classList.remove('wincMatchMaking');
    removeMatchingZodiacCandidatesFromWebPage();
    homepageButtons.classList.add(wincAssignment);
}


const buttonCountryList = document.querySelector(".countryList");
const handleClickEvent1 = () => {
    switchBetweenWincAssignments('wincCountryList')
    showCountryListOnWebpage(countrylist)   
}
buttonCountryList.addEventListener("click", handleClickEvent1)




const buttonCapricornWomen = document.querySelector(".capricornWomen");
const handleClickEvent2 = () => {
    switchBetweenWincAssignments("wincCapricornWomen")
    showCapricornWomenOnWebpage(capricornWomen);
}
buttonCapricornWomen.addEventListener("click", handleClickEvent2)




const buttonExpiringCreditCards = document.querySelector(".expiringCreditCards");
const handleClickEvent3 = () => {
    switchBetweenWincAssignments('wincCreditCardsExpiring')
    showCreditCardsTable(arrayWithClientObjectsWithSortedExpiringCreditcards) 
    // showCreditCardsOnWebpage(arrayWithClientObjectsWithSortedExpiringCreditcards);
}
buttonExpiringCreditCards.addEventListener("click", handleClickEvent3)




const buttonMostPeoplePerCountry = document.querySelector(".mostPeoplePerCountry");
const handleClickEvent4 = () => {
    switchBetweenWincAssignments('wincMostPeople')
    showPopulationPerCountry(arrayWithCountryObjectsWithPopulation);
}
buttonMostPeoplePerCountry.addEventListener("click", handleClickEvent4)




const buttonAverageAgePerCountry = document.querySelector(".averageAgePerCountry");

const handleClickEvent5 = () => {
    switchBetweenWincAssignments('wincAverageAge')
    showAverageAgePerCountry(averageAgesOfCountries);
}
buttonAverageAgePerCountry.addEventListener("click", handleClickEvent5)




const buttonMatchSeeking = document.querySelector(".matchSeeking");
const handleClickEvent6 = () => {
    switchBetweenWincAssignments('wincMatchMaking')
    showAllPeopleOnWebpage(arrOfSortedAdultObjectsByFirstName);
}
buttonMatchSeeking.addEventListener("click", handleClickEvent6)


const buttonResetWebpage = document.querySelector(".resetWebpage");
const handleClickEvent7 = () => location.reload();
buttonResetWebpage.addEventListener("click", handleClickEvent7)


const removeMatchingZodiacCandidatesFromWebPage = () => {
    // scope: dynamic html classes, injected by javascript on the webpage.
    const matchMakingResult = document.querySelector(".wincMatchMakingResult")
    matchMakingResult ? matchMakingResult.remove() : matchMakingResult;

    const matchMakingResultTitle = document.querySelector(".sectionWithMatchingCandidates")
    matchMakingResultTitle ? matchMakingResultTitle.remove() : matchMakingResultTitle;
}

const removeCreditCardExpiryTable = () => {
    // scope: dynamic html classes, injected by javascript on the webpage.
    const creditCardExpiryTable = document.querySelector(".wincCreditCardsExpiry")
    creditCardExpiryTable ? deleteAllChildNodes(creditCardExpiryTable) : creditCardExpiryTable;
}