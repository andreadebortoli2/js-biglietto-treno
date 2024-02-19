// -ask user's age
//     -set the variable travelerAge

const travelerAge = Number(prompt(`Insert the age of the traveler`));
// console.log(typeof travelerAge);

// -ask travel length
//     -set the variable travelLength

const travelLength = Number(prompt(`Insert the length of the travel`, `Write the raw Km length`));
// console.log(typeof travelLength);

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

if (travelerAge < 18) {
    console.log(rawPrice - (rawPrice / 100 * 20))
} else if (travelerAge >= 65) {
    console.log(rawPrice - (rawPrice / 100 * 40))
} else {
    console.log(rawPrice);
}

// -show the result
//     -alert with the final price?
//         -show the price rounded up to two digits after the decimal point and the € symbol