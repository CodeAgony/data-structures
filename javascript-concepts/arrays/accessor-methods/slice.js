// The slice() method extracts a section of an array and returns a new array. Accepts parameters begin and end (optional) as integers of element indexes

const cars = ["Volvo", "VolksWagen", "Renault", "Peugeot", "Mazda"]

// Define beginning and end (end not included by default) of needed array
const renault = cars.indexOf("Renault");
const mazdaIcluded = cars.indexOf("Mazda") + 1;

const renaultToMazda = cars.slice(renault, mazdaIcluded);

console.log(renaultToMazda);
// Expected output - ['Renault', 'Peugeot', 'Mazda']