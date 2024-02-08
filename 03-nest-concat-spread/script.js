// Nesting in an Array is having a index of an array inside an array 
let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3] [1];

const allFruits = [fruits, berries];

x = allFruits[1][0]

// Concat an array isn't bringing 2 or more arrays together but instead taking from one array and adding it to another array

x = fruits.concat(berries); // concat fruits array by adding berries array

// Spread Operators (...) used more with objects but is used with arrays 
x = [...fruits, ...berries];

// Flatten Arrays 
const arr = [1,2, [3,4], 5, [6,7], 8];

x = arr.flat();

// Static Methods on Array Objects 

x = Array.isArray(fruits); // checks to see if something is an Array

// From 

x = Array.from('12345'); // creates an array

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // also creates an array from the values 

console.log(x);