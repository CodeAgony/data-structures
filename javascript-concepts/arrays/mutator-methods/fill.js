// The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.

const array = [1, 3, 5, 7, 4];

array.fill(50, 4, 5);

console.log(array);
// Expected output - [ 1, 3, 5, 7, 50 ]