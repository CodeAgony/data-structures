// The map() method creates a new array with the results of calling a provided function on every element in the calling array

let users = ['Lora', 'Athena', 'Norberto', 'Cassidy', 'Jared']

// Map throught given array outputting result of each iteration in new array
let nicknameUsers =
  users.map((user, index) => `${user}-${index}`);