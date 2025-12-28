//                  PART A
// 1.***************************************
// function to calculate  procurements
function calculateProcurementCost(tonnageInKgs, pricePerKg ) {
    if (typeof tonnageInKgs !== 'number' || typeof pricePerKg !== 'number' || tonnageInKgs < 0 || pricePerKg < 0 ) {
        return "Invalid input"
    } else {
        return tonnageInKgs * pricePerKg;
    }   
}


console.log(calculateProcurementCost( 10, 200));


// 2.***************************************
// Arrow function
let validateBuyerName = (buyername) => buyername !== '' && buyername.length >= 2 ?  true : false;

console.log(validateBuyerName("q")); //false
console.log(validateBuyerName("Rech")); //true


// 3. ***************************8
function checkUserAuthorization(role) {
    switch (role) {
        case 'Manager':
            console.log("procurement_and_sales");         
            break;
        case 'Sales Agent':
            console.log("sales_only");         
            break;
        case 'Director':
            console.log("view_aggregations");         
            break;
        default:
            console.log("unauthorized");
            break;
    }    
}

checkUserAuthorization("Manager")



//                  PART B 
// 4. **********************************************
function createSalesRecord(produceName, tonnage, buyerNames, amountPaid) {
    return {
        id: Math.floor(1000 + Math.random() * 9000),
        "ProduceName": produceName,
        "tonnageInKgs": tonnage,
        "buyerNames": buyerNames,
        "amountPaid": amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    }    
}


let record = createSalesRecord("Beans", 10, "Rech Ayiik", 10_000);

// Add new property branch
record.branch = 'Maganjo';

// modifying value isCreditSale to true
record.isCreditSale = true;

// add due date using bracket notation
record['dueDate'] = '24-12-2025';

// using object.keys
console.log(Object.keys(record));


// 6. ************************************8
for (let key in record){
    console.log(`Property: [${key}],    Value: [${record[key]}]`);
}


//              PART C
// 7.*****************************************
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

// delcaring total
let total = 0;

// for loop
for (let i = 0; i < weeklyTonnage.length; i++) {
    total += weeklyTonnage[i];
}

// calculating average
let averageTonnage = total/weeklyTonnage.length;

console.log(`Totoal weekly tonnes: ${total} and average is: ${averageTonnage}`);


// 8.*****************************************



// 9. *******************************************
let inventory = [
    {name: 'Beans', tonnage: 500},
    {name: 'Maize', tonnage: 0},
    {name: 'G-nuts', tonnage: 300}
];

for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];
    if(element.tonnage === 0){
        console.log(`Manager Alert: ${element.name} is out of stock`);
        break;
    }
}