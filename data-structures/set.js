// A set is an abstract data type that can store values without any particular order. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

// Create new set
const mySet = new Set([1, 2, 3]);

// Check for elements. Returns boolean
if (mySet.has(1)) {
console.log("Yass")}

// Check length
mySet.size

// Remove element. Return boolean of .has(value)
mySet.delete(3);

// Return value of each element
for (let value of mySet.values()) {
  console.log(value);
}

// Return array of equal [key, value] for each element. Similar to Map
for (let entry of mySet.entries()) {
    console.log(entry);
}

// Convert set to array
let mySetArray = Array.from(mySet);
mySetArray;

// Remove all elements
mySet.clear();