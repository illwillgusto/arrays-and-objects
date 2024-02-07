let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];

// Array Constructor 
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

// Property called 'length' which will be used quite a bit 

x = numbers.length;

// Change a value 

fruits[2] = 'pear';

x = fruits;

// fruits.length = 2 (this changes the amount of array values to log)

fruits[fruits.length] = 'blueberry' // this method adds blueberry to the end of the array 

console.log(x);