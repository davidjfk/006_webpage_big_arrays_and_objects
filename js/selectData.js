
// In dataset replace firstname '' by value 'unknown'.
let mapOnFirstNameToValueUnknown = arrPersonObj => arrPersonObj.name  ? arrPersonObj.name : (arrPersonObj.name = "unknown");
let randomPersonDataPurged = mapArrayObjects(randomPersonData,  mapOnFirstNameToValueUnknown )


log("ASSIGNMENT 1: ")
/* SUBOPDRACHT: landenlijst - 1 punt */
const showCountryList = (arrayWithPeopleObjects) => {
  try {
    let arrOfObjectsWithUniqueRegions = createArrOfObjectsWithUniqueRegions(arrayWithPeopleObjects, "region")
    return arrOfObjectsWithUniqueRegions;
  } catch (error) {
    console.error('BUG IN WINC ASSIGNMENT 1: SHOW COUNTRY LIST')
  }
}
let countrylist = showCountryList(randomPersonDataPurged);


log("ASSIGNMENT 2: ")
/* SUBOPDRACHT: steenbokvrouwen - 3 punten */
const showCapricornWomen = (arrayWithPeopleObjects) => {
  try {
    let filterOnGender = arrPersonObj => arrPersonObj.gender === 'female';
    let filterOnAge = arrPersonObj => arrPersonObj.age > 30;
    // mock data: let filterZodiacCapricorns = arrObject => isZodiacSign("Capricorn", "0108");
    let filterZodiacCapricorns = arrPersonObj => isZodiacSign("Capricorn", arrPersonObj.birthday.dmy);
    let arrayFilteredPersObj = filterObjectsByArrayObjectKey(arrayWithPeopleObjects, filterOnGender, filterOnAge, filterZodiacCapricorns)
    let arrSortedByFirstName = sortArrayWithObjectsByObjectKey(arrayFilteredPersObj, true, false, "name" );
    return arrSortedByFirstName;
  } catch (error) {
    console.error('BUG IN WINC ASSIGNMENT 2: SHOW CAPRICORN WOMEN')
  }
}
let capricornWomen = showCapricornWomen(randomPersonDataPurged);




log("ASSIGNMENT 3: ")
// SUBOPDRACHT: ouwe creditcards - 4 punten
  const showExpiringCreditCards = (arrayWithPeopleObjects) => {
    try {
      // task 1: select adults only (done)
      let filterAdults = arrPersonObj => arrPersonObj.age >= 18;
      // func invocation:
      let arrayWithAdultsOnly = filterObjectsByArrayObjectKey(arrayWithPeopleObjects, filterAdults)
      // logMyLongArray2(arrayWithObjects3);

      // task 2: select creditcards in range (until end of this year + entire next calender year)
      let expiryRangeCreditCard = createDateRangeCreditCardExpiry()
      /* 
      more info:
      log(`expiryRangeCreditCard_low: ${expiryRangeCreditCard[0]}`)
      log(`expiryRangeCreditCard_high: ${expiryRangeCreditCard[1]}`)
       */
      //  important: current format in the datasource randomPersonData.js: month/ year, e.g. `11/21`
      
      //  mock data for test fn:
      // let creditCardExpiryDate = `11/21`;
      // < test fn: >
      // let isInRange = isDateInDateRange(creditCardExpiryDate, expiryRangeCreditCard[0], expiryRangeCreditCard[1]);
      // log(isInRange);
      // legenda: 
      // arg1: creditcard expiry date of personObject in randomPersonDataPurged.
      // arg2 and arg3 are the output of fn createDateRangeCreditCardExpiry.
      //  </end of test function>

      const getArrOfClientObjectsWhoseCreditCardsAreGoingToExpire = (arrWithClientObjects, expiryRangeCreditCard) => {
        let arrWithClientObjectsWhoseCreditcardIsGoingToExpire = []
        for (let i = 0; i < arrWithClientObjects.length; i++) {
          let clientCreditCardExpirationDate = arrWithClientObjects[i].credit_card.expiration      
          if (isDateInDateRange(clientCreditCardExpirationDate, expiryRangeCreditCard[0], expiryRangeCreditCard[1])) {
            arrWithClientObjectsWhoseCreditcardIsGoingToExpire.push(arrWithClientObjects[i])
          }
        }
        return arrWithClientObjectsWhoseCreditcardIsGoingToExpire;
      }
    
      let arrOfClientObjectsWhoseCreditCardsAreGoingToExpire = getArrOfClientObjectsWhoseCreditCardsAreGoingToExpire(arrayWithAdultsOnly, expiryRangeCreditCard);

      // create copy of arrayWithAdultsOnly, so I can use copy to reset expirydate after having sorted on expiry date below.
      const arrayWithAdultsOnlyCopy = [...arrayWithAdultsOnly];

      // the format of expirydate up to this point is: myy, or mmmy(e.g. 2/26, or or e.g. 12/26).
      // task: change format of credit card expiry date to:  yymm (e.g. 2610 means: 2026 okt, or 254 means: 2025 april, etc.), so it can be sorted on date. 
      
      let mapcreditCardExpiryDate = arrPersonObj => arrPersonObj.credit_card.expiration ? arrPersonObj.credit_card.expiration = `${arrPersonObj.credit_card.expiration.split('/')[1]}${arrPersonObj.credit_card.expiration.split('/')[0]}` : (arrPersonObj.name = "unknown");
      let arrPersonObjectsWithSortableCreditCardExpiryDate = mapArrayObjects(arrOfClientObjectsWhoseCreditCardsAreGoingToExpire, mapcreditCardExpiryDate)

      // the format of expirydate up to this point is: yym (e.g. 262) or yymm (e.g. 2612).
      // logic problem: e.g. if sorted from  low to high, then e.g. 2612 (feb 2026) will sort higher than 262 (feb 2026) 
      // solution: display e.g. 262 as 2602 :
      let changeExpiryDateFormatInto4Digits = arrPersonObj => arrPersonObj.credit_card.expiration.length < 4 ? arrPersonObj.credit_card.expiration = addStringToString(arrPersonObj.credit_card.expiration, 2, "0") : arrPersonObj.credit_card.expiration;
      let arrPersonObjectsWithSortableCreditCardExpiryDate2 = mapArrayObjects(arrPersonObjectsWithSortableCreditCardExpiryDate, changeExpiryDateFormatInto4Digits)

      // task3: sort on creditcard expiry date.
      let arrPersonObjectsSortedOnCreditCardExpiryDate = sortArrayWithObjectsByObjectKey(arrPersonObjectsWithSortableCreditCardExpiryDate2, true, false, "credit_card.expiration");
    
      // task: reset the creditcard expiry date to its original format: myy (e.g. "7/24"), or: mmyy ("10/25")
      // implementation: overwrite with value expirydate from array randomPersonData.js
      // add a delimiter "/" between year and month
      let mapAddDelimiter = arrPersonObj => arrPersonObj.credit_card.expiration ? arrPersonObj.credit_card.expiration = splitStringAtIndexWithDelimeter(arrPersonObj.credit_card.expiration, 2, "/") : (arrPersonObj.name = "unknown");
      let arrayReset1 = mapArrayObjects(arrPersonObjectsSortedOnCreditCardExpiryDate, mapAddDelimiter)

      // swap month and year (and add delimiter "/" again)
      let swapMonthAndYear = arrPersonObj => arrPersonObj.credit_card.expiration ? arrPersonObj.credit_card.expiration = `${arrPersonObj.credit_card.expiration.split('/')[1]}/${arrPersonObj.credit_card.expiration.split('/')[0]}` : (arrPersonObj.name = "unknown");
      let arrayReset2 = mapArrayObjects(arrayReset1, swapMonthAndYear)

      // convert e.g. 09/22 (month/year) back to 9/22 
      let removeTrailingZero = arrPersonObj => arrPersonObj.credit_card.expiration.charAt(0) === '0' ? arrPersonObj.credit_card.expiration = deleteFirstCharactersFromString(arrPersonObj.credit_card.expiration, 1) : (arrPersonObj.credit_card.expiration);
      let arrayWithClientObjectsWithSortedExpiringCreditcards = mapArrayObjects(arrayReset2, removeTrailingZero)
      return arrayWithClientObjectsWithSortedExpiringCreditcards;
      
    } catch (error) {
      console.error('BUG IN WINC ASSIGNMENT 3: CREDIT CARD')
    }
  }
let arrayWithClientObjectsWithSortedExpiringCreditcards = showExpiringCreditCards(randomPersonDataPurged);




log("ASSIGNMENT 4: ")
/* SUBOPDRACHT 4: meeste mensen - 3 punten */
const showMostPeople = (arrayWithPeopleObjects) => {
  try{
    //  step1: create array with all country names: 
    let arrWithUniqueRegionStrings = createArrWithUniqueRegions(arrayWithPeopleObjects, "region")
    // sample of desired output (deliberately greyed-out):
    // let arrWithAllCountriesAndPopulation = [
    //   {
    //   "region": "Australia",
    //   "population": "1"
    //   },
    //   {
    //     "region": "Austria",
    //     "population": "12"
    //     }
    // ]

    let arrayOfCountryObjects = convertArrayToObject(arrWithUniqueRegionStrings, "country", "population")
    const addPopulationToEachRegionInArrayWithRegionObjects = (arrayOfCountryObjects, arrayWithPeopleObjects) => {
      for (let i = 0; i < arrayOfCountryObjects.length; i++) {
        let filterOnRegion = arrPersonObj => arrPersonObj.region === arrayOfCountryObjects[i].country;
        let personsInCountry = filterObjectsByArrayObjectKey(arrayWithPeopleObjects, filterOnRegion)
        let populationOfCountry = countNrOfObjInArr(personsInCountry)
        arrayOfCountryObjects[i].population = populationOfCountry;
      }
    }
    addPopulationToEachRegionInArrayWithRegionObjects(arrayOfCountryObjects, arrayWithPeopleObjects);
    // sample of the output: (unsorted)
    /* { country: 'Germany', population: 4 },
    { country: 'Greece', population: 29 },
    { country: 'Hungary', population: 13 }, */
    let sortedCountriesByPopulationDescending = sortArrayWithObjectsByObjectKey(arrayOfCountryObjects, false, false, "population");
    // sample of the output: (sorted)
    /* { country: 'Romania', population: 53 }
    counter: 2-2-2
    { country: 'Greece', population: 29 }
    counter: 3-3-3
    { country: 'Slovakia', population: 17 } */
    return sortedCountriesByPopulationDescending;
  } catch (error) {
    console.error('BUG IN WINC ASSIGNMENT 4: SHOW MOST PEOPLE')
  }
}
let arrayWithCountryObjectsWithPopulation = showMostPeople(randomPersonDataPurged);



log("ASSIGNMENT 5: ")
/* SUBOPDRACHT: gemiddelde leeftijd - 5 punten */
let calculateAverageAgeOfCountries = (arrWithObjects) => {
  try{
    let arrCountryNames2 = createArrWithUniqueRegions(arrWithObjects, "region")

    let arrayOfCountryObjects2 = convertArrayToObject(arrCountryNames2, "country", "average_age")

    for (let i = 0; i < arrayOfCountryObjects2.length; i++) {
      let filterOnRegion = arrPersonObj => arrPersonObj.region === arrayOfCountryObjects2[i].country;
      let personObjectsInCountry = filterObjectsByArrayObjectKey(arrWithObjects, filterOnRegion)
      let averageAgeOfCountry = calculateAverageOfArrObjKey(personObjectsInCountry, "age");
      arrayOfCountryObjects2[i].average_age = averageAgeOfCountry;
      }
      /*  sample of expected output format:   
      { country: 'Slovakia', average_age: 28 },
      { country: 'Spain', average_age: 23 },
      { country: 'Tunisia', average_age: 30 },
      { country: 'Turkey', average_age: 30 },
      { country: 'Ukraine', average_age: 33 },
      { country: 'United States', average_age: 28 },
      { country: 'Vietnam', average_age: 32 }
      ] */

      // round 2 zero decimals (e.g. 18.5 --> 18  ,  23.434 --> 23, etc.)
    let rounArrObjectsdAverageAge = arrObj => arrObj.average_age = Math.round(arrObj.average_age)
    let arrOfCountryObjectsWithRoundedAge = mapArrayObjects(arrayOfCountryObjects2, rounArrObjectsdAverageAge)
    return arrOfCountryObjectsWithRoundedAge;
  } catch (error) {
    console.error('BUG IN WINC ASSIGNMENT 2: CALCULATE AVERAGE AGE OF COUNTRIES')
  }
}
let averageAgesOfCountries = calculateAverageAgeOfCountries(randomPersonDataPurged)


log("ASSIGNMENT 6: ")
/* SUBOPDRACHT: matchmaking - 6 punten */
const getListOfSortedAdultsByFirstName = (arrWithPersonObjects) => {
  try{
    let filterAdultsOnly = arrPersonObj => arrPersonObj.age >= 18;
    let arrUnsortedAdultsOnly = filterObjectsByArrayObjectKey(arrWithPersonObjects, filterAdultsOnly)
    let arrAddultsSortedByFirstName = sortArrayWithObjectsByObjectKey(arrUnsortedAdultsOnly, true, false, "name");
      return arrAddultsSortedByFirstName;
  } catch (error) {
    console.error('BUG IN WINC ASSIGNMENT 6: GET LIST OF PERSONS SORTED  BY FIRSTNAME')
  }
}
let arrOfSortedAdultObjectsByFirstName = getListOfSortedAdultsByFirstName(randomPersonDataPurged);


