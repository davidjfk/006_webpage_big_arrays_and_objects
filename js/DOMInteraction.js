log("ASSIGNMENT 1: ")
// SUBOPDRACHT: landenlijst - 1 punt
const getRegionFromDataSource = function (arrObjPerson) {
    return arrObjPerson.region ;
}

const addRegionToDOM = function(arrObj) {
    const countryList = document.querySelector('.wincCountryList');
    const listItem = document.createElement('li');
    const headerCountry = document.createElement('h4');
    const dataCountry = getRegionFromDataSource(arrObj);
    const textElemCountry = document.createTextNode(dataCountry);
    
    headerCountry.appendChild(textElemCountry);
    listItem.appendChild(headerCountry);
    countryList.appendChild(listItem);
    headerCountry.id = 'flexbox';
};

const showCountryListOnWebpage = function(array) {
    array.map(arrObjPerson => addRegionToDOM(arrObjPerson));
};
 

log("ASSIGNMENT 2: ")

const getCapricornWomanPhotoFromDataSource =  function (arrObjPerson) {
    return arrObjPerson.photo;
}

const getCapricornWomanFromDataSource =  function (arrObjPerson) { 
    return `${arrObjPerson.name} ${arrObjPerson.surname} `;
}

const addCapricornWomanToDOM = async function(arrObj) {
    const listCapricornWomen = document.querySelector('.wincCapricornWomen');
    const listItem = document.createElement('li');
    const header = document.createElement('h4');
    const imgCapricornWoman = document.createElement("img")

    const dataToDisplay = getCapricornWomanFromDataSource(arrObj);
    const textElem = document.createTextNode(dataToDisplay);
    imgCapricornWoman.setAttribute("src", getCapricornWomanPhotoFromDataSource(arrObj))
    header.appendChild(textElem);
    header.appendChild(imgCapricornWoman);

    listItem.appendChild(header);
    listCapricornWomen.appendChild(listItem);
    header.id = 'flexbox';
};



const showCapricornWomenOnWebpage = function(array) {
    array.map(arrObjPerson => addCapricornWomanToDOM(arrObjPerson));
};


log("ASSIGNMENT 3: ")
const showCreditCardsTable = (arrayWithClientObjectsWithSortedExpiringCreditcards) => {
    let flattendArrayWithPersonObj = arrayWithClientObjectsWithSortedExpiringCreditcards.map(element =>
        flattenObj(element));
    let arrWithObjectsInFormatToCreateTableWith = keepFollowingPropsInArrObj(flattendArrayWithPersonObj, 'name', 'surname', 'phone', 'credit_card.expiration', 'credit_card.number')
    const div = document.createElement('div');
    div.classList.add("wincCreditCardsExpiry")
    createTable(arrWithObjectsInFormatToCreateTableWith, "wincCreditCardsExpiry")
}

// remark: the following code works and shows the required data on the webpage, but the data is unpleasant to read. So I have put the data in a table format, in the code section above. I leave this code greyed out, so I can use it as a building block for another project. 
// note-to-self: the code below takes 'arrayWithClientObjectsWithSortedExpiringCreditcards' as input from file selectData.js'

/* const getCreditCardsExpiringFromDataSource =  function (arrObjPerson) { 
    return `Name: ${arrObjPerson.name}, Surname: ${arrObjPerson.surname}, creditcard number: ${arrObjPerson.credit_card.number}, Expiry date: ${arrObjPerson.credit_card.expiration}  `;
}

const addCreditCardsToDOM = async function(arrObj) {
    const list = document.querySelector('.wincCreditCardsExpiring');
    const header = document.createElement('h4');
    const listItem = document.createElement('li');
    const countryToDisplay = getCreditCardsExpiringFromDataSource(arrObj);
    const countryTextElem = document.createTextNode(countryToDisplay);
    listItem.appendChild(countryTextElem);

    header.appendChild(listItem);
    header.appendChild(listItem);
    list.appendChild(header);
    listItem.id = 'flexbox';
};

const showCreditCardsOnWebpage = function(array) {
    array.map(arrObjPerson => addCreditCardsToDOM(arrObjPerson));
}; */



log("ASSIGNMENT 4: ")
const getCountryAndTotalNumberOfPeopleOfCountry =  function (arrObjPerson) {
    return `From ${arrObjPerson.country}, there are ${arrObjPerson.population} people. `;
}

const addMostPeopleToDOM = async function(arrObj) {
    const listMostPeoplePerCountryDescending = document.querySelector('.wincMostPeople');
    const header = document.createElement('h4');
    const listItem = document.createElement('li');
    const countryToDisplay = getCountryAndTotalNumberOfPeopleOfCountry(arrObj);
    const countryTextElem = document.createTextNode(countryToDisplay);
    listItem.appendChild(countryTextElem);

    header.appendChild(listItem);
    header.appendChild(listItem);
    listMostPeoplePerCountryDescending.appendChild(header);
    listItem.id = 'flexbox';
};

const showPopulationPerCountry = function(array) {
    array.map(arrObjPerson => addMostPeopleToDOM(arrObjPerson));
};



log("ASSIGNMENT 5: ")
const getCountryFromPersonObj =  function (arrObjPerson) {
    return `${arrObjPerson.country} `;
}

const getAverageAgePerCountryFromDataSource =  function (arrObjPerson) {
    return `${arrObjPerson.country} ${arrObjPerson.average_age}  `;
}

const addAverageAgePerCountryToDOM = async function(arrObj, index) {
    const listAverageAgePerCountry = document.querySelector('.wincAverageAge');
    const listItem = document.createElement('li');
    const header = document.createElement('h4');
    const button = document.createElement("button")

    const dataToDisplayOnButton = getCountryFromPersonObj(arrObj);
    const buttonTextElement = document.createTextNode(dataToDisplayOnButton);
    button.appendChild(buttonTextElement)
        const handleClickEvent = () => {
            let country = averageAgesOfCountries[index].country;
            let averageAge = averageAgesOfCountries[index].average_age;
            const textToDisplay = `The average person in ${country} is ${averageAge} years old.`
            const textElem = document.createTextNode(textToDisplay);
            listItem.appendChild(textElem);
            deleteAllChildNodes(header);
            header.appendChild(textElem);
        }
    button.addEventListener("click", handleClickEvent)
    listItem.appendChild(button);
    listItem.appendChild(header);
    listAverageAgePerCountry.appendChild(listItem);
    listItem.id = 'flexbox';
};
const showAverageAgePerCountry = function(array) {
    array.map((arrObjPerson, index) => addAverageAgePerCountryToDOM(arrObjPerson, index));
};





log("ASSIGNMENT 6: ")

/* Implementation: 
For each arrPersonObj the array number from dataset randomPersonDataPurged is connected to the button for that person.
I do this in a dynamic way: so if the dataset shrinks or grows, the code will still work. 
I need this array number also in the last step where I filter out the person who is looking for a match, so the person will not be matched with itself.  */

const getMatchPhotoFromDataSource =  function (arrObjPerson) {
    return arrObjPerson.photo;
}

const getMatchDataFromDataSource =  function (arrObjPerson) {
    return `Name: ${arrObjPerson.name} Surname: ${arrObjPerson.surname}  `;
}

const getMatchDataFromDataSource2 =  function (arrObjPerson) {
    return `Country: ${arrObjPerson.region} Age: ${arrObjPerson.age} Zodiac: ${getZodiacSignBasedOnBirthDate(arrObjPerson.birthday.dmy)} `;
}

const addAllPeopleToDOM =  function(arrObj, arrPersonObjIndex, arrOfSortedAdultObjectsByFirstName) {
    const listAllPersonObj = document.querySelector('.wincMatchMaking');
    const listItemAllPersonObj = document.createElement('li');
    const headerAllPersonObj = document.createElement('h4');
    const imgAllPersonObj = document.createElement("img");
    const buttonForEachPersonObj = document.createElement("button");
    const dataOfAllPersonObj1 = getMatchDataFromDataSource(arrObj);
    const textElemAllPersonObj = document.createTextNode(dataOfAllPersonObj1);
    imgAllPersonObj.setAttribute("src", getMatchPhotoFromDataSource(arrObj));

    // the images from randomuser.me return in 3 different sizes. (Apparently) not possible to set one size as query selector in the endpoint. So I do it like this:
    imgAllPersonObj.width = 130;
    
/*     design decision: I use arrPersonObjIndex as button-class. This has two advantages:
    1. I can access the current element in the array of person objects (e.g. if I create button 10, then this refers to person 9 in the array with person objects.) (pitfall: off-by-one error)
    2. if the array with person objects shrinks or grows, then this code will still work, so it is  a dynamic solution.  */

    buttonForEachPersonObj.classList.add(`${arrPersonObjIndex}`)
    /* 
    I need this arrPersonObjIndex to:
    1. show the person clicked on top:
    2. create and show a list of matches beneath this person. 
    */
        
        const handleClickEvent = () => {
            let birthdayOfMatchSeeker = arrObj.birthday.dmy
            // ex of expected result: "12/06/1988"   (dd/ mm / yyyy)
            let zodiacSignOfMatchSeeker = getZodiacSignBasedOnBirthDate(birthdayOfMatchSeeker)
            let cloneOfMatchSeeker = deepClone(arrObj);
            const addMatchSeekerToDOM = function (arrObj, arrPersonObjIndex) {
                const matchSeeker = document.querySelector('.wincMatchMaking');
                const listItemMatchSeeker = document.createElement('li');
                const headerMatchSeeker = document.createElement('h4');
                const imgMatchSeeker = document.createElement("img");
                const buttonMatchSeeker = document.createElement("button");
                const data1MatchSeeker = getMatchDataFromDataSource(arrObj);
                const textElem1MatchSeeker = document.createTextNode(data1MatchSeeker);
                
                imgMatchSeeker.setAttribute("src", getMatchPhotoFromDataSource(arrObj))
                imgMatchSeeker.width = 100;
                buttonMatchSeeker.classList.add(`${arrPersonObjIndex}`)
                const data1MatchSeeker2 = getMatchDataFromDataSource2(arrObj);
                const textElem2MatchSeeker = document.createTextNode(data1MatchSeeker2);
                headerMatchSeeker.appendChild(textElem1MatchSeeker);
                headerMatchSeeker.appendChild(imgMatchSeeker);
                headerMatchSeeker.appendChild(textElem2MatchSeeker);
                headerMatchSeeker.id = 'flexbox2';
                listItemMatchSeeker.appendChild(headerMatchSeeker);
                matchSeeker.appendChild(listItemMatchSeeker);

                const sectionWithMatchingCandidates = document.createElement('h1');
                const matchingCandidatesTitle = "Matching Candidates on Zodiac";
                const nodeOfMatchingCandidates = document.createTextNode(matchingCandidatesTitle);
                sectionWithMatchingCandidates.appendChild(nodeOfMatchingCandidates);
                sectionWithMatchingCandidates.classList.add('sectionWithMatchingCandidates')
                document.body.appendChild(sectionWithMatchingCandidates);

                const matchingCandidates = document.createElement('div');
                matchingCandidates.classList.add('wincMatchMakingResult')
                document.body.appendChild(matchingCandidates);
            }
                const wincMatchMakingElem = document.querySelector('.wincMatchMaking');
                deleteAllChildNodes(wincMatchMakingElem);
                addMatchSeekerToDOM(cloneOfMatchSeeker, arrPersonObjIndex);
            
            let cloneOfArrOfSortedAdultObjectsByFirstName = deepClone(arrOfSortedAdultObjectsByFirstName);
            //  remove matchSeeker from the array that will display the matching candidates on Zodiac to this matchSeeker, but not from arrOfSortedAdultObjectsByFirstName to avoid problems with state. 
            cloneOfArrOfSortedAdultObjectsByFirstName.splice(arrPersonObjIndex, 1)
            
            let filterPersonObjectsWithSameZodiacAsMatchSeeker = arrPersonObj => isZodiacSign(zodiacSignOfMatchSeeker, arrPersonObj.birthday.dmy);
            let arrPersObjWithSameZodiacSign = filterObjectsByArrayObjectKey(cloneOfArrOfSortedAdultObjectsByFirstName, filterPersonObjectsWithSameZodiacAsMatchSeeker)

            const addMatchingCandidatesToDOM = function (arrObj) {
                const matchingCandidates = document.querySelector('.wincMatchMakingResult');
                const listItemMatchingCandidates = document.createElement('li');
                const headerMatchingCandidates = document.createElement('h4');
                const imgMatchingCandidate = document.createElement("img")
         
                const dataOfMatchingPersonObj1 = getMatchDataFromDataSource(arrObj);
                const textElem1OfMatchingCandidates = document.createTextNode(dataOfMatchingPersonObj1);
                imgMatchingCandidate.setAttribute("src", getMatchPhotoFromDataSource(arrObj))
                imgMatchingCandidate.width = 130;
                const dataOfMatchingPersonObj2 = getMatchDataFromDataSource2(arrObj);
                const textElem2OfMatchingCandidates = document.createTextNode(dataOfMatchingPersonObj2);             
                headerMatchingCandidates.appendChild(textElem1OfMatchingCandidates);
                headerMatchingCandidates.appendChild(imgMatchingCandidate);
                headerMatchingCandidates.appendChild(textElem2OfMatchingCandidates);
                headerMatchingCandidates.id = 'flexbox2';        
                listItemMatchingCandidates.appendChild(headerMatchingCandidates);
                matchingCandidates.appendChild(listItemMatchingCandidates);              
            }
            const showMatchingCandidatesOnWebPage = function (arrPersObjWithSameZodiacSign) {     
                arrPersObjWithSameZodiacSign.map(arrObjPerson => addMatchingCandidatesToDOM(arrObjPerson));
            };
            showMatchingCandidatesOnWebPage(arrPersObjWithSameZodiacSign);
        }

        buttonForEachPersonObj.addEventListener("click", handleClickEvent)

    const dataOfAllPersonObj2 = getMatchDataFromDataSource2(arrObj);
    const textElemAllPersonObj2 = document.createTextNode(dataOfAllPersonObj2);
    const dataToDisplayOnButton = "find matches"
    const buttonTextElement = document.createTextNode(dataToDisplayOnButton);
    buttonForEachPersonObj.appendChild(buttonTextElement)
    headerAllPersonObj.appendChild(textElemAllPersonObj);
    headerAllPersonObj.appendChild(imgAllPersonObj);
    headerAllPersonObj.appendChild(textElemAllPersonObj2);
    headerAllPersonObj.appendChild(buttonForEachPersonObj);
    headerAllPersonObj.id = 'flexbox2';
    listItemAllPersonObj.appendChild(headerAllPersonObj);
    listAllPersonObj.appendChild(listItemAllPersonObj);
};

const showAllPeopleOnWebpage = function (arrOfSortedAdultObjectsByFirstName) {
/* remark: I need the arrPersonObjIndex to connect a person from array with person objects to a button. The index will serve as the class of the button.  */
arrOfSortedAdultObjectsByFirstName.map((arrObjPerson, arrPersonObjIndex, arrOfSortedAdultObjectsByFirstName) => addAllPeopleToDOM(arrObjPerson, arrPersonObjIndex, arrOfSortedAdultObjectsByFirstName));
};




