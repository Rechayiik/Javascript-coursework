let procurementRecords = [
    {
        id: 1, 
        dealerName: "Rech", 
        produceType: "Beans", 
        tonnageInKgs: 2_000, 
        costInUgx: 1000, 
        procurementDate: new Date()
    },
    {
        id: 2,
        dealerName: "Major",
        produceType: "G-nuts",
        tonnageInKgs: 900,
        costInUgx: 1000,
        procurementDate: new Date()
    }
    ,
    {
        id: 3,
        dealerName: "Khalid",
        produceType: "Cow peas",
        tonnageInKgs: 7_000,
        costInUgx: 500,
        procurementDate: new Date()
    },
    {
        id: 4,
        dealerName: "Issa",
        produceType: "Cow peas",
        tonnageInKgs: 780,
        costInUgx: 10_000,
        procurementDate: new Date()
    },
    {
        id: 5,
        dealerName: "Hakim",
        produceType: "Soybeans",
        tonnageInKgs: 1500,
        costInUgx: 15_000,
        procurementDate: new Date()
    },
    {
        id: 6,
        dealerName: "Major",
        produceType: "Maize grains",
        tonnageInKgs: 3000,
        costInUgx: 10_000,
        procurementDate: new Date()
    }
]


// 2.**********************************************
// using .map() to include costPerKg
const records = procurementRecords.map(r => ({...r, costPerKg: r.costInUgx / r.tonnageInKgs}));


// 3.***************************************************
// using .filter
const bigRecords = records.filter( (r) => r.tonnageInKgs >= 1_000);
console.log('Filtered Array:');
console.log(bigRecords);
console.log(`Length: ${bigRecords.length }`); //Filtered Array: ${bigRecords}

// .reduce()
const totalTonnage = records.reduce((sum, r) => sum + r.tonnageInKgs, 0);
const totalCost = records.reduce((sum, r) => sum + r.costInUgx, 0);

console.log(`Total Tonnage ${totalTonnage} kgs, Total Cost: ${totalCost} UGX`);



//              PART B
// 5.***************************************
function getUniqueDealers(records) {
    const dealerSet = new Set(records.map(r=> r.dealerName));
    return Array.from(dealerSet);    
}
console.log(`Unique dealers: ${getUniqueDealers(procurementRecords)}`);


// 6.*******************************
const authorizedRoles = new Set(['Manager', 'Director']);

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole)
}

console.log(`Is manager authorized? ${isAuthorizedForProcurement('Manager')}`);
console.log(`Is Director authorized? ${isAuthorizedForProcurement('Director')}`);
console.log(`Is Sales Agent authorized? ${isAuthorizedForProcurement('Sales Agent')}`);

//                  PART C
// 7.******************************
const kglPriceList = new Map([
    ["Beans", 5500],
    ["Grain Maize", 4800],
    ["Cow peas", 6000],
    ["G-nuts", 7200],
    ["Soybeans", 5800],
])

// 8.******************************
function calculateSaleTotal(produceName, tonnageInKgs) {
    if (!kglPriceList.has(produceName)) return "Price not found";
    return kglPriceList.get(produceName) * tonnageInKgs; 
}

// 9.*************************************
let maxPrice = 0;
kglPriceList.forEach((price, name) => {
    // console.log(`Produce: ${name}, Price per kg: ${price} UGX`);
    if (price > maxPrice) maxPrice = price;
});
// console.log(`Highest Price : ${maxPrice}`);
