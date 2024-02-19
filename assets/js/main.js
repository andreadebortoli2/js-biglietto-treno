// -ask user's age
//     -set the variable travelerAge

const travelerAge = Number(prompt(`Insert the age of the traveler`));
// console.log(typeof travelerAge);

// -ask travel length
//     -set the variable travelLength
//           -add error message alert if the travelLength prompt give back a NaN

const travelLength = Number(prompt(`Insert the length of the travel`, `Write the raw Km length`));
// console.log(typeof travelLength);

// console.log(typeof NaN);
// console.log(isNaN(travelLength));
if (isNaN(travelLength)) {
    alert(`Error, the travel length must be a number`);
}

// -calculate the price
//     -variable travelLength * 0.21 € = price
//          -set kmPrice variable for future modifications
//          -set price as variable rawPrice

const kmPrice = 0.21
// console.log(travelLength * kmPrice);
const rawPrice = travelLength * kmPrice;
// console.log(rawPrice);

// -apply discounts if needed
//     -if under 18 discount 20%
//     -if over 65 discount 40%
//     -else no discount

/* 
if (travelerAge < 18) {
    console.log(rawPrice - (rawPrice / 100 * 20));
} else if (travelerAge >= 65) {
    console.log(rawPrice - (rawPrice / 100 * 40));
} else {
    console.log(rawPrice);
}
*/

// -show the result
//     -alert with the final price?
//         -show the price rounded up to two digits after the decimal point and the € symbol
//              -set an alertMessage variable to simplify the code

const alertMessage = `the price is € `

if (travelerAge < 18) {
    alert(alertMessage + ((rawPrice - (rawPrice / 100 * 20)).toFixed(2)));
} else if (travelerAge >= 65) {
    alert(alertMessage + ((rawPrice - (rawPrice / 100 * 40)).toFixed(2)));
} else {
    alert(alertMessage + (rawPrice.toFixed(2)));
}