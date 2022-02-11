// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// returns the total sum of running the lughAlgo
const lughAlgoSum = arr => {
    let nDigits = arr.length
    let sum = arr[arr.length - 1]
    let parity = (nDigits - 2) % 2
    for(i = 0; i < nDigits - 1; i++) {
        let digit  = arr[i];
        if (i % 2 === parity) {
            digit = digit * 2;
        }
        if (digit > 9) {
            digit = digit - 9;
        }
        //console.log(digit)
        sum = sum + digit
        }
    return sum;
}  
// checks if a card is valid or invalid based on Luhn Algorithm
const validateCred = (arr) => {
    let sum = lughAlgoSum(arr)
    return (sum % 10  === 0) ? true : false;
    }

// finds invalid cards in an array with multiple cards
const findInvalidCards = (x) => {
    newArrInvalid = [];
    for (value of x) {
        if (!validateCred(value)) {
            newArrInvalid.push(value);
        }
    }
    return newArrInvalid;
}
// checks the companies with at least one invalid CC
const idInvalidCardCompanies = (arr) => {
    let newArr = findInvalidCards(arr)
    let companies = [];
    if (newArr.find(e => e[0] === 3)) {
        companies.push('AMEX');
    }
    if (newArr.find(e => e[0] === 4)) {
        companies.push('Visa');
    }
    if (newArr.find(e => e[0] === 5)) {
        companies.push('Mastercard');
    }
    if (newArr.find(e => e[0] === 6)) {
        companies.push('Discover');
    }
    return companies;
}
// converts a string of numbers from a CC to an Array
const stringToNum = str => {
    let newArrNum = [];
    for (char of str) {
        newArrNum.push(char);
    }
    return newArrNum;
}

// converts an invalid card to a valid one
const invalidToValid = arr => {
    let newValidCard = arr;
    if (validateCred(arr)) {
        return 'This card is already a valid one.'
    } else {
        let x = lughAlgoSum(arr) % 10;
        let i = newValidCard.findIndex(e => e >= x);
        newValidCard[i] = newValidCard[i] - x;
    }
    return newValidCard;
}







