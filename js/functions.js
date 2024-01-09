
/* List with fns in this file:
    addStringToString,
    calculateAverageOfArrObjKey,
    convertArrayToObject,
    countNrOfObjInArr, 
    createArrOfObjectsWithUniqueRegions,
    createArrWithUniqueRegions,
    createDateRangeCreditCardExpiry,
    createTable,
    deepClone,
    generateFnToSortArray,
    generateFnToSortArrayWithObjects,
    getArrObjValuesByArrayObjectKey,
    filterObjectsByArrayObjectKey,
    filterOnName,
    filterOnPrice,
    flattenObj,
    getZodiacSignBasedOnBirthDate,
    isDateInDateRange,
    isZodiacSign,
    keepFollowingPropsInArrObj,
    log,
    logMyLongArray2,
    mapArrayObjects,
    mapOnDiscount,
    maponPrice,
    numCompare,
    objCompare,
    removeAllChildNodes,
    removeFirstCharactersFromString,
    removeDuplicateValuesFromArrayWithObjectsByValueForObjectKey,
    removeDuplicateValuesFromArrayWithStringsOrNumbers,
    removeFirstCharactersFromString,
    sortArrayByStringOrNumber,
    sortArrayWithObjectsByObjectKey,
    splitStringAtIndexWithDelimeter,
    stringCompareLatinAlphabetWithoutPunctuation,
    stringCompareUnicode, 
*/


const addStringToString = (string, index, stringToAdd) => {
    return string.substring(0, index) + stringToAdd + string.substring(index, string.length);
}
  

const createTable = (arrWithObjects, tableClass) => {
  let key;
  const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    // thead is used to group header content in an HTML table
    let row = thead.insertRow();
    for (let key of data) {
      let tableHeader = document.createElement("th");
      //  The <th> tag defines a header cell in an HTML table.
      let text = document.createTextNode(key);
      tableHeader.appendChild(text);
      row.appendChild(tableHeader);
    }
  }
  
  function generateTable(table, data) {
    table.classList.add(tableClass);
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(arrWithObjects[0]);
  generateTableHead(table, data);
  generateTable(table, arrWithObjects);
}





// source of deepClone fn: source (medium): https://javascript.plainenglish.io/javascript-how-to-deep-clone-an-object-daa1ec29d216  (I have reported a showstopper plus solution to the author on Medium, as a comment to the article, that blocked this fn from working) 
var object_create = Object.create;
    if (typeof object_create !== 'function') {
      object_create = function(o) {
          function F() {}
          F.prototype = o;
          return new F();
    };
}

function deepClone(src) {
    if(src === null || typeof(src) !== 'object'){
        return src;
    }

    //Honor native/custom clone methods
    if(typeof src.clone == 'function'){
        return src.clone(true);
    }

    //Special cases:
    //Date
    if(src instanceof Date){
        return new Date(src.getTime());
    }
    //RegExp
    if(src instanceof RegExp){
        return new RegExp(src);
    }
    //DOM Element
    if(src.nodeType && typeof src.cloneNode == 'function'){
        return src.cloneNode(true);
    }

    //Array
    if (Object.prototype.toString.call(src) == '[object Array]') {
        //[].slice() by itself would soft clone
        var ret = src.slice();

        var i = ret.length;
        while (i--) {
            ret[i] = deepClone(ret[i]);
        }
        return ret;
    }

  //If we've reached here, we have a regular object 
  var proto = (Object.getPrototypeOf ? Object.getPrototypeOf(src) : src.__proto__);
  var dest = object_create(proto);
    for (var key in src) {
        //Note: this does NOT preserve ES5 property attributes like 'writable', 'enumerable', etc.
        dest[key] = deepClone(src[key]);
    }
    return dest;
}

const filterObjectsByArrayObjectKey  = (array, ...arrWithFilterFunctions) => {
  let filteredArr = deepClone(array);

  for (const Fn of arrWithFilterFunctions) {
    filteredArr = filteredArr.filter(Fn)
  }
  return filteredArr;
}

const log = console.log;



const logMyLongArray2 = (bigArray) => {
  let counterValue = 1;
  bigArray.forEach(element => {
    log(`counter: ${counterValue}-${counterValue}-${counterValue}`)
    counterValue++;
    log(element)
  });
}



const getZodiacSignBasedOnBirthDate = (birthDate) => {
  //  Fn argument birthDate must be in format: day/month/year, e.g. "27/12/1986"  
  let substrings = birthDate.split('/');
  let day = substrings[0];
  let month = substrings[1];

  let birthDateInFormatYearMonth = `${month}${day}`

  let zodiacSigns = [
    ['Capricorn', '0119'],
    ['Aquarius', '0218'],
    ['Pisces', '0320'],
    ['Aries', '0420'],
    ['Taurus', '0521'],
    ['Gemini', '0621'],
    ['Cancer', '0722'],
    ['Leo', '0822'],
    ['Virgo', '0921'],
    ['Libra', '1022'],
    ['Scorpio', '1121'],
    ['Sagittarius', '1220'],
    ['Capricorn', '1231']
  ];
  let zodiacSign = zodiacSigns.find(zodiac => zodiac[1] >= birthDateInFormatYearMonth)
  return zodiacSign[0]
}


const isDateInDateRange = (specifiedDateStr, rangeMinDateObj, rangeMaxDateObj) => {
  // pitfall: this function assumes as input format of specifiedDateStr: "month/year", e.g. "11/21".
 let substrings = specifiedDateStr.split('/');
 let year = substrings[1];
 let month = substrings[0];
 /*   google: Credit cards expire at the end of the month written on the card. For example, a credit card's expiration date may read as 11/24, which means the card is active until the last day of November 2024. 
 
 So I add a month " +1 " below so clients with their creditcard expiring this month, will also be eligible for receiving a phone call. So I define "the future" from winc-assignment" as "the rest of this month until new years eve next year (included)"
 */
 let specifiedDateObj = new Date(`20${year}/${(parseInt(month) +1 )}`)
  let isDateInTheDataRange = false;
  if (specifiedDateObj > rangeMinDateObj && specifiedDateObj < rangeMaxDateObj) {
    isDateInTheDataRange = true;
  }
  return isDateInTheDataRange;
}




const isZodiacSign = (zodiacSignToCheck, birthDate) => {
  //  format of argument birthDate assumes format: day/month/year, e.g. "27/12/1986"  
  //  Then this fn converts it into format: year/month, e.g. 86/12
  let substrings = birthDate.split('/');
  let day = substrings[0];
  let month = substrings[1];
  let birthDateInFormatMonthDay = `${month}${day}`
  
  let zodiacSigns = [
    ['Capricorn', '0119'],
    ['Aquarius', '0218'],
    ['Pisces', '0320'],
    ['Aries', '0420'],
    ['Taurus', '0521'],
    ['Gemini', '0621'],
    ['Cancer', '0722'],
    ['Leo', '0822'],
    ['Virgo', '0921'],
    ['Libra', '1022'],
    ['Scorpio', '1121'],
    ['Sagittarius', '1220'],
    ['Capricorn', '1231']
  ];
  let zodiacSign = zodiacSigns.find(zodiac => zodiac[1] >= birthDateInFormatMonthDay)
  return (zodiacSign[0] === zodiacSignToCheck) ? true : false;
}



const flattenObj = (object) => {
  // source of this fn: https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/ 
  let result = {};

  // loop through the object "ob"
  for (const i in object) {
      if ((typeof object[i]) === 'object' && !Array.isArray(object[i])) {
          const temp = flattenObj(object[i]);
          for (const j in temp) {
              result[i + '.' + j] = temp[j];
          }
      }
      else {
          result[i] = object[i];
      }
  }
  return result;
};


const keepFollowingPropsInArrObj = (arrWithPersonObjects, ...objectKeysToKeep) => {
  // second parameter has rest operator, so it automatically encases the object keys, that I want to retain, into an array. 

  //design decision:  I want to specify only the keys that must be retained. reason: specifiying the objkeys that must be removed would be more work, if the object is very long and would result in a less robust solution in case the object changes in the future. Based on the keys that must be retained, my code below determines the rest of the object keys. The rest of the object keys are then removed from the object. 
  const isPropertyRetainedInObj = (targetObj, arrWithObjectKeysToKeep) => {

    let arrWithAllObjKeys = Object.keys(targetObj);
    return arrWithAllObjKeys.map(condition => arrWithObjectKeysToKeep.includes(condition));
  }

  let arrWithBooleanForEachObjPropThatIndicatesIfPropCanStayPartOfTheObj = isPropertyRetainedInObj(arrWithPersonObjects[0], objectKeysToKeep);

  // console.log(`result: ${arrWithBooleanForEachObjPropThatIndicatesIfPropCanStayPartOfTheObj}`); // output: e.g: false,true,true,false
  // true means: retain the object property.
  // false means: delete this object property. 
  // The order of true's and false's resembles the order of the properties in the obj.

  const createArrWithObjPropsToRemove = (obj, keepList) => {
    const objCopy = deepClone(obj);
    let arrWithObjPropertiesToRemove = []


    let arrWithAllObjectKeys = Object.keys(objCopy);

    for (let i = 0; i < arrWithAllObjectKeys.length; i++) {
      if (keepList[i] !== true) {
        arrWithObjPropertiesToRemove.push(arrWithAllObjectKeys[i]);
      }
    };
    return arrWithObjPropertiesToRemove;
  }
  

  let arrWithObjPropertiesToRemove = createArrWithObjPropsToRemove(arrWithPersonObjects[0], arrWithBooleanForEachObjPropThatIndicatesIfPropCanStayPartOfTheObj);
  function deleteUnwantedPropsFromObj(obj, objKeyDeleteList = []) {
    const result = { ...obj };
    objKeyDeleteList.forEach((prop) => {
      delete result[prop];
    });
    return result;
  }

  const removeUnwantedObjPropsFromArrayWithObjects = (arrayWithObj, arrWithObjPropertiesToRemove) => {
    let arrwithObjectsWithLessProps = [];
    let objWithFewerProps;
    
      objWithFewerProps = arrWithPersonObjects.map(personObj => deleteUnwantedPropsFromObj(personObj, arrWithObjPropertiesToRemove));
      arrwithObjectsWithLessProps.push(objWithFewerProps);
    
    return arrwithObjectsWithLessProps;
  }

  let arrObjectsWithSelectedObjProps = removeUnwantedObjPropsFromArrayWithObjects(arrWithPersonObjects, arrWithObjPropertiesToRemove)
  return arrObjectsWithSelectedObjProps[0];

}



const mapArrayObjects = (array, ...FnArray) => {
    // Fns are first-class citizens, so I can put them in an array, use them as function argument and ...combine the 2 in one step
  let mappedArr = deepClone(array)
  for (const Fn of FnArray) {
    mappedArr.map(Fn)
  }
  return mappedArr;
}



const deleteAllChildNodes = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


const deleteArrDuplicateStringOrNumberValues = (array) => {
  const arrayWithUniqueValues = [...new Set(array)];
  return arrayWithUniqueValues;
}


const deleteFirstCharactersFromString = (stringThatNeedsLessCharacters, numberOfStringsToRemove) => {
  let stringRemainder = stringThatNeedsLessCharacters.substr(numberOfStringsToRemove);
  return stringRemainder;
}
  
const deleteArrObjectsIfArrObjValueIsNotUnique = (array, objectProperty) => {
  let arrayWithStoredCountryNames = [];
  let arrayWithObjectsWithUniqueCountryName = [];
  for (const person of array) {
    let valueToCheck = person[objectProperty];     
    if (arrayWithStoredCountryNames.indexOf(valueToCheck) === -1) {
        arrayWithStoredCountryNames.push(person[objectProperty]);
        arrayWithObjectsWithUniqueCountryName.push(person);
      }
  }
  return arrayWithObjectsWithUniqueCountryName;
}


const getArrObjValuesByArrayObjectKey = (array, property) => {
  const countryNames = array.map(object => object[property])
  return countryNames;
}



//  <START OF reusable code to sort arrays with objects, and/or arrays with strings or number>
const stringCompareUnicode = (str1, str2, unicodeLanguage, ignorePunctuation) => {
  return str1.localeCompare(str2, unicodeLanguage, { ignorePunctuation: ignorePunctuation });
  // remark: localeCompare enables case-insensitive sorting for an array.
};


let splitStringAtIndexWithDelimeter = (value, index, delimiter ="") => {
  {
    return value.substring(0, index) + delimiter  + value.substring(index);
  }
}

const stringCompareLatinAlphabetWithoutPunctuation = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1 > str2) return 1;
  if (str2 > str1) return -1;
  return 0;
};


const numCompare = (numA, numB) => numA - numB;

const objCompare = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  };
}
//  < END OF reusable code to sort arrays with objects, and/or arrays with strings or number>


// section about SORT array with OBJECTS:
const generateFnToSortArrayWithObjects = (sampleObject, isOnlyLatinAlphabetWithoutPunctuation, keys) => {
  /* input: key1.key2.key3. There can be as many keys as you like, separated by a dot. E.g. birthday.dmy consists of 2 keys, separated by a dot. 
  So there can be any number of keys, ranging from 1 to infinity. 

  limitation: if there is a nested array between the object and its nested object,  then this fn does not work. Then I must adjust code below, to accommodate for that.
  
  */

  // example: credit_card.pin  --> here 'pin' would be the nested object on which to sort the entire array with objects.
  let arrKeys = keys.split('.');
  // result is array, even if variable keys does not contain a dot (e.g. "winc" returns as ['winc'])
  const dataType = typeof sampleObject[arrKeys[0]];
  // // pitfall: be sure to enter arrKeys[0], but not arrKeys, because you want to  check if the object (e.g. 'pin' in example above) is of type 'object'.
  const sortFn = (a, b) => {
      // forEach layer of nesting, there will be an extra while loop.
      //  so for e.g. credit_card.pin there will be two loops. 
      let len = arrKeys.length;
      let i = 0;
      while( i < len ) {
        a = a[arrKeys[i]];
        b = b[arrKeys[i]];

          i++;
      }
 
    if (dataType === "string") {
      if (isOnlyLatinAlphabetWithoutPunctuation) {
        return stringCompareLatinAlphabetWithoutPunctuation(a, b)
      } else {
        return stringCompareUnicode(a, b, 'en', true)
        // design-choice: I use English ('en') as common denominator to sort the unicode lanaguages in the data, unless told otherwise.
        // ignore punctuation: e.g. "é" is sorted the same as "e".
      }        
    };
    if (dataType === "number") {
      return numCompare(a , b)
    };
    if (dataType === 'object') {
      return objCompare(a, b)
    };
  };
  return sortFn;
};

const sortArrayWithObjectsByObjectKey = (arrObjects, asc = true, isOnlyLatinAlphabetWithoutPunctuation = false, ...keys) => {
  const arrObjectsCopy = deepClone(arrObjects)
  const sorted = arrObjectsCopy.sort(
      generateFnToSortArrayWithObjects(arrObjectsCopy[0], isOnlyLatinAlphabetWithoutPunctuation, ...keys)
  );
  if (!asc) sorted.reverse();
  return sorted;
};
// end of section about SORT array with OBJECTS:


// section about SORT array with strings or numbers:
// The 3 compare fns above are also used in this section.  
const generateFnToSortArray = (arrayToSort, isOnlyLatinAlphabetWithoutPunctuation) => {
  const dataType = typeof arrayToSort[0];
  const sortFn = (a, b) => {
    if (dataType === "string") {
        if (isOnlyLatinAlphabetWithoutPunctuation) {
          return stringCompareLatinAlphabetWithoutPunctuation(a, b)
        } else {
          return stringCompareUnicode(a, b, 'en', true)
          // design-choice: I use English ('en') as common denominator to sort the unicode lanaguages in the data, unless told otherwise.
          // ignore punctuation: e.g. "é" is sorted the same as "e".
        }        
      };
      if (dataType === "number") return numCompare(a, b);
    };
    return sortFn;
  };

  const sortArrayByStringOrNumber = (arrayToSort, asc = true, isOnlyLatinAlphabetWithoutPunctuation = false) => {
    const arrayCopy = deepClone(arrayToSort);
    const sorted = arrayCopy.sort(
    generateFnToSortArray(arrayCopy, isOnlyLatinAlphabetWithoutPunctuation)
  );
  if (!asc) sorted.reverse();
  return sorted;
};

// </end of section about SORT array with strings or numbers>



const convertArrayToObject = (array, key1, key2) => {

  let arrayOfObjects = array.map((val) => {
    return {
      [key1]: val,
      [key2]: null
    };
  });
  return arrayOfObjects;
}


const countNrOfObjInArr = (bigArray) => {
  let counterValue = 0;
  bigArray.forEach(element => {
    counterValue++;
    });
  let nrOfObjects = counterValue;
  return nrOfObjects;
}


const createArrOfObjectsWithUniqueRegions = (array, filterObjectProperty) => {
  // definition: region (in dataset 'randomPersonData.js) === country. 
  const sortedCountryNames = sortArrayWithObjectsByObjectKey(array, true, false, filterObjectProperty);
  
  const uniqueCountryNames = deleteArrObjectsIfArrObjValueIsNotUnique(sortedCountryNames, filterObjectProperty);
  return uniqueCountryNames;
}



const createArrWithUniqueRegions = (array, property) => {
  // definition: region (in dataset 'randomPersonData.js) === country. 
  const countryNames = getArrObjValuesByArrayObjectKey(array, property)
  const sortedCountryNames = sortArrayByStringOrNumber(countryNames);
  const uniqueCountryNames = deleteArrDuplicateStringOrNumberValues(sortedCountryNames)
  return uniqueCountryNames;
}


const createDateRangeCreditCardExpiry = () => {
  // input: There is only one range requested in the winc-assignments, so for brevity I have "hard-coded" the lowest and highest date of the credit card expiry range.
  // output: array with 2 date objects, 1 for lowest date and 1 for highest date in the range. 
  // remark: my definition of "future": the future starts tomorrow. So if e.g. a creditcard expires today, then tis function will return false, but if it expires tomorrow (and any date until the last day of the next year included, then this fn will return true)
  //  pitfall: 1 js engine can  compare date objects, not date-strings!
  //  pitfall2: date compare with < and > , but === is not possible. 
  let currentDate = new Date()
  let nextYear = (new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear())
  let newYearsEveDateNextYear = new Date(`12/31/${nextYear}`)
  let dateRangeToReturn = [currentDate, newYearsEveDateNextYear ]
  return dateRangeToReturn;
}



// calculate average arrObjPropValue takes 2 steps. 
let inventory4 = [
  {item:'Coffee', price: undefined , discount: 0.00},
  {item:'Tea', price: 12, discount: 0.05},
  {item:'Shirt', price: 25, discount: undefined},
  {item:'Pen', price: null, discount: 0.20},
  {item:'Shirt', price: 10 , discount: 3.00 }
];

//  step 1: clean the data:
let filterOnPrice1 = arrObject => arrObject.price !== undefined && arrObject.price !== null ;
// if object.item has value null or undefined, then it will be skipped.

let filterOnPrice2 = arrObject => arrObject.discount !== undefined && arrObject.discount !== null ;

let filteredArrObjects = filterObjectsByArrayObjectKey(inventory4, filterOnPrice1)

//  step 2: calculate average: 
const calculateAverageOfArrObjKey = (array, objKey) => array.reduce((accumulator, variableDoingNothing, index, array) => accumulator + array[index][objKey], 0) / array.length;

let averagePrice = calculateAverageOfArrObjKey(filteredArrObjects, "price");



