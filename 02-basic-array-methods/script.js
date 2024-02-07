let x;

const arr = [23, 45, 33, 91, 5];

// put a value at the end of an Array - push

arr.push(100);

// pop methods removes from the end 

arr.pop(); // removed the 100 that was pushed previously 

arr.unshift(6); // unshift added to the beginning of an array 

arr.shift(); // shift removed the 6 from the beginning of the array 

// arr.reverse();


x = arr.includes(23); // includes method looks for values that are in an array and will return true or false

x = arr.indexOf(23); // this will tell you the index of a value, if the value isn't there you will get a -1

x = arr.slice(1,4); // this will give you the the value of index 1 and stop before index 4 but not give you index 4 

// x = arr.splice(1, 4) // this changes the array and will give you both index 1 and 4 along with everything in between 


// x = arr.splice(3,1) // this how you can remove a value from an array and still changes the initial array

x = arr.splice(1, 4).reverse().toString().charAt(0); // methods can be chained on 

console.log(x);