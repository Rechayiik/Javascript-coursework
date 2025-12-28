//                  PART A

// Declaring variables
/**
 * when declaring a constant, we use const
 * const is for a constant value whose value doesn't change 
 * throughout the lifetime of the program.
 * let is used for vribles whose values can change while the program is running.
 * i will use const for constants and let for variables that will be changing
 */

// 1.****************************
const companyName = "Karibu Groceries LTD"          //company names doesn't change therfore i used const
let minimumTonnage = 1000                            //this value will be changing therefore it is a variable with let declaration
let isOperational = true                            //this is a variable that changes hence declared with let
let managerName ;                                   //this is a variable declared using let
let closeBranches = null;                           //declaed with let beacause it will change


// 2. ****************************
console.log(typeof companyName);  //string
console.log(typeof minimumTonnage);  //number
console.log(typeof isOperational); //boolean
console.log(typeof managerName); //undefined
console.log(typeof closeBranches);  //object


// 3. ****************************
// This is a single line comment 
/**
 * single line comment is declared with (//)
 * while these lines are multi-line comments declared with (/*)
*/



//              PART B
// 4.***************************************
// string declaration
let dealerNameInput = " james BOND "

// 5.***************************************
// removing leading and trailing spaces
let cleanedString = dealerNameInput.trim()
console.log(cleanedString);  //string without spaces


// split the names into 2
let splitName = cleanedString.split(" ")
// first name
let firstName = splitName[0]
// last name
let lastName = splitName[1]

// convert first name to titlecase
firstNameUpper = `${firstName[0].toUpperCase()}${firstName.slice(1)}`

// convert last name to title case
lastNameUpper = `${lastName[0]}${lastName.slice(1).toLocaleLowerCase()}`

// final sentence case
let cleanDealerName = `${firstNameUpper} ${lastNameUpper}`

// log the dealer name
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

/**
 * dealerNameInput.trim().toLowerCase().split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
 * console.log(`CleanDealerName: ${cleanDealerName});
*/


// 6. ***********************************************************
// check if dealer name is more than 2 characters and is not empty
if (cleanDealerName.length > 2 && cleanDealerName !== "") {
    console.log('Valid dealer name');
} else {
    console.log("Invalid dealer name");   
}



//                  Part C
// provided variables

let userRole = 'Idividual Dealer';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

let numberCost = Number(costInUgx)

// 8. ***************************************
if (userRole === 'Sales Agent') {
    console.log('Error: Sales Agent are not allowed to record any produce!');
} else {
    if (procurementTonnage < 1000) {
        console.log("Minimum tonnage can not be less than 1000kg");  
    } else if (numberCost < 10000) {
        console.log('Cost can not be less than 5 digits!');
    }

// 9. *********************************************
    let validation = (procurementTonnage < 1000) && (numberCost < 10000)
    let validateProduct = validation ?  "Procurement record valid" : "Procurement record invalid";
    console.log(validateProduct);


}


//                      Part D
// 10.***************************
// Given array
let kglProduce = ["Beans", "Grain Maize", "Cow Peas", "G-nuts", "Soyabeans"]

// 11.*************************************8
// code to add green peas
kglProduce.push("Green Peas");
console.log(kglProduce);    // ==>['Beans', 'Grain Maize', 'Cow Peas', 'G-nuts', 'Soyabeans', 'Green Peas']


// Remove the las item from the array
kglProduce.shift()
console.log(kglProduce); //==> [ 'Grain Maize', 'Cow Peas', 'G-nuts', 'Soyabeans', 'Green Peas' ]
 

// Check if G-nuts exist
if(kglProduce.includes("G-nuts")){
    console.log('G-nuts exist in this array');
}

// final array
console.log(`Final array: ${kglProduce}`) //Grain Maize,Cow Peas,G-nuts,Soyabeans,Green Peas
console.log(`Length ${kglProduce.length}`)// 5


// 12.***************************************
let branch2Produce = ['Maize', 'Beans']

let allProduce = kglProduce.concat(branch2Produce)

console.log(allProduce);
/**
 * [
  'Grain Maize',
  'Cow Peas',
  'G-nuts',
  'Soyabeans',
  'Green Peas',
  'Maize',
  'Beans'
]
 */