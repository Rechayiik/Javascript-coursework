let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let total = 0;
for (let index = 0; index < weeklyTonnage.length; index++) {
    total += weeklyTonnage[index];
}
let averageTonnage = total/weeklyTonnage.length;
console.log(`Totoal weekly tonnes: ${total} and average is: ${averageTonnage}`);
// console.log(averageTonnage);




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