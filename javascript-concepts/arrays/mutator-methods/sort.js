// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
]

const inventorsByLastName = inventors.sort((a,b) => a.last > b.last);

console.log(inventorsByLastName);

console.log(inventors)

// When sorting numeric values, use a custom compare function

const inventorsByBirth = inventors.sort((a,b) => a.year - b.year);

console.log(inventorsByBirth);