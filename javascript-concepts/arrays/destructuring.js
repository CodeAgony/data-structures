// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const randomThings = ["Fork", "Table", "Lamp", "Laptop", "Pen"];

let [cutlery, furniture, hardware, electronics, stationery] = randomThings; 

console.log(cutlery, furniture, hardware, electronics, stationery);
// Expected output - Fork Table Lamp Laptop Pen