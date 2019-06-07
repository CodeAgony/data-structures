// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// Callback function expression
const logOutInput = (input) => console.log(input);

// Higher order function definition
const handleInput = (callback) => {
	let input = prompt("Give input");
	callback(input);
}

// The callback gets passed as a parameter
handleInput(logOutInput);
// logs out whatever was accepted as input