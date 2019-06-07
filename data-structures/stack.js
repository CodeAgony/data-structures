// A stack is a basic data structure that can be logically thought of as a linear structure represented by a real physical stack or pile, 
//a structure where insertion and deletion of items takes place at one end called top of the stack. 
//The basic concept can be illustrated by thinking of your data set as a stack of plates or books 
//where you can only take the top item off the stack in order to remove things from it. This structure is used all throughout programming.
//The basic implementation of a stack is also called a LIFO (Last In First Out) to demonstrate the way it accesses data, 
//since as we will see there are various variations of stack implementations.
//There are basically three operations that can be performed on stacks. They are 1) inserting an item into a stack (push). 
//2) deleting an item from the stack (pop). 
//3) displaying the contents of the stack (peek). 

// create an array (which acts like a stack)
let myStack = [];
// add 0, 1, 2 to the stack
myStack.push(0, 1, 2);
// pop() - removes top element from the stack to possibly use it elsewhere
let stackTop = myStack.pop();
stackTop;
// peek() - displays top(last) element. Not built in JS. Use myStack[myStack.length-1] instead
myStack[myStack.length-1];

